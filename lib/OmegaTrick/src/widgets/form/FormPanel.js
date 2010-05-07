/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */
/*jslint evil: true */

// {{{ Namespace

Ext.ns(
    'Ext.trick',
    'Ext.trick.form'
);

// }}}
// {{{ Ext.trick.form.FormPanel

Ext.trick.form.FormPanel = Ext.extend(Ext.form.FormPanel, {

    // {{{ defaultType

    defaultType: 'container',

    // }}}
    // {{{ forms

    forms: {},

    // }}}
    // {{{ initComponent

    /**
     * コンポーネント初期化メソッド
     */
    initComponent : function() {

        var me = this;

        // イベントリスナー設定
        me.on('beforerender', me.onBeforeRender, me);
        me.on('afterrender', me.onAfterRender, me);

        // スーパークラスメソッドコール
        Ext.trick.form.FormPanel.superclass.initComponent.apply(me, arguments);

    },

    // }}}
    // {{{ initEvents

    initEvents : function() {

        var me = this;

        // スーパークラスメソッドコール
        Ext.trick.form.FormPanel.superclass.initEvents.apply(me, arguments);
    },

    // }}}
    // {{{ onAfterRender

    onAfterRender : function() {

        var me = this;

        // フォームアイテムスキャン
        me.scanFormItems(me.items);
    },

    // }}}
    // {{{ onBeforeRender

    onBeforeRender : function() {

        var me = this;

        me.setDeepLayout(me.initialConfig.items);
    },

    // }}}
    // {{{ setDeepLayout

    setDeepLayout : function(items) {

        var me = this;

        Ext.each(items, function(item, cnt, items) {

            if(!item.layout) {
                item.layout = 'form';
            }

            if(item && item.items && item.items.length > 0) {
                me.setDeepLayout(item.items);
            }
        }, me);

   },

    // }}}
    // {{{ scanFormItems

    /**
     * フォームアイテムスキャンメソッド
     *
     * @return void
     */
    scanFormItems : function(items) {

        var me = this;

        items.each(function(item, index, length) {

            var setkey = item.name || item.itemId || item.id;

            if(item instanceof Ext.form.Field) {
                me.forms[setkey] = item;
            }

            if(!(item instanceof Ext.form.CompositeField) && item.items && item.items.getCount() > 0) {
                me.scanFormItems(item.items);
            } else if(item instanceof Ext.form.CompositeField) {

                item.on('afterrender', function(field){
                    Ext.iterate(field.items.items, function(item, cnt, items) {

                        var src = me.forms[setkey];
                        src.forms = src.forms || {};
                        var forms = src.forms;

                        forms[item.name || item.itemId || item.id] = src.items.items[cnt];
                    });
                });
            } else if(item instanceof Ext.Button) {
                me.formButtons = me.formButtons || {};
                me.formButtons[setkey] = item;
            }
        }, me);
    }

    // }}}

});

// }}}
// {{{ Register xtype

Ext.reg('advform', Ext.trick.form.FormPanel);

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */

