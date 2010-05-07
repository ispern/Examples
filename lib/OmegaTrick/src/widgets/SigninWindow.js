/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */
/*jslint evil: true */

// {{{ Ext.trick.SigninWindow

/**
 * Ext.trick.SigninWindow Class
 *
 * @author  Kazuhiro Kotsutsumi <kotsutsumi@xenophy.com>
 * @version 1.0
 */
Ext.trick.SigninWindow = Ext.extend(Ext.Component, {

    // {{{ initComponent

    /**
     * コンポーネント初期化メソッド
     *
     * @return void
     */
    initComponent : function() {

        var me = this;

        // 初期設定適用
        Ext.applyIf(me, {

            // ID設定
            id: Ext.id(),

            // ベースCSSクラス設定
            baseCls: 'tx-signin',

            // デュレーション設定
            duration: 0.3,

            // 距離設定
            distance: 75
        });

        // レイヤー生成
        me.layer = new Ext.Layer({

            // ID設定
            id: me.id,

            // CSSクラス設定
            cls: me.baseCls
        });

        // プロパティ設定
        Ext.apply(me, {

            // ID設定
            id: Ext.id(),

            // ボディーラッパーCSSクラス設定
            bwrapCls: me.baseCls + '-bwrap',

            // ボディーCSSクラス設定
            bodyCls: me.baseCls + '-body',

            // インナーCSSクラス設定
            innerCls: me.baseCls + '-inner',

            // アイテムCSSクラス設定
            itemsCls: me.baseCls + '-items',

            // ヘッダーCSSクラス設定
            headerCls: me.baseCls + '-header',

            // コンテンツCSSクラス設定
            contentCls: me.baseCls + '-content',

            // レンダリング先設定
            renderTo: me.layer
        });

        // ウィンドウリサイズイベント追加
        Ext.EventManager.onWindowResize(me.onWindowResize, me);

        // スーパークラスメソッドコール
        Ext.trick.SigninWindow.superclass.initComponent.call(me);
    },

    // }}}
    // {{{ initEvents

    /**
     * イベント初期化メソッド
     *
     * @return void
     */
    initEvents : function(){

    },

    // }}}
    // {{{ onRender

    // private
    onRender : function(ct, position) {

        var me = this,
            dh = Ext.DomHelper;

        // スーパークラスメソッドコール
        Ext.trick.SigninWindow.superclass.onRender.call(me, ct, position);

        var el = me.el;

        // ラッパークラス追加
        el.addClass(me.bwrapCls);

        // テンプレート生成
        var t = new Ext.Template(
            '<div class="{bodyCls}">',
            '   <div class="{innerCls}">',
            '       <div class="clearfix">',
            '           <div id={itemsId} class="{itemsCls} clearfix">',
            '               <div class="{headerCls}">',
            '                   <div class="title"></div>',
            '               </div>',
            '               <div class="clearfix">',
            '                   <div class="{contentCls}">',
            '                       <div class="form">',
            '                           <div class="mail">',
            '                               <div class="label"></div>',
            '                           </div>',
            '                           <div class="textfield space" id="{emailId}"></div>',
            '                           <div class="pass">',
            '                               <div class="label"></div>',
            '                           </div>',
            '                           <div class="textfield space" id="{passId}"></div>',
            '                        </div>',
            '                        <div class="autologin clearfix">',
            '                            <div class="auto" id="{checkboxId}"></div>',
            '                            <div class="btn_siginin" id="{submitId}"></div>',
            '                        </div>',
            '                        <div class="fogetpass clearfix">',
            '                            <a href="#" class="fogetpass">{msgFogetPass}</a>',
            '                        </div>',
            '                    </div>',
            '                </div>',
            '           </div>',
            '       </div>',
            '   </div>',
            '</div>'
        );
        t.append(el, {
            bodyCls: me.bodyCls,
            innerCls: me.innerCls,
            itemsCls: me.itemsCls,
            headerCls: me.headerCls,
            contentCls: me.contentCls,
            itemsId: el.id + '_SIGNIN_ITEMS',
            emailId: el.id + '_FIELD_EMAIL',
            passId: el.id + '_FIELD_PASSWORD',
            checkboxId: el.id + '_FIELD_CHECKBOX',
            submitId: el.id + '_FIELD_SUBMIT',
            msgFogetPass: Ext.trick.SigninWindow.msg.signin.fogetpass
        });

        // アイテムを透明度0に設定
        Ext.fly(el.id + '_SIGNIN_ITEMS').setOpacity(0);

        // メールアドレステキストフィールド生成
        me.email = new Ext.form.TextField({
            width: 280,
            height: 28,
            tabIndex: 1,
            vtype: 'email',
            enableKeyEvents: true,
            validationEvent: false,
            validator : function(v) {
                if (v == '') {
                    return Ext.trick.SigninWindow.msg.signin.validate.email;
                }
                return true;
            },
            listeners: {
                keypress: {
                    fn: function(field, e) {
                        if (e.getKey() === e.ENTER) {
                            me.onSignin();
                        }
                    },
                    scope: me
                }
            },
            renderTo: Ext.get(el.id + '_FIELD_EMAIL')
        });

        // パスワードテキストフィールド生成
        me.password = new Ext.form.TextField({
            width: 280,
            height: 28,
            inputType: 'password',
            tabIndex: 2,
            enableKeyEvents: true,
            listeners: {
                keypress: {
                    fn: function(field, e) {
                        if (e.getKey() === e.ENTER) {
                            me.onSignin();
                        }
                    },
                    scope: me
                }
            },
            renderTo: Ext.get(el.id + '_FIELD_PASSWORD')
        });

        // チェックボックス生成
        me.autosignin = new Ext.form.Checkbox({
            boxLabel : Ext.trick.SigninWindow.msg.signin.autosignin,
            tabIndex: 3,
            renderTo: Ext.get(el.id + '_FIELD_CHECKBOX')
        });

        // サインインボタン生成
        me.submit = new Ext.Button({
            text: Ext.trick.SigninWindow.msg.signin.submit,
            width: 100,
            type: 'submit',
            tabIndex: 4,
            plugins: ['focusactive'],
            handler: me.onSignin,
            scope: me,
            renderTo: el.id + '_FIELD_SUBMIT'
        });

        // レンダリングフラグ設定
        this.rendered = true;

        // イベント初期化
        me.initEvents();
    },

    // }}}
    // {{{ onSignin

    /**
     * サインインイベントハンドラ
     *
     * @return void
     */
    onSignin : function() {

        var me = this;

        me.email.disable();
        me.password.disable();

        me.hide();

    },

    // }}}
    // {{{ getCenterPosition

    /**
     * 画面中央位置取得取得メソッド
     */
    getCenterPosition : function() {

        var me = this,
            vs = Ext.getDoc().getViewSize();

        return {
            x: (vs.width - me.layer.getWidth()) / 2,
            y: (vs.height - me.layer.getHeight()) / 2
        };
    },

    // }}}
    // {{{ show

    /**
     * 表示メソッド
     *
     * @return void
     */
    show : function() {

        var me = this,
            cp = me.getCenterPosition();

        // 初期位置設定
        me.layer.setLeft(cp.x + me.distance);
        me.layer.setTop(cp.y);
        me.layer.setOpacity(0);
        me.layer.show();

        // 表示アニメーション開始
        me.layer.shift({
            x: cp.x,
            easing: 'easeOutStrong',
            opacity: 1,
            duration: me.duration,
            callback: function() {

                Ext.fly(me.el.id + '_SIGNIN_ITEMS').fadeIn({
                    duration: me.duration,
                    callback: function() {

                        me.email.enable();
                        me.password.enable();

                        // メールアドレスにフォーカス設定
                        me.email.focus();

                        // イベント発火
                        me.fireEvent('show', me);
                    }
                });
            }
        });
    },

    // }}}
    // {{{ hide

    /**
     * 非表示メソッド
     */
    hide : function() {

        var me = this,
            cp = me.getCenterPosition();

        // 非表示アニメーション開始
        me.layer.shift({
            x: cp.x - me.distance,
            easing: 'easeOutStrong',
            opacity: 0,
            duration: me.duration,
            callback: function() {
                Ext.fly(me.el.id + '_SIGNIN_ITEMS').setOpacity(0);

                me.fireEvent('hide', {
                    email: me.email.getValue(),
                    pass: me.password.getValue(),
                    autoSignin: me.autosignin.getValue()
                }, me);
            }
        });
    },

    // }}}
    // {{{ onWindowResize

    /**
     * ウィンドウリサイズイベントハンドラ
     */
    onWindowResize : function(w, h) {

        var me = this,
            vs = Ext.getDoc().getViewSize(),
            cwp = (vs.width - me.layer.getWidth()) / 2,
            chp = (vs.height - me.layer.getHeight()) / 2;

        if (me.isVisible) {
            me.layer.setLeft(cwp);
            me.layer.setTop(chp);
        }
    }

    // }}}

});

// }}}
// {{{ Setting Messages

/**
 * メッセージ設定
 */
Ext.trick.SigninWindow.msg = {
    signin: {
        title: 'サインイン',
        progress: 'サインイン中...',
        fogetpass: 'パスワードをお忘れですか ?',
        autosignin: '次回から自動サインイン',
        submit: 'サインイン',
        auth: {
            error: 'メールアドレスまたは、パスワードが違います。'
        },
        validate: {
            email: 'メールアドレスを入力してください。'
        }
    }
};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */

