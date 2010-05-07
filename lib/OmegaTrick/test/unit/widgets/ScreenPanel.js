/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

// {{{ Namespace

Ext.ns(
    'Ext.trick',
    'Ext.trick.test',
    'Ext.trick.test.unit',
    'Ext.trick.test.unit.widgets'
);

// }}}
// {{{ Ext.trick.test.unit.widgets.ScreenPanel

/**
 * Ext.trick.test.unit.widgets.ScreenPanelオブジェクト
 *
 */
Ext.trick.test.unit.widgets.ScreenPanel = new Ext.trick.unit.TestCase({

    // TestCase名
    name: "Ext.trick.test.unit.widgets.ScreenPanel",
 
    // {{{ setUp

    /**
     * セットアップメソッド
     *
     * @return void
     */
    setUp : function () {

        this.panel = new Ext.trick.ScreenPanel({
            id: 'testScreenPanel',
            title: 'testCreate',
            layout: 'screen',
            activeItem: 0,
            items: [{
                id: 'testScreenPanelA',
                title: 'ScreenA' 
            },{
                id: 'testScreenPanelB',
                title: 'ScreenB' 
            }],
            renderTo: Ext.getBody()     
        });
    },
 
    // }}}
    // {{{ tearDown

    /**
     * ティアーダウンメソッド
     *
     * @return void
     */
    tearDown : function () {
        this.panel.destroy();
    },
 
    // }}}
    // {{{ testCreate

    /**
     * パネル生成テスト
     */
    testCreate : function() {
    
        var me = this;

        // スクリーンパネル存在確認
        me.assert.isNotNull(Ext.getDom('testScreenPanel'));

        // スクリーン子パネル存在確認
        me.assert.isNotNull(Ext.getDom('testScreenPanelA'));

        // スクリーン子パネル非存在確認
        me.assert.isNull(Ext.getDom('testScreenPanelB'));

    },

    // }}}
    // {{{ testSwitch

    /**
     * スクリーン切り替えテスト
     */
    testSwitch : function() {
    
        var me = this;

        // スクリーン子パネル存在確認
        me.assert.isNotNull(Ext.getDom('testScreenPanelA'));

        // スクリーン子パネル非存在確認
        me.assert.isNull(Ext.getDom('testScreenPanelB'));

        // 数値によるスクリーン切り替え
        me.panel.layout.setActiveItem(1);

        // スクリーン子パネル非存在確認
        me.assert.isNull(Ext.getDom('testScreenPanelA'));

        // スクリーン子パネル存在確認
        me.assert.isNotNull(Ext.getDom('testScreenPanelB'));

        // IDによるスクリーン切り替え
        me.panel.layout.setActiveItem('testScreenPanelA');

        // スクリーン子パネル存在確認
        me.assert.isNotNull(Ext.getDom('testScreenPanelA'));

        // スクリーン子パネル非存在確認
        me.assert.isNull(Ext.getDom('testScreenPanelB'));

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

