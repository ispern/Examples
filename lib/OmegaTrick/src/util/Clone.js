/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

// {{{ Namespace

Ext.ns('Ext.trick', 'Ext.trick.util');

// }}}
// {{{ Ext.trick.util.Clone

/**
 * Ext.trick.util.Clone
 *
 * オブジェクトクローン生成関数
 *
 * @author  Kazuhiro Kotsutsumi <kotsutsumi@xenophy.com>
 * @version 1.0
 */
Ext.trick.util.Clone = function(o) {

    // オブジェクトでないか、偽判定の場合は、引数をそのまま返却する
    if (!o || 'object' !== typeof o) {
        return o;
    }

    // 引数が配列の場合、空の配列を、それ以外はオブジェクトを生成
    var c = '[object Array]' === Object.prototype.toString.call(o) ? [] : {};
    var p, v;

    // 再帰処理で内部のデータを複製
    for(p in o) {
        if(o.hasOwnProperty(p)) {
            v = o[p];
            if(v && 'object' === typeof v) {
                // Ext.trick.util.Cloneの再帰コール
                c[p] = Ext.trick.util.Clone(v);
            }
            else {
                c[p] = v;
            }
        }
    }

    // 複製したオブジェクトを返却
    return c;
};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */

