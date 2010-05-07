/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

// {{{ Namsespace

Ext.ns(
    'Ext.trick',
    'Ext.trick.unit'
);

// }}}
// {{{ Ext.trick.unit.TestRunner

/**
 * Ext.trick.unit.TestRunner
 *
 * テストランナークラス
 *
 * @author  Kazuhiro Kotsutsumi <kotsutsumi@xenophy.com>
 * @version 1.0
 */
Ext.trick.unit.TestRunner = function() {

    var me = this,
        tfn = Ext.trick.Config.getTestingFrameworkName(),
        runner;

    // テストランナーオブジェクト生成
    switch(tfn){
    
        // YIU Test
        case 'yui':
            runner = YAHOO.tool.TestRunner;
            break;
    }
    
    return {
    
        // {{{ add

        /**
         * テストケース/スイート追加メソッド
         * 
         * @param t Ext.trick.unit.TestCase/Ext.trick.unit.TestSuite テストランナーに追加するオブジェクトを設定します。
         * @return void
         */
        add : function (t) {
            
            switch(tfn) {
               
                // YUI Test
                case 'yui':
                    runner.add(t);
                    break;
            }
        },
    
        // }}}
        // {{{ run
        
        /**
         * テスト実行メソッド
         *
         * @return void
         */
        run : function() {
            
            switch(tfn) {

                // YUI Test
                case 'yui':
                    runner.run();      
                    break;
            }
        }

        // }}}
    };

}();

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */

