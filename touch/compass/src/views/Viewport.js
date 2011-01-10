App.Viewport = Ext.extend(Ext.Panel, {
    
    initComponent: function() {
        var me = this;
        
        // 設定適用
        Ext.apply(me, {
            
            fullscreen: true,

            layout: 'card',

            id: 'viewport',

            dockedItems: [{
                dock: 'left',

                xtype: 'examplelist',

                width: 300
            }]
        });
        
        // スーパークラスメソッドコール
        App.Viewport.superclass.initComponent.call(me);
    }
});
