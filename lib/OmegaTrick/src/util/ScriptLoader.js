/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

// {{{ Namespace

Ext.ns(
    'Ext.trick',
    'Ext.trick.util'
);

// }}}
// {{{ Ext.trick.util.ScriptLoader

/**
 * Ext.trick.util.ScriptLoader
 *
 * @author  Kazuhiro Kotsutsumi <kotsutsumi@xenophy.com>
 * @version 1.0
 */
Ext.trick.util.ScriptLoader = function(config) {

    var me = this;

    // 設定適用
    Ext.apply(me, config);

    // イベント初期化
    me.initEvents();

    // スーパークラスメソッドコール
    Ext.trick.util.ScriptLoader.superclass.constructor.call(me);
};

Ext.extend(Ext.trick.util.ScriptLoader, Ext.util.Observable, {

    // {{{ initEvents

    /**
     * イベント初期化メソッド
     *
     * @private
     * @return void
     */
    initEvents : function() {
    
        // イベント定義
        this.addEvents('load', 'next');
    },

    // }}}
    // {{{ load

    /**
     * 読み込みメソッド
     *
     * @return void
     */
    load: function() {

        var me = this,
            load = false;

        if (Ext.isObject(me.items)) {
            me.items = [me.items];
            load = true;
        }

        var item = me.items.shift();

        if(item) {
            me._load(item);
        } else {
            me.fireEvent('load', me);
        }
    },

    // }}}
    // {{{ _load

    /**
     * 読み込みメソッド
     *
     * @private
     * @return void
     */
    _load: function(item) {

        var me = this;
        var te = me.renderTo || document.body || document.documentElement;
        var script    = document.createElement('script');
        script.id     = item.id || Ext.id();
        script.src    = item.src;
        script.type   = item.type || 'text/javascript';

        if(item.charset) {
            script.charset = item.charset;
        }

        if (Ext.isIE) {
            script.onreadystatechange = function(){
                switch(script.readyState){
                  case 'complete':
                  case 'loaded' :
                        if(item.callback) {
                            item.callback.apply(item.scope || me, [script.id, me]);
                        }
                        me.load();
                    break;
                    default:
                    break;

                }
            };
        }

        Ext.get(te.appendChild(script)).on('load', function(e, t) {
            if(item.callback) {
                item.callback.apply(item.scope || me, [script.id, me]);
            }
            me.load();
        }, me);

    }

    // }}}

});

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */

