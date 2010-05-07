/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */
/*jslint evil: true */

// {{{ Ext.trick.TrickPanel

/**
 * Ext.trick.TrickPanel Class
 *
 * @author  Kazuhiro Kotsutsumi <kotsutsumi@xenophy.com>
 * @version 1.0
 */
Ext.trick.TrickPanel = Ext.extend(Ext.Panel, {

    // {{{ trick

    /**
     * トリックタイプ設定
     */
    trick : null,

    // }}}
    // {{{ trickConfig

    /**
     * トリック設定
     */
    trickConfig: {},

    // }}}
    // {{{ trickPartsConfig

    /**
     * トリックパーツ設定
     */
    trickPartsConfig: {},

    // }}}
    // {{{ initComponent

    /**
     * コンポーネント初期化メソッド
     *
     * @return void
     */
    initComponent : function() {

        var me = this;

        // ID設定
        Ext.applyIf(me, {id: Ext.id()});

        if(me.trick) {

            var parts = {};

            Ext.applyIf(parts, {

                // アイテムID設定
                itemId: me.id + '_trickParts',

                // xtype設定
                xtype: 'trick-' + (me.initialConfig.trick || me.trick),

                // ボーダー設定
                border: false,

                // トリックコンフィグ設定
                trickConfig: me.trickConfig
            });

            // アイテム設定
            Ext.applyIf(me, {

                // レイアウト設定
                layout: 'fit',

                // アイテム設定
                items: parts
            });
        }

        // スーパークラスメソッドコール
        Ext.trick.TrickPanel.superclass.initComponent.call(me);
    },

    // }}}
    // {{{ initEvents

    initEvents : function() {

        var me = this;

        me.on('afterrender', me.onAfterRender, me);

        // スーパークラスメソッドコール
        Ext.trick.TrickPanel.superclass.initEvents.apply(me, arguments);

    },

    // }}}
    // {{{ onAfterRender

    onAfterRender : function() {

        var me = this;

        me.trickParts = me.getComponent(me.id + '_trickParts');
    }

    // }}}

});

// }}}
// {{{ Register xtype

Ext.reg('trick', Ext.trick.TrickPanel);

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */

