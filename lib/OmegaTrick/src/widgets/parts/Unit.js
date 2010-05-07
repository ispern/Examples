/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */
/*jslint evil: true */

// {{{ Namespace

Ext.ns(
    'Ext.trick',
    'Ext.trick.parts'
);

// }}}
// {{{ Ext.trick.parts.UnitPanel

/**
 * Ext.trick.parts.UnitPanel
 *
 * @author  Kazuhiro Kotsutsumi <kotsutsumi@xenophy.com>
 * @version 1.0
 */
Ext.trick.parts.UnitPanel = Ext.extend(Ext.trick.form.FormPanel, {

    // {{{ baseRecord

    baseRecord: null,

    // }}}
    // {{{ initConfig

    initConfig : function() {

        var me = this,
            config = me.trickConfig;

        Ext.applyIf(me, config);

        if(Ext.isObject(me.tbar)) {
            me.tbar = [me.tbar];
        } else if(Ext.isArray(me.tbar)) {
            me.tbar = me.tbar;
        } else {
            me.tbar = [];
        }

        me.tbar = me.tbar.concat([{

            // テキスト設定
            text: '一覧へ戻る',

            // アイコンクラス設定
            iconCls: 'tx-icon-backlist',

            // ハンドラ設定
            handler: function() {

                if(!me.baseRecord.dirty) {

                    me.store.reload({
                        callback: function() {
                            me.fireEvent('backlist');
                        },
                        scope: me
                    });

                } else {
                    Ext.Msg.confirm('確認', '内容が変更されています。<br>内容を破棄して一覧へ戻りますか？',function(btn) {
                        if(btn === 'yes') {
                            me.store.reload({
                                callback: function() {
                                    me.fireEvent('backlist');
                                },
                                scope: me
                            });
                        }
                    });
                };
            },

            // スコープ
            scope: me
        }]);

        if(config.mode === 'edit') {

            me.tbar = me.tbar.concat(['-',{

                // アイテムID設定
                itemId: 'btnSave',

                // テキスト設定
                text: '保存',

                // アイコンクラス設定
                iconCls: 'tx-icon-save',

                // 無効化設定
                disabled: true,

                // ハンドラ設定
                handler: me.onSave,

                // スコープ
                scope: me
            },{

                // アイテムID設定
                itemId: 'btnPageSave',

                // テキスト設定
                text: '保存して編集を続ける',

                // アイコンクラス設定
                iconCls: 'tx-icon-pagesave',

                // 無効化設定
                disabled: true,

                // ハンドラ設定
                handler: me.onPageSave,

                // スコープ
                scope: me
            }]);
        }

    },

    // }}}
    // {{{ initComponent

    /**
     * コンポーネント初期化
     */
    initComponent : function() {

        var me = this;

        // コンフィグ初期化
        me.initConfig();

        Ext.apply(me, {
            cls: 'tx-unit'
        });

        if(me.mode === 'view') {

            Ext.applyIf(me, {

                // パディング設定
                padding: 20,

                // アイテム設定
                items: [{

                    // アイテムID設定
                    itemId: 'caption',

                    // xtype設定
                    xtype: 'displayfield',

                    // ラベル設定
                    fieldLabel: 'タイトル'
                },{

                    // アイテムID設定
                    itemId: 'modified',

                    // xtype設定
                    xtype: 'displayfield',

                    // ラベル設定
                    fieldLabel: '更新日時'
                },{

                    // アイテムID設定
                    itemId: 'created',

                    // xtype設定
                    xtype: 'displayfield',

                    // ラベル設定
                    fieldLabel: '作成日時'
                }]

            });

        } else if(me.mode === 'edit') {

            Ext.applyIf(me, {

                // パディング設定
                padding: 20,

                // アイテム設定
                items: [{

                    // アイテムID設定
                    itemId: 'caption',

                    // xtype設定
                    xtype: 'textfield',

                    // キーイベント有効化
                    enableKeyEvents: true,

                    // リスナー設定
                    listeners: {
                        keyup: {
                            fn: function(field, e) {

                                var btnSave = me.getTopToolbar().getComponent('btnSave');
                                var btnPageSave = me.getTopToolbar().getComponent('btnPageSave');
                                me.baseRecord.set('caption', field.getValue());

                                if(me.baseRecord.dirty) {
                                    btnSave.enable();
                                    btnPageSave.enable();
                                    Ext.trick.app.Entry.setLeaveMessage('情報が変更されています。');
                                } else {

                                    btnSave.disable();
                                    btnPageSave.disable();
                                }
                            },
                            scope: me
                        }
                    },

                    // ラベル設定
                    fieldLabel: 'タイトル'
                },{

                    // アイテムID設定
                    itemId: 'modified',

                    // xtype設定
                    xtype: 'textfield',

                    // キーイベント有効化
                    enableKeyEvents: true,

                    // リスナー設定
                    listeners: {
                        keyup: {
                            fn: function(field, e) {

                                var btnSave = me.getTopToolbar().getComponent('btnSave');
                                var btnPageSave = me.getTopToolbar().getComponent('btnPageSave');
                                me.baseRecord.set('modified', field.getRawValue());

                                if(me.baseRecord.dirty) {
                                    btnPageSave.enable();
                                    btnSave.enable();
                                } else {
                                    btnSave.disable();
                                    btnPageSave.disable();
                                }
                            },
                            scope: me
                        }
                    },

                    // ラベル設定
                    fieldLabel: '更新日時'
                },{

                    // アイテムID設定
                    itemId: 'created',

                    // xtype設定
                    xtype: 'textfield',

                    // キーイベント有効化
                    enableKeyEvents: true,

                    // リスナー設定
                    listeners: {
                        keyup: {
                            fn: function(field, e) {

                                var btnSave = me.getTopToolbar().getComponent('btnSave');
                                var btnPageSave = me.getTopToolbar().getComponent('btnPageSave');
                                me.baseRecord.set('created', field.getRawValue());

                                if(me.baseRecord.dirty) {
                                    btnPageSave.enable();
                                    btnSave.enable();
                                } else {
                                    btnSave.disable();
                                    btnPageSave.disable();
                                }
                            },
                            scope: me
                        }
                    },

                    // ラベル設定
                    fieldLabel: '作成日時'
                }]

            });

        }

        // スーパークラスメソッドコール
        Ext.trick.parts.UnitPanel.superclass.initComponent.call(me);
    },

    // }}}
    // {{{ initEvents

    initEvents : function() {

        var me = this;

        // スーパークラスメソッドコール
        Ext.trick.parts.UnitPanel.superclass.initEvents.apply(me, arguments);
    },

    // }}}
    // {{{ loadData

    loadData : function(r, store) {

        var me = this;
        me.store = store;

        if(r) {
            me.ownerCt.body.mask();

            OmegaTrick_List.getUnit(r.id, function(ret) {

                // データ設定
                me.forms.caption.setValue(ret.caption);
                me.forms.modified.setValue(ret.modified);
                me.forms.created.setValue(ret.created);

                // データ保存用レコード生成
                me.baseRecord = new store.recordType(ret);

                me.ownerCt.body.unmask();
            }, me);
        } else {

            // データ保存用レコード生成
            me.baseRecord = new store.recordType({
                caption: '',
                modified: '',
                created: ''
            });
        }
    },

    // }}}
    // {{{ onSave

    onSave : function() {

        var me = this;

        me.ownerCt.body.mask();

        OmegaTrick_List.setUnit({
            id: me.baseRecord.get('id'),
            caption: me.baseRecord.get('caption'),
            modified: me.baseRecord.get('modified'),
            created: me.baseRecord.get('created')
        },function(ret) {

            // データ保存用レコード生成
            me.baseRecord = new me.store.recordType(ret.data);

            Ext.trick.app.Entry.setLeaveMessage(false);

            var btnSave = me.getTopToolbar().getComponent('btnSave');
            var btnPageSave = me.getTopToolbar().getComponent('btnPageSave');

            btnSave.disable();
            btnPageSave.disable();

            me.store.reload({
                callback: function() {
                    me.fireEvent('backlist');
                },
                scope: me
            });


            me.ownerCt.body.unmask();
        }, me);
    },

    // }}}
    // {{{ onPageSave

    onPageSave : function() {

        var me = this;

        me.ownerCt.body.mask();

        OmegaTrick_List.setUnit({
            id: me.baseRecord.get('id'),
            caption: me.baseRecord.get('caption'),
            modified: me.baseRecord.get('modified'),
            created: me.baseRecord.get('created')
        },function(ret) {

            // データ保存用レコード生成
            me.baseRecord = new me.store.recordType(ret.data);

            Ext.trick.app.Entry.setLeaveMessage(false);

            var btnSave = me.getTopToolbar().getComponent('btnSave');
            var btnPageSave = me.getTopToolbar().getComponent('btnPageSave');

            btnSave.disable();
            btnPageSave.disable();

            me.ownerCt.body.unmask();
        }, me);

    }

    // }}}


});

// {{{ Register xtype

Ext.reg('trick-unit', Ext.trick.parts.UnitPanel);

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */

