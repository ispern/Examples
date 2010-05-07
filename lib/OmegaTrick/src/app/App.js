/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */
/*jslint evil: true */

// {{{ Namespace

Ext.ns(
    'Ext.trick',
    'Ext.trick.app',
    'Ext.trick.layout',
    'Ext.trick.unit',
    'Ext.trick.util'
);

// }}}
// {{{ Ext.trick.app.App

/**
 * Ext.trick.app.App Class
 *
 * @author  Kazuhiro Kotsutsumi <kotsutsumi@xenophy.com>
 * @version 1.0
 */
Ext.trick.app.App = Ext.extend(Ext.util.Observable, {

    // {{{ appName

    /**
     * アプリケーション名設定
     */
    appName: null,

    // }}}
    // {{{ autoRender

    /**
     * 自動レンダリング設定
     */
    autoRender: true,

    // }}}
    // {{{ screenXTypePrefix

    /**
     * スクリーンXType接頭辞
     */
    screenXTypePrefix: '',

    // }}}
    // {{{ useHistory

    /**
     * Ext.History機能設定
     */
    useHistory: {
        tokenDelimiter : ':'
    },

    // }}}
    // {{{ widgets

    /**
     * ウィジットオブジェクト
     */
    widgets: {},

    // }}}
    // {{{ screens

    /**
     * スクリーン配列
     */
    screens: [],

    // }}}
    // {{{ casing

    /**
     * ケーシングオブジェクト
     */
    casing: {},

    // }}}
    // {{{ initEvents

    /**
     * イベント初期化メソッド
     *
     * @return void
     */
    initEvents : function() {

        var me = this,
            cp = me.cp,
            akey = cp.get('autosigninkey');

        // イベント定義
        me.addEvents(
            'beforeinit',
            'init',
            'beforestart',
            'start',
            'beforeloadscript',
            'loadscript'
        );

        // スクリプトタグ削除
        me.on('init', me.removeScriptTags, me);

        // 認証処理
        if(me.auth) {

            // 認証処理
            if(akey) {
                me.on('init', me.doAutoSignin);
            } else {
                me.on('init', me.doAuth);
            }

        } else {

            // ローディングマスク削除
            me.on('init', Ext.trick.app.Entry.removeLoadingMask);

            // 自動レンダリング
            if(me.autoRender) {
                me.on('init', me.render, me);
            } else {
                me.on('init', me.start, me);
            }
        }
    },

    // }}}
    // {{{ signout

    /**
     * サインアウトメソッド
     */
    signout : function(o) {

        var me = this,
            config = o || {},
            arg = [],
            auth = eval(me.auth.directFn);

        if(config.callback) {
            arg.push(config.callback);
            if(config.scope) {
                arg.push(config.scope);
            }
        }

        auth.signout.apply(me, arg);
    },

    // }}}
    // {{{ doAutoSignin

    /**
     * 自動サインインメソッド
     */
    doAutoSignin : function() {

        var me = this,
            cp = me.cp,
            akey = cp.get('autosigninkey');
            auth = eval(me.auth.directFn);

            // 自動サインイン処理
            auth.autoSignin(akey, function(ret){

                if (ret.success) {

                    // 自動サインインキー更新
                    cp.set('autosigninkey', ret.auto_signin_key);

                } else {

                }

                // 認証処理
                me.doAuth();
            }, me);
    },

    // }}}
    // {{{ doAuth

    /**
     * 認証処理メソッド
     */
    doAuth : function() {

        var me = this,
            cp = me.cp,
            akey = cp.get('autosigninkey');
            auth = eval(me.auth.directFn);

        Ext.trick.app.Entry.updateLoadText('認証確認中...');

        auth.isSignin(function(ret) {
            if(!ret) {

                // ローディングテキスト非表示
                Ext.trick.app.Entry.hideLoadText({
                    anim: true,
                    callback: function() {

                        // サインインウィンドウ表示
                        me.widgets.signin = new Ext.trick.SigninWindow();

                        me.widgets.signin.on('hide', function(ret) {

                            var autoSignin = ret.autoSignin;

                            Ext.trick.app.Entry.updateLoadText('認証確認中...');
                            Ext.trick.app.Entry.showLoadText({
                                anim: true,
                                callback: function() {
                                    auth.execute(ret, function(ret) {

                                        Ext.trick.app.Entry.hideLoadText({
                                            anim: true,
                                            callback: function() {
                                                if(ret.success) {

                                                    if(autoSignin) {

                                                        // 自動サインインキー更新
                                                        cp.set('autosigninkey', ret.auto_signin_key);
                                                    }

                                                    // ローディングマスク削除
                                                    Ext.trick.app.Entry.removeLoadingMask();

                                                    // 自動レンダリング
                                                    if(me.autoRender) {
                                                        me.render();
                                                    } else {
                                                        me.start();
                                                    }

                                                } else {

                                                    // ローディングテキスト非表示
                                                    Ext.trick.app.Entry.hideLoadText();

                                                    Ext.MessageBox.show({
                                                        title: Ext.trick.SigninWindow.msg.signin.title,
                                                        msg: Ext.trick.SigninWindow.msg.signin.auth.error,
                                                        buttons: Ext.MessageBox.OK,
                                                        modal: false,
                                                        fn: function() {
                                                            me.widgets.signin.show();
                                                        },
                                                        icon: Ext.MessageBox.ERROR
                                                    });
                                                }
                                            },
                                            scope: me
                                        });
                                   }, me);
                                },
                                scope: me
                            });

                        }, me);

                        me.widgets.signin.show();
                    },
                    scope: me
                });

            } else {

                // ローディングマスク削除
                Ext.trick.app.Entry.removeLoadingMask();

                // 自動レンダリング
                if(me.autoRender) {
                    me.render();
                } else {
                    me.start();
                }
            }
        });
    },

    // }}}
    // {{{ removeScriptTags

    /**
     * スクリプトタグ削除メソッド
     */
    removeScriptTags : function() {

        var me = this;

        // スクリプトタグ削除
        Ext.select('body script').each(function(el) {
            Ext.removeNode(Ext.getDom(el));
        }, me);

    },

    // }}}
    // {{{ screenTo

    /**
     * スクリーン切り替えメソッド
     */
    screenTo : function(to) {

        var me = this,
            sp = Ext.getCmp(me.appName + '_SCREEN'),
            t;

        if(Ext.isNumber(to)) {
            Ext.iterate(sp.initialConfig.items, function(item, cnt, items) {
                if(to === cnt) {
                    t = item;
                }
            });
        }
        if(Ext.isString(to)) {
            Ext.iterate(sp.initialConfig.items, function(item, cnt, items) {
                if(to === item.id) {
                    t = item;
                }
            });
        }

        // ヒストリー設定
        if(me.useHistory) {
            console.log(t);
            Ext.History.add(t.name || t.id);
        } else {
            sp.layout.setActiveItem(to);
        }
    },

    // }}}
    // {{{ directlink

    /**
     * ダイレクトリンク処理メソッド
     */
    directlink : function() {

        var me = this,
            anchor = location.hash;

        if(Ext.isString(anchor) && anchor.startsWith('#')) {
            anchor = anchor.substr(1);
            var tokens = anchor.split(me.useHistory.tokenDelimiter),
                sp = Ext.getCmp(me.appName + '_SCREEN');

            sp.layout.setActiveItem(tokens[0]);
        }

    },

    // }}}
    // {{{ init

    /**
     * 初期化メソッド
     */
    init : function() {

        var me = this;

        // クイックチップス初期化
        Ext.QuickTips.init();

        if(me.useHistory) {

            // 初期値設定
            if(!Ext.isObject(me.useHistory)) {
                me.useHistory = Ext.trick.Config.getDefault('useHistory');
            }

            // Ext.History用タグ生成
            Ext.DomHelper.append(Ext.getBody(), {
                tag: 'form',
                id: 'history-form',
                cls: 'x-hidden',
                cn: [{
                    tag: 'input',
                    type: 'hidden',
                    id: 'x-history-field'
                },{
                    tag: 'iframe',
                    id: 'x-history-frame'
                }]
            });

            // Ext.History初期化
            Ext.History.init();

            // changeイベント設定
            Ext.History.on('change', function(token){

                var sp = Ext.getCmp(me.appName + '_SCREEN');

                if(Ext.isString(token)) {
                    sp.layout.setActiveItem(token);
                }
            });

        }

        // Cookie Provider生成
        me.cp = new Ext.state.CookieProvider({
            expires: new Date(new Date().getTime()+(1000*60*60*24*7))
        });

        // イベント初期化
        me.initEvents();

        if(!me.fireEvent('beforeinit')) {
            return false;
        }

        // ExtDirectプロバイダ追加
        if(me.useDirect) {
            Ext.Direct.addProvider(me.useDirect);
        }

        me.fireEvent('init');
    },

    // }}}
    // {{{ render

    /**
     * レンダリングメソッド
     */
    render : function() {

        var me = this,
            renderItems;

        // スクリーンアイテム配列生成
        var screens = [];
        Ext.iterate(me.screens, function(item, cnt, items) {

            var o = {
                name: item.name,
                xtype: me.screenXTypePrefix + item.name.toLowerCase()
            };

            if(item.items) {
                o.scriptItems = item.items;
            }

            if(item.fix) {
                o.fix = true;
            }
            if(item.id) {
                o.id = item.id;
            }
            screens.push(o);

        }, me);

        // レンダリングアイテム設定
        renderItems = [{
            id: me.appName + '_SCREEN',
            xtype: 'screen',
            items: screens,
            region: 'center'
        }];

        // ケーシング設定
        if(Ext.isObject(me.casing) && me.casing.north) {
            var north = me.casing.north;
            north.region = 'north';
            renderItems.push(north);
        }
        if(Ext.isObject(me.casing) && me.casing.west) {
            var west = me.casing.west;
            west.region = 'west';
            renderItems.push(west);
        }
        if(Ext.isObject(me.casing) && me.casing.east) {
            var east = me.casing.east;
            east.region = 'east';
            renderItems.push(east);
        }
        if(Ext.isObject(me.casing) && me.casing.south) {
            var south = me.casing.south;
            south.region = 'south';
            renderItems.push(south);
        }

        // ビューポート生成
        me.viewport = new Ext.Viewport({
            layout: 'fit',
            items: [{
                border: false,
                layout: 'border',
                items: renderItems
            }],
            listeners: {
                afterrender: {
                    fn: function() {

                        // ダイレクトリンク
                        me.directlink();

                        // 開始メソッドコール
                        me.start.call(me);
                    }
                }
            }
        });
    },

    // }}}
    // {{{ start

    /**
     * 開始メソッド
     */
    start : Ext.emptyFn

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

