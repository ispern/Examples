/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */
/*jslint evil: true */

/// {{{ Namespace

Ext.ns(
    'Ext.trick'
);

// }}}
// {{{ Ext.trick.ScreenPanel

/**
 * Ext.trick.ScreenPanel
 *
 * @author  Kazuhiro Kotsutsumi <kotsutsumi@xenophy.com>
 * @version 1.0
 */
Ext.trick.ScreenPanel = Ext.extend(Ext.Panel,{

    // {{{ initComponent

    /**
     * コンポーネント初期化メソッド
     *
     * @return void
     */
    initComponent: function() {

        var me = this;

        Ext.applyIf(me, {
            layout: 'screen'
        });

        if(me.layout === 'screen') {
            Ext.applyIf(me, {
                activeItem: 0
            });
        }

        if(!me.initialConfig.items) {
            me.initialConfig.items = me.items;
        }

        // スーパークラスメソッドコール
        Ext.trick.ScreenPanel.superclass.initComponent.call(this);
    },

    // }}}
    // {{{ add

    /**
     * アイテム追加メソッド
     *
     * @param comp 追加コンポーネント
     * @return 追加されたコンポーネント
     */
    add : function(comp, num) {

        var me = this;

        // アイテム初期化
        me.initItems();

        var args = arguments.length > 1;
        if(args || Ext.isArray(comp)){
            var result = [];
            Ext.each(args ? arguments : comp, function(c, num){
                if(num == me.activeItem || c.id == me.activeItem) {
                    result.push(me.add(c));
                }
            }, me);
            return result;
        }

        // 以下は、単一のコンポーネントに対する処理
        var c = me.lookupComponent(me.applyDefaults(comp));
        var index = this.items.length;

        if(me.fireEvent('beforeadd', me, c, index) !== false && me.onBeforeAdd(c) !== false){
            me.items.add(c);
            c.onAdded(me, index);
            me.onAdd(c);
            me.fireEvent('add', me, c, index);
        }

        return c;
    }

    // }}}

});

// }}}
// {{{ Register xtype

Ext.reg('screen', Ext.trick.ScreenPanel);

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */

