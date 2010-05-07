/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */
/*jslint evil: true */

// {{{ Namespace

Ext.ns(
    'Ext.trick',
    'Ext.trick.parts'
);

// }}}
// {{{ Ext.trick.parts.List

/**
 * Ext.trick.parts.List Class for enhancing
 *
 * @author  Kazuhiro Kotsutsumi <kotsutsumi@xenophy.com>
 * @version 1.0
 */
Ext.trick.parts.ListPanel = Ext.extend(Ext.Panel, {

    // {{{ initConfig

    /**
     * 設定オブジェクト初期化
     */
    initConfig : function() {

        var me = this,
            config = me.trickConfig || {};

        Ext.applyIf(config, {
            store: {},
            colModel: {},
            grid: {}
        });

        // ストア設定
        Ext.applyIf(config.store, {

            // Ext.Direct関数設定
            directFn: config.store.directFn || OmegaTrick_List.readList,

            // レストフル設定
            restful: config.store.restful || true,

            // 自動読み込み設定
            autoLoad: config.store.autoLoad || true,

            // パラメータ順設定
            paramOrder: config.store.paramOrder || 'start|limit|sort|dir|query',

            // リモートソート設定
            remoteSort: config.store.remoteSotr || true,

            // パラメータハッシュ設定
            paramsAsHash: config.store.paramsAsHash || false,

            // IDプロパティ設定
            idProperty: config.store.idProperty || 'id',

            // ルート設定
            root: config.store.root || 'items',

            // ベースパラメーター設定
            baseParams: config.store.baseParams || {

                // 開始
                start: 0,

                // リミット
                limit: 50,

                // ソート
                sort: 'modified',

                // 並び順
                dir: 'DESC',

                // クエリー設定
                query: ''

            },

            // フィールド設定
            fields: config.store.fields || [

                // ID
                'id',

                // キャプション
                'caption',

                // 更新日時
                {name: 'modified', type: 'date', dateFormat: 'Y-m-d h:i:s'},

                // 作成日時
                {name: 'created', type: 'date', dateFormat: 'Y-m-d h:i:s'}
           ]

        });

        // カラムモデル設定
        Ext.applyIf(config.colModel, {

            // デフォルト設定
            defaults: config.colModel.defaults || {

                // 幅設定
                width: 120,

                // ソート設定
                sortable: true
            },

            // カラム設定
            columns: config.colModel.columns || [
                {header: 'タイトル', width: 200, sortable: true, dataIndex: 'caption'},
                {header: '更新日時', width: 200, sortable: true, dataIndex: 'modified',renderer: Ext.util.Format.dateRenderer('Y/m/d H:i:s')},
                {header: '作成日時', width: 200, sortable: true, dataIndex: 'created' ,renderer: Ext.util.Format.dateRenderer('Y/m/d H:i:s')}
            ]

        });

        // ページングツールバー設定
        if(config.ptbar) {

            Ext.applyIf(config.ptbar, {

                // ページサイズ設定
                paseSize: 50,

                // ツールバー情報表示設定
                displayInfo: true,

                // 情報メッセージ設定
                displayMsg: '表示中のアイテム: {2} 件中 {0} - {1} 件',

                // 空メッセージ
                emptyMsg: '表示するアイテムがありません。'
            });
        }
    },

    // }}}
    // {{{ initComponent

    /**
     * コンポーネント初期化メソッド
     */
    initComponent : function() {

        var me = this,
            config = me.trickConfig || {},
            storeCls = config.storeCls || Ext.data.DirectStore,
            colModelCls = config.colModelCls || Ext.grid.ColumnModel;
            smCls = config.smCls || Ext.grid.RowSelectionModel;

        // ID設定
        Ext.applyIf(me, {id: Ext.id()});

        // コンフィグ初期化
        me.initConfig();

        // ストア生成
        var store = new storeCls(config.store);

        // グリッドコンフィグ
        var gridConfig = config.gird || {};
        Ext.applyIf(gridConfig, {

            // アイテムID設定
            itemId: 'grid',

            // リファレンス設定
            ref: 'panels.grid',

            // xtype設定
            xtype: 'grid',

            // ボーダー設定
            border: false,

            // スタイル設定
            style: {
                borderTop: '1px solid #D0D0D0'
            },

            // ストア設定
            store: store,

            // カラムモデル設定
            colModel: new colModelCls(config.colModel),

            // リスナー設定
            listeners: config.grid.listeners || {},

            // セレクションモデル設定
            sm: new smCls(config.grid.sm)
        });

        // テンポラリコンフィグ設定
        var tempConfig = {

            // レイアウト設定
            layout: 'fit',

            // CSSクラス設定
            cls: 'tx-list',

            // アイテム設定
            items:[gridConfig]

        };

        // 検索ボックス
        if(config.searchBox) {

            // テンポラリコンフィグレイアウト変更
            tempConfig.layout = 'border';

            // グリッドコンフィグリージョン設定
            gridConfig.region = 'center';

            var detailXType = 'trick-searchdetail';

            if(Ext.isObject(config.searchBox) && config.searchBox.xtype) {
                detailXType = config.searchBox.xtype;
            }

            // テンポラリコンフィグアイテム追加
            tempConfig.items.push({

                // アイテムID設定
                itemId: me.id + '_SearchDetail',

                // 検索用ストア設定
                searchStore: store,

                // リージョン設定
                region: 'north',

                // ボーダー設定
                border: false,

                // xtype設定
                xtype: detailXType,

                // 開閉アニメーション設定
                animCollapse : (config.searchBox.anim === true) || false,

                // 開閉モード設定
                collapseMode: 'mini',

                // スプリット設定
                split: true,

                // 開閉設定
                collapsed: true,

                // リスナー設定
                listeners: {
                    beforeexpand: {
                        fn : function() {
                            var dsb = me.getTopToolbar().getComponent('btnSearchDetail');
                            var sf = me.getTopToolbar().getComponent('SearchFiled');
                            var sl = me.getTopToolbar().getComponent('SearchLabelText');
                            var sdp = me.getComponent(me.id + '_SearchDetail');

                            /*
                            Ext.iterate(sdp.forms, function(key, item, items) {
                                if(item.label) {
                                    item.label.hide();
                                }
                                console.log(item);
                                item.hide();
                            });

                            Ext.iterate(sdp.formButtons, function(key, item, items) {
                                item.hide();
                            });
*/
                            sf.disable();
                            dsb.toggle(true, true);
                            sl.addClass('tx-text-disable');
                            sl.removeClass('tx-text-enable');

                       }
                    },
                    expand: {
                        fn: function() {

                            var sdp = me.getComponent(me.id + '_SearchDetail');
                            /*
                            Ext.iterate(sdp.forms, function(key, item, items) {
                                if(item.label) {
                                    item.label.show();
                                }
                                item.show();
                            });

                            Ext.iterate(sdp.formButtons, function(key, item, items) {
                                item.show();
                            });
*/
                            sdp.doLayout();
                        }
                    },
                    beforecollapse: {
                        fn : function() {
                            var dsb = me.getTopToolbar().getComponent('btnSearchDetail');
                            var sf = me.getTopToolbar().getComponent('SearchFiled');
                            var sl = me.getTopToolbar().getComponent('SearchLabelText');
                            var sdp = me.getComponent(me.id + '_SearchDetail');

                            /*
                            Ext.iterate(sdp.forms, function(key, item, items) {
                                if(item.label) {
                                    item.label.hide();
                                }
                                item.hide();
                            });

                            Ext.iterate(sdp.formButtons, function(key, item, items) {
                                item.hide();
                            });
*/
                            dsb.toggle(false, true);
                            sf.enable();
                            sl.addClass('tx-text-enable');
                            sl.removeClass('tx-text-disable');
                       }
                    }
                }
            });

            var searchBoxTbar = [{

                // アイテムID設定
                itemId: 'SearchLabelText',

                // xtype設定
                xtype: 'tbtext',

                // テキスト設定
                text: '検索:'
            },
            new Ext.ux.form.SearchField({

                // アイテムID設定
                itemId: 'SearchFiled',

                // サイズ設定
                width: 240,

                // ストア設定
                store: store

            }),'-',{

                // アイテムID設定
                itemId: 'btnSearchDetail',

                // アイコンクラス設定
                iconCls: 'tx-icon-searchdetail',

                // トグル設定
                enableToggle: true,

                // テキスト設定
                text: '詳細検索',

                // リファレンス設定
                ref: '../searchBox.btnSearchDetail',

                // ハンドラ設定
                toggleHandler : function(button, state) {

                    var sf = me.getTopToolbar().getComponent('SearchFiled');
                    var sdp = me.getComponent(me.id + '_SearchDetail');

                    if(state) {
                        sf.disable();
                        sdp.expand();
                    } else {
                        sf.enable();
                        sdp.collapse();
                    }

                    me.fireEvent('toggleSearchDetail', state);
                },

                // スコープ設定
                scope: me
            }];

            if(Ext.isObject(config.tbar)) {

                serachBoxTbar = [
                    config.tbar,{
                    xtype: 'tbseparator'
                }].concat(searchBoxTbar);

            } else if(Ext.isArray(config.tbar)) {

                searchBoxTbar = config.tbar.concat([{
                    xtype: 'tbseparator'
                }]).concat(searchBoxTbar);

            }

            Ext.apply(me, {

                // 検索ボックスオブジェクト
                searchBox: {},

                // トップツールバー設定
                tbar: searchBoxTbar
            });
        }

        // ページングツールバー生成
        if(config.ptbar) {

            // ストア設定
            Ext.applyIf(config.ptbar, {
                store: store
            });

            var pos = config.ptbar.position;

            if(pos === 'top') {
                tempConfig.tbar = new Ext.PagingToolbar(config.ptbar);
            } else if(pos == 'bottom') {
                tempConfig.bbar = new Ext.PagingToolbar(config.ptbar);
            } else {

                if(pos.both && Ext.isObject(pos.both)) {
                    if(pos.both.top === true && pos.both.bottom !== true) {

                        config.ptbar.listeners = config.ptbar.listeners || {};
                        config.ptbar.listeners.change = {
                            fn: function() {
                                var pt = me.getTopToolbar(),
                                    bbar = me.getBottomToolbar(),
                                    count = pt.store.getCount(),
                                    info = bbar.getComponent('ptbar_info');

                                    var msg = count == 0 ? pt.emptyMsg : String.format(
                                        pt.displayMsg,
                                        pt.cursor+1, pt.cursor+count, pt.store.getTotalCount()
                                    );
                                    info.setText(msg);
                            }
                        };

                        tempConfig.tbar = new Ext.PagingToolbar(config.ptbar);

                        if(!me.bbar) {
                            me.bbar = [];
                        }

                        me.bbar.push('->');
                        me.bbar.push({
                             // xtype設定
                            xtype: 'tbtext',

                            // アイテムID
                            itemId: 'ptbar_info'
                        });

                    } else if(pos.both.top !== true && pos.both.bottom === true) {

                        config.ptbar.listeners = config.ptbar.listeners || {};
                        config.ptbar.listeners.change = {
                            fn: function() {
                                var pt = me.getBottomToolbar(),
                                    tbar = me.getTopToolbar(),
                                    count = pt.store.getCount(),
                                    info = tbar.getComponent('ptbar_info');

                                    var msg = count == 0 ? pt.emptyMsg : String.format(
                                        pt.displayMsg,
                                        pt.cursor+1, pt.cursor+count, pt.store.getTotalCount()
                                    );
                                    info.setText(msg);
                            }
                        };

                        tempConfig.bbar = new Ext.PagingToolbar(config.ptbar);

                        if(!me.tbar) {
                            me.tbar = [];
                        }

                        me.tbar.push('->');
                        me.tbar.push({
                             // xtype設定
                            xtype: 'tbtext',

                            // アイテムID
                            itemId: 'ptbar_info'
                        });

                    } else {
                        tempConfig.tbar = new Ext.PagingToolbar(config.ptbar);
                        tempConfig.bbar = new Ext.PagingToolbar(config.ptbar);
                    }
                } else {
                    tempConfig.tbar = new Ext.PagingToolbar(config.ptbar);
                    tempConfig.bbar = new Ext.PagingToolbar(config.ptbar);
                }
            }
        }

        // コンフィグ適用
        Ext.applyIf(me, tempConfig);

        // スーパークラスメソッドコール
        Ext.trick.parts.ListPanel.superclass.initComponent.call(me);

    },

    // }}}
    // {{{ initEvents

    initEvents : function() {

        var me = this;

        me.on('afterrender', me.onAfterRender, me);

        // スーパークラスメソッドコール
        Ext.trick.parts.ListPanel.superclass.initEvents.apply(me, arguments);

    },

    // }}}
    // {{{ onAfterRender

    onAfterRender : function() {

        var me = this;

    }

    // }}}

});

// }}}
// {{{ Register xtype

Ext.reg('trick-list', Ext.trick.parts.ListPanel);

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */

