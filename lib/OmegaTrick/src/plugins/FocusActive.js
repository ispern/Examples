/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

// {{{ Namespace

Ext.ns(
    'Ext.trick',
    'Ext.trick.plugins'
);

// }}}
// {{{ Ext.trick.plugins.ForceActive

/**
 * Ext.trick.plugins.FocusActive
 *
 * @author  Kazuhiro Kotsutsumi <kotsutsumi@xenophy.com>
 * @version 1.0
 */
Ext.trick.plugins.FocusActive = function() {

    var me = this;
    var overCls = 'x-btn-over';
    var active = false;

    // {{{ init

    /**
     * 初期化メソッド
     *
     * @return void
     */
    me.init = function(btn) {

        // イベントリスナー追加
        btn.on({
            afterrender: {
                fn: function() {
                    me.targetEl = btn.el;
                    btn.btnEl.on('focus', me.onFocus, me);
                    btn.btnEl.on('blur', me.onBlur, me);
                },
                scope: me
            },
            mouseout: {
                fn: function() {
                    if (active) {
                        me.targetEl.addClass(overCls);
                    }
                },
                scope: me
            }
        });
    };

    // }}}
    // {{{ onFocus

    /**
     * フォーカスイベントハンドラ
     */
    me.onFocus =  function(e, t) {
        active = true;
        me.targetEl.addClass(overCls);
    };

    // }}}
    // {{{ onBlur

    /**
     * ブラーイベントハンドラ
     */
    me.onBlur =  function(e, t) {
        me.targetEl.removeClass(overCls);
        active = false;
    };

    // }}}

};

// }}}
// {{{ Register ptype

Ext.preg('focusactive', Ext.trick.plugins.FocusActive);

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */

