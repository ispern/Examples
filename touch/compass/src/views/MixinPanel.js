App.MixinPanel = Ext.extend(Ext.Carousel, {
    
    initComponent: function() {
        var me = this;
        
        // 設定適用
        Ext.apply(me, {

            layout: 'card',

            activeItem: 0,

            items: [{
                html: 'bevel',
                cls: 'card1'
            },{
                html: 'matte',
                cls: 'card2'
            },{
                html: 'glossy',
                cls: 'card3'
            },{
                html: 'recessed',
                cls: 'card4'
            }]
        });
        
        // スーパークラスメソッドコール
        App.MixinPanel.superclass.initComponent.call(me);
    }
});

Ext.reg('mixinpanel', App.MixinPanel);
