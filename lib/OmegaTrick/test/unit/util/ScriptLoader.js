/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

// {{{ Namespace

Ext.ns(
    'Ext.trick',
    'Ext.trick.test',
    'Ext.trick.test.unit',
    'Ext.trick.test.unit.util'
);

// }}}
// {{{ Ext.trick.test.unit.util.ScriptLoader

/**
 * Ext.trick.test.unit.util.ScriptLoaderオブジェクト
 *
 */
Ext.trick.test.unit.util.ScriptLoader = new Ext.trick.unit.TestCase({

    // TestCase名
    name: "Ext.trick.test.unit.util.ScriptLoader",

    // {{{ testSingleLoadScript

    /**
     * 単体スクリプト読み込みテスト
     */
    testSingleLoadScript : function() {

        var me = this;
        var loader = new Ext.trick.util.ScriptLoader({
            items: [{
                src: 'http://localhost/~OmegaTrick/OmegaTrick/test/unit/util/LoadTest1.js',
                callback: function() {
                    me.assert.areEqual(Ext.trick.test.unit.util.LoadTest1(), 'LoadTest1 Loaded.');
                }
            }]    
        });

        // スクリプト読み込み
        loader.load();
    },

    // }}}
    // {{{ testMultiLoadScript

    /**
     * 複数スクリプト読み込みテスト
     */
    testMultiLoadScript : function() {

        var me = this;
        var loader = new Ext.trick.util.ScriptLoader({
            items: [{
                src: 'http://localhost/~OmegaTrick/OmegaTrick/test/unit/util/LoadTest1.js',
                callback: function() {
                    me.assert.areEqual(Ext.trick.test.unit.util.LoadTest1(), 'LoadTest1 Loaded.');
                }
            },{
                src: 'http://localhost/~OmegaTrick/OmegaTrick/test/unit/util/LoadTest2.js',
                callback: function() {
                    me.assert.areEqual(Ext.trick.test.unit.util.LoadTest2(), 'LoadTest2 Loaded.');
                }
            },{
                src: 'http://localhost/~OmegaTrick/OmegaTrick/test/unit/util/LoadTest3.js',
                callback: function() {
                    me.assert.areEqual(Ext.trick.test.unit.util.LoadTest3(), 'LoadTest3 Loaded.');
                }
            }]    
        });

        // スクリプト読み込み
        loader.load();
                          
    },

    // }}}
    // {{{ testScope

    /**
     * スコープ設定テスト
     */
    testScope : function() {
                
        var me = this,
            o = {
                test: 'scope object OK!'
            };
        var loader = new Ext.trick.util.ScriptLoader({
            items: [{
                src: 'http://localhost/~OmegaTrick/OmegaTrick/test/unit/util/LoadTest1.js',
                callback: function() {
                    me.assert.areEqual(Ext.trick.test.unit.util.LoadTest1(), 'LoadTest1 Loaded.');
                    me.assert.areEqual(this.test, 'scope object OK!');
                },
                scope: o
            }]    
        });

        // スクリプト読み込み
        loader.load();
 
    }

    // }}}

});

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */

