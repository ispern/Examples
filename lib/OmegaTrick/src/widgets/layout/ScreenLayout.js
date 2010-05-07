/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */
/*jslint evil: true */

// {{{ Namespace

Ext.ns(
    'Ext.trick',
    'Ext.trick.layout'
);

// }}}
// {{{ Ext.trick.layout.ScreenLayout

/**
 * Ext.trick.layout.ScreenLayout
 *
 * @author  Kazuhiro Kotsutsumi <kotsutsumi@xenophy.com>
 * @version 1.0
 */
Ext.trick.layout.ScreenLayout = Ext.extend(Ext.layout.FitLayout, {

    // {{{ deferrdRender

    /**
     * 遅延レンダリング設定
     */
    deferredRender : false,

    /**
     *
     */
    layoutOnCardChange : false,

    /**
     *
     */
    renderHidden : true,

    // }}}
    // {{{ constructor

    /**
     * コンストラクタ
     *
     * @param config コンフィグオプション
     * @return void
     */
    constructor: function(config) {

        // スーパークラスメソッドコール
        Ext.trick.layout.ScreenLayout.superclass.constructor.apply(this, arguments);

    },

    // }}}
    // {{{ destroyFlexItems

    /**
     * フレックスアイテム削除メソッド
     *
     * 固定アイテム以外を削除します。
     *
     * @return void
     */
    destroyFlexItems : function() {

        var me = this,
            c = me.container,
            ci = c.items,
            ic = c.initialConfig,
            ici = ic.items;

        Ext.iterate(ci.items, function(item, cnt, items) {
            if(!item.fix) {
                item.destroy();
            } else {
                item.hide();
            }
        });
    },

    // }}}
    // {{{ setContainer

    setContainer : function(ct){

        var me = this;

        Ext.trick.layout.ScreenLayout.superclass.setContainer.call(me, ct);

    },

    // }}}
    // {{{ setActiveItem

    /**
     * アクティブアイテム設定メソッド
     *
     * @param item 設定アイテム
     */
    setActiveItem : function(item) {

        var me = this,
            c = me.container,
            ci = c.items,
            ic = c.initialConfig,
            ici = ic.items,
            ai = me.activeItem,
            oi = item;

        var si;

        // フレックスアイテム削除
        me.destroyFlexItems();

        if(Ext.isNumber(item)) {

            // 数値での指定の場合
            if(ci.items[item]) {
                si = ci.items[item];
            } else {
                si = c.add(ici[item]);
            }
        } else if(Ext.isString(item)) {

            // IDで指定された場合
            var id = item;

            // 存在するアイテム内から検索
            Ext.iterate(ci.items, function(item, cnt, items) {
                if(item.id === id) {
                    si = item;
                }
            });

            // アイテム内に存在しない場合
            if(!si) {
                Ext.iterate(ici, function(item, cnt, items) {
                    if(item.id === id) {
                        si = c.add(item);
                    }
                });
            }

        } else {

            // オブジェクトで指定された場合
            var target = item;

            Ext.iterate(ci.items, function(item, cnt, items) {
                if(item === target) {
                    si = item;
                }
            });

        }

        if(si) {
            si.show();
            me.activeItem = si;
        }

        me.layout();

        if(si) {
            si.doLayout();
            si.fireEvent('activate', si);
        }

    },

    // }}}
    // {{{ renderAll

    renderAll : function(ct, target){

        var me = this;

        if(me.deferredRender){
            me.renderItem(me.activeItem, undefined, target);
        }else{
            Ext.trick.layout.ScreenLayout.superclass.renderAll.call(me, ct, target);
        }
    }

    // }}}

});

// }}}
// {{{ Register Layout

Ext.Container.LAYOUTS.screen = Ext.trick.layout.ScreenLayout;

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */

