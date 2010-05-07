/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */
/*jslint evil: true */

// {{{ Namespace

Ext.ns(
    'Ext.trick',
    'Ext.trick.parts'
);

// }}}
// {{{ Ext.trick.parts.Unit

/**
 * Ext.trick.parts.Unit Class
 *
 * @author  Kazuhiro Kotsutsumi <kotsutsumi@xenophy.com>
 * @version 1.0
 */
Ext.trick.parts.ListUnitPanel = Ext.extend(Ext.trick.ScreenPanel, {

    // {{{ initConfig

    /**
     * 設定オブジェクト初期化
     */
    initConfig : function() {

        var me = this;
        var config = me.trickConfig || {};
        config.list = config.list || {};
        config.unit = config.unit || {};
        var listConfig = config.list;
        var unitConfig = config.unit;

        // リストコンフィグ初期化
        if(listConfig.tbar) {

            if(Ext.isObject(listConfig.tbar)) {
                listConfig.tbar = [listConfig.tbar];
            } else if(Ext.isArray(listConfig.tbar)) {
                listConfig.tbar = listConfig.tbar;
            }

        } else {
            listConfig.tbar = [];
        }

        // オブジェクト初期化
        listConfig.grid = listConfig.grid || {};
        listConfig.grid.sm = listConfig.grid.sm || {};

        if(config.mode === 'view') {

            listConfig.tbar = listConfig.tbar.concat([{

                // アイテムID設定
                itemId: 'btnView',

                // テキスト設定
                text: '詳細表示',

                // アイコンクラス設定
                iconCls: 'tx-icon-detailview',

                // 無効化設定
                disabled: true,

                // ハンドラ設定
                handler: me.onBtnView,

                // スコープ設定
                scope: me

            }]);

            Ext.applyIf(listConfig.grid, {

                // リスナー設定
                listeners: {
                    dblclick: {
                        fn: me.onBtnView,
                        scope: me
                    }
                }
            });

            // セレクションモデルコンフィグオプション設定
            Ext.applyIf(listConfig.grid.sm, {

                // シングル選択設定
                singleSelect: true,

                // リスナー設定
                listeners: {
                    rowselect: {
                        fn : function() {
                            var list = me.getComponent('listpanel');
                            var btnView = me.panels.list.getTopToolbar().getComponent('btnView');
                            var grid = me.panels.list.panels.grid;
                            var sm = grid.getSelectionModel();
                            var selection = sm.getSelections();

                            // 詳細表示ボタン制御
                            if(selection && Ext.isArray(selection) && selection.length > 0) {
                                btnView.enable();
                            }
                        },
                        scope: me
                    },
                    rowdeselect: {
                        fn: function() {
                            var list = me.getComponent('listpanel');
                            var btnView = me.panels.list.getTopToolbar().getComponent('btnView');
                            var grid = me.panels.list.panels.grid;
                            var sm = grid.getSelectionModel();
                            var selection = sm.getSelections();

                            // 詳細表示ボタン制御
                            if(selection && Ext.isArray(selection) && selection.length === 0) {
                                btnView.disable();
                            }

                        }
                    }
                }
            });

        } else if(config.mode === 'edit') {

            listConfig.tbar = listConfig.tbar.concat([{

                // アイテムID設定
                itemId: 'btnAppend',

                // テキスト設定
                text: '新規追加',

                // アイコンクラス設定
                iconCls: 'tx-icon-append',

                // ハンドラ設定
                handler: me.onBtnAppend,

                // スコープ設定
                scope: me

            },{

                // アイテムID設定
                itemId: 'btnEdit',

                // テキスト設定
                text: '編集',

                // アイコンクラス設定
                iconCls: 'tx-icon-edit',

                // 無効化設定
                disabled: true,

                // ハンドラ設定
                handler: me.onBtnEdit,

                // スコープ設定
                scope: me

            },{

                // アイテムID設定
                itemId: 'btnRemove',

                // テキスト設定
                text: '削除',

                // アイコンクラス設定
                iconCls: 'tx-icon-remove',

                // 無効化設定
                disabled: true,

                // ハンドラ設定
                handler: me.onBtnRemove,

                // スコープ設定
                scope: me

            }]);

            Ext.applyIf(listConfig.grid, {

                // リスナー設定
                listeners: {
                    dblclick: {
                        fn: me.onBtnEdit,
                        scope: me
                    }
                }
            });

            // セレクションモデルコンフィグオプション設定
            Ext.applyIf(listConfig.grid.sm, {

                // シングル選択設定
                singleSelect: true,

                // リスナー設定
                listeners: {
                    rowselect: {
                        fn : function() {
                            var list = me.getComponent('listpanel');
                            var btnEdit = me.panels.list.getTopToolbar().getComponent('btnEdit');
                            var btnRemove = me.panels.list.getTopToolbar().getComponent('btnRemove');
                            var grid = me.panels.list.panels.grid;
                            var sm = grid.getSelectionModel();
                            var selection = sm.getSelections();

                            // 詳細表示ボタン制御
                            if(selection && Ext.isArray(selection) && selection.length > 0) {
                                btnEdit.enable();
                                btnRemove.enable();
                            }
                        },
                        scope: me
                    },
                    rowdeselect: {
                        fn: function() {
                            var list = me.getComponent('listpanel');
                            var btnEdit = me.panels.list.getTopToolbar().getComponent('btnEdit');
                            var btnRemove = me.panels.list.getTopToolbar().getComponent('btnRemove');
                            var grid = me.panels.list.panels.grid;
                            var sm = grid.getSelectionModel();
                            var selection = sm.getSelections();

                            // 詳細表示ボタン制御
                            if(selection && Ext.isArray(selection) && selection.length === 0) {
                                btnEdit.disable();
                                btnRemove.disable();
                            }
                        }
                    }
                }
            });
        }

        // ユニットコンフィグ設定
        Ext.applyIf(unitConfig, {

            // モード設定
            mode: config.mode

        });

    },

    // }}}
    // {{{ initComponent

    /**
     * コンポーネント初期化メソッド
     */
    initComponent : function() {

        var me = this,
            config = me.trickConfig || {};

        // ID設定
        Ext.applyIf(me, {id: Ext.id()});

        // コンフィグ初期化
        me.initConfig();

        var tempConfig = config;

        var listeners = {
            'backlist': {
                fn: function() {
                    me.layout.setActiveItem(0);
                },
                scope: me
            }
        };

        if(config.mode === 'view') {
            listeners.show = {
                fn: me.onShowDetail,
                scope: me
            };
        } else if(config.mode === 'edit') {
            listeners.show = {
                fn: me.onShowEdit,
                scope: me
            };
        }

        // テンポラリコンフィグ設定
        tempConfig = {

            // CSSクラス設定
            cls: 'tx-unit',

            // xtype
            xtype: 'screen',

            // ボーダー設定
            border: false,

            // アイテム設定
            items: [{

                // アイテムID設定
                itemId: 'listpanel',

                // リファレンス設定
                ref: 'panels.list',

                // 固定設定
                fix: true,

                // ボーダー設定
                border: false,

                // xtype設定
                xtype: config.listXType || 'trick-list',

                // トリックコンフィグ設定
                trickConfig: config.list

            },{

                // ID設定
                id: me.id + '_UNIT',

                // アイテムID設定
                itemId: 'unitpanel',

                // リファレンス設定
                ref: 'panels.unit',

                // ボーダー設定
                border: false,

                // xtype設定
                xtype: config.unitXType || 'trick-unit',

                // リスナー設定
                listeners: listeners,

                // トリックコンフィグ設定
                trickConfig: config.unit
            }]

        };

        // コンフィグ適用
        Ext.applyIf(me, tempConfig);

        // スーパークラスメソッドコール
        Ext.trick.parts.ListUnitPanel.superclass.initComponent.call(me);
    },

    // }}}
    // {{{ onBtnView

    onBtnView: function() {

        var me = this;

        me.layout.setActiveItem(me.id + '_UNIT');
    },

    // }}}
    // {{{ onBtnAppend

    onBtnAppend: function() {

        var me = this;

        var sm = me.panels.list.panels.grid.getSelectionModel();
        sm.clearSelections();

        me.layout.setActiveItem(me.id + '_UNIT');
    },

    // }}}
    // {{{ onBtnEdit

    onBtnEdit: function() {

        var me = this;

        me.layout.setActiveItem(me.id + '_UNIT');
    },

    // }}}
    // {{{ onBtnRemove

    onBtnRemove: function() {

        var me = this,
            grid = me.panels.list.panels.grid,
            store = grid.store,
            sm = grid.getSelectionModel(),
            btnRemove = me.panels.list.getTopToolbar().getComponent('btnRemove'),
            btnEdit = me.panels.list.getTopToolbar().getComponent('btnEdit');

        if(sm.getCount() > 0) {

            var r = sm.getSelected();

            Ext.Msg.confirm(
                '確認',
                '選択されたアイテムを削除しますか？',
                function(btn){
                    if(btn === 'yes') {

                        btnRemove.disable();
                        btnEdit.disable();

                        me.body.mask();

                        OmegaTrick_List.removeUnit(r.get('id'), function() {
                            store.reload({
                                callback : function() {
                                    me.body.unmask();
                                },
                                scope: me
                            });
                        }, me);
                    }
                },
                me);
        }
    },

    // }}}
    // {{{ onShowDetail

    onShowDetail: function(p) {

        var me = this,
            grid = me.panels.list.panels.grid,
            sm = grid.getSelectionModel();

        p.loadData(sm.getSelected(), grid.store);

    },

    // }}}
    // {{{ onShowEdit

    onShowEdit : function(p) {

        var me = this,
            grid = me.panels.list.panels.grid,
            sm = grid.getSelectionModel();

        p.loadData(sm.getSelected(), grid.store);


    }

    // }}}

});

// }}}
// {{{ Register xtype

Ext.reg('trick-listunit', Ext.trick.parts.ListUnitPanel);

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */

