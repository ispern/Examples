/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */
/*jslint evil: true */

/// {{{ Namespace

Ext.ns(
    'Ext.trick',
    'Ext.trick.app'
);

// }}}
// {{{ Ext.trick.app.Entry

/**
 * Ext.trick.app.Entry Class
 *
 * @author  Kazuhiro Kotsutsumi <kotsutsumi@xenophy.com>
 * @version 1.0
 */
Ext.trick.app.Entry = function() {

    var me = this,
        leaveCheck = false,
        apps = {};

    return {

        // {{{ add

        /**
         * アプリケーション追加メソッド
         *
         * @param app Ext.trick.app.Appオブジェクト
         * @return アプリケーションID
         */
        add : function(app) {

            var id = Ext.id(null, 'OmegaTrickApp');

            apps[id] = new app();

            // アプリケーション名が設定されている場合、グローバルスコープに
            // アプリケーションオブジェクトを設定
            if(apps[id].appName) {
                if(!window[apps[id].appName]) {
                    window[apps[id].appName] = {};
                }
                Ext.applyIf(window[apps[id].appName], apps[id]);
            } else {
                window[id] = apps[id];
                apps[id].appName = id;
            }
        },

        // }}}
        // {{{ remove

        /**
         * アプリケーション削除メソッド
         *
         * @param id アプリケーションID
         * @return true:成功, false:アプリケーションが存在しない
         */
        remove : function(id) {

            if(aps[id]) {
                delete apps[id];
            }
        },

        // }}}
        // {{{ removeLoadingMask

        /**
         * ローディングマスク削除メソッド
         *
         * @return void
         */
        removeLoadingMask : function() {

            var mask = Ext.get('OMEGATRICK_LOADINGMASK'),
                logo = Ext.get('OMEGATRICK_LOADING_LOGO'),
                progress = Ext.get('OMEGATRICK_LOADING_PROGRESS');

            if(logo) {
                logo.fadeOut();
            }

            if(progress) {
                progress.fadeOut({
                    callback: function() {
                        progress.remove();
                        if(mask) {
                            mask.fadeOut();
                        }
                    }
                });
            }
        },

        // }}}
        // {{{ showLoadText

        /**
         * ローディングテキスト表示メソッド
         *
         * @param o コンフィグオブジェクト
         * @return void
         */
        showLoadText : function(o) {

            var wrap = Ext.get('OMEGATRICK_LOADING_PROGRESS'),
                config = o || {};

            if(config.anim === false) {
                wrap.show();
            } else {
                wrap.fadeIn(config);
            }
        },

        // }}}
        // {{{ hideLoadText

        /**
         * ローディングテキスト非表示メソッド
         *
         * @param o コンフィグオブジェクト
         * @return void
         */
        hideLoadText : function(o) {

            var wrap = Ext.get('OMEGATRICK_LOADING_PROGRESS'),
                config = o || {};

            if(config.anim === false) {
                wrap.hide();
            } else {
                wrap.fadeOut(config);
            }
        },

        // }}}
        // {{{ updateLoadText

        /**
         * ローディングテキスト更新メソッド
         *
         * @param text 更新テキスト
         * @return void
         */
        updateLoadText : function(text) {

            var wrap = Ext.get('OMEGATRICK_LOADING_PROGRESS'),
                to = Ext.get('OMEGATRICK_LOADING_PROGRESS_MSG'),
                tm = Ext.util.TextMetrics.createInstance(wrap),
                width = tm.getWidth(text)+10;

            wrap.setWidth(width);
            wrap.setStyle({
                marginLeft: '-' + (width/2) + 'px'
            });
            to.update(text);
        },

        // }}}
        // {{{ setLeaveMessage

        setLeaveMessage : function(msg) {
            me.leaveCheck = msg;
        },

        // }}}
        // {{{ boot

        /**
         * エントリー起動メソッド
         *
         * return void
         */
        boot : function() {

            // リーブ制御
            window.onbeforeunload = function() {
                if(me.leaveCheck) {
                    return me.leaveCheck;
                }
            };

            Ext.iterate(apps, function(key, item, items) {
                item.init();
            });
        }

        // }}}

    };

}();

// }}}
// {{{ Omega Trick Application Entry

/**
 * Omega Trick Application Entry
 *
 * @author  Kazuhiro Kotsutsumi <kotsutsumi@xenophy.com>
 * @version 1.0
 */
Ext.onReady(Ext.trick.app.Entry.boot);

// }}}
// {{{ Ext.onTrick

/**
 * Omega Trick Application Entry
 *
 * @param o アプリケーションクラスオブジェクト
 */
Ext.onTrick = function(o) {
   return Ext.trick.app.Entry.add(Ext.extend(Ext.trick.app.App, o));
};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */

