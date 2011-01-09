Ext.setup({
    
    // アイコン
    icon: '',
    
    // アイコンの光沢効果
    glossOnIcon: true,
    
    // モバイル用スタートアップ画像
    phoneStartupScreen: '',
    
    // タブレット用スタートアップ画像
    tabletStartupScreen: '',
    
    onReady: function() {
        new Ext.Panel({
            fullscreen: true,
            items: [{
                xtype: 'app-dataview'
            }]
        });
    }
});

Ext.ns('App');
Ext.regModel('Items', {
    fields: ['item']
});
App.DataView = Ext.extend(Ext.DataView, {

    itemSelector: 'div.item',

    tpl: new Ext.XTemplate(
        '<tpl for=".">',
            '<div class="item" style="border: 1px solid black; height: 40px;">',
                '{item}',
            '</div>',
        '</tpl>'),

    initComponent: function() {
        var me = this;

        // 設定適用
        Ext.apply(me, {
            store: new Ext.data.ArrayStore({
                model: 'Items',
                expandData: true
            })
        });

        // スーパークラスメソッドコール
        App.DataView.superclass.initComponent.call(me);
    },

    initEvents: function() {
        var me = this;
        
        // スーパークラスメソッドコール
        App.DataView.superclass.initEvents.call(me);

        this.store.loadData(['11', '12', '13', '14', '15']);
        
    }
});

Ext.reg('app-dataview', App.DataView);
