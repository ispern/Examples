/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

// {{{ Namsespace

Ext.ns(
    'Ext.trick',
    'Ext.trick.unit'
);

// }}}
// {{{ Ext.trick.unit.TestCase

/**
 * Ext.trick.unit.TestCase
 *
 * テストケースクラス
 *
 * @author  Kazuhiro Kotsutsumi <kotsutsumi@xenophy.com>
 * @version 1.0
 */
Ext.trick.unit.TestCase = function(o) {

    var me = this,
        ret;

    switch(Ext.trick.Config.getTestingFrameworkName()) {
        
        // YUI Test
        case 'yui':

            // テストケース生成
            ret = new YAHOO.tool.TestCase(o);
           
            ret.assert = YAHOO.util.Assert;
            break;
    }

    return ret;
};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */

