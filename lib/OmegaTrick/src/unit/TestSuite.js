/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

// {{{ Namsespace

Ext.ns(
    'Ext.trick',
    'Ext.trick.unit'
);

// }}}
// {{{ Ext.trick.unit.TestSuite

/**
 * Ext.trick.unit.TestSuite
 *
 * テストスイートクラス
 *
 * @author  Kazuhiro Kotsutsumi <kotsutsumi@xenophy.com>
 * @version 1.0
 */
Ext.trick.unit.TestSuite = function(name) {

    var me = this,
        ret;

    switch(Ext.trick.Config.getTestingFrameworkName()) {
        
        // YUI Test
        case 'yui':

            // テストケース生成
            ret = new YAHOO.tool.TestSuite(name);
           
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

