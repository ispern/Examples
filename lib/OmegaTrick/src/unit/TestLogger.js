/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

// {{{ Namsespace

Ext.ns(
    'Ext.trick',
    'Ext.trick.unit'
);

// }}}
// {{{ Ext.trick.unit.TestLogger

/**
 * Ext.trick.unit.TestLogger
 *
 * テストロガークラス
 *
 * @author  Kazuhiro Kotsutsumi <kotsutsumi@xenophy.com>
 * @version 1.0
 */
Ext.trick.unit.TestLogger = function(id) {

    var me = this,
        tfn = Ext.trick.Config.getTestingFrameworkName(),
        ret;

    switch(tfn) {
        
        // YUI Test
        case 'yui':

            // テストロガークラス生成
            ret = new YAHOO.tool.TestLogger(id);
            
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

