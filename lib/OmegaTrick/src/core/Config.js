/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */
/*jslint evil: true */

// {{{ Namespace

Ext.ns(
    'Ext.trick'
);

// }}}
// {{{ Ext.trick.Config

/**
 * Ext.trick.Config
 *
 * Omega Trick設定クラス
 *
 * シングルトンクラスなので、Ext.trick.Configを直接利用してください。
 *
 * @author  Kazuhiro Kotsutsumi <kotsutsumi@xenophy.com>
 * @version 1.0
 */
Ext.trick.Config = function() {

    /**
     * テスティングフレームワーク名
     *
     * 初期値：yui
     */
    var testingFrameworkName = 'yui';

    /**
     * デフォルト値オブジェクト
     */
    var defaults = {
        useHistory : {
            tokenDelimiter : ':'
        }
    };

    return {

        // {{{ getDefault

        /**
         * デフォルト値取得メソッド
         *
         * @param key 初期値キー
         * @return 初期値
         */
        getDefault : function(key) {

            if(defaults[key]) {
                return defaults[key];
            }

            return undefined;
        },

        // }}}
        // {{{ getTestingFrameworkName

        /**
         * getTestingFrameworkName
         *
         * テスティングフレームワーク名取得
         *
         * yui : YUI Test
         *       ドキュメントルート下のyuiディレクトリ内にYUI Testが設置されて
         *       いること。
         *
         * @return string テスティングフレームワーク名
         */
        getTestingFrameworkName : function() {
            return testingFrameworkName;
        },

        // }}}
        // {{{ setTestingFrameworkName

        /**
         * setTestingFrameworkName
         *
         * テスティングフレームワーク設定
         *
         * yui : YUI Test
         *       ドキュメントルート下のyuiディレクトリ内にYUI Testが設置されて
         *       いること。
         *
         * @return void
         */
        setTestingFrameworkName : function(name) {
            testingFrameworkName = name;
        }

        // }}}

    };

    // }}}

}();

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */

