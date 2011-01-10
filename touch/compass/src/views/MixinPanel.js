App.MixinPanel = Ext.extend(Ext.Carousel, {
    
    initComponent: function() {
        var me = this;
        
        // 設定適用
        Ext.apply(me, {

            layout: 'card',

            activeItem: 0,

            defaults: {
                layout: {
                    type: 'vbox',
                    align: 'stretch'
                },
                defaults: {
                    flex: 1
                }
            },

            items: [{
                dockedItems: [{
                    dock: 'top',
                    title: 'My Toolbar',
                    xtype: 'toolbar',
                    cls: 'card1-toolbar',
                    items: [{
                        text: 'back',
                        ui: 'back'
                    },{
                        text: 'forward',
                        ui: 'forward'
                    }]
                }],
                layout: 'fit',
                html: 'bevel',
                cls: 'card1'
            },{
                items: [{
                    html: '影なし',
                    cls: 'card2'
                },{
                    html: '白の影あり',
                    cls: 'card2-light'
                }]
            },{
                items: [{
                    html: '影なし',
                    cls: 'card3'
                },{
                    html: '黒の影あり',
                    cls: 'card3-shadow'
                }]
            },{
                items: [{
                    html: '背景色の明度が50以下',
                    cls: 'card4-light'
                },{
                    html: '背景色の明度が50以上',
                    cls: 'card4-dark'
                }]
            },{
                items: [{
                    html: '背景色の明度が50以下',
                    cls: 'card5-light'
                },{
                    html: '背景色の明度が50以上',
                    cls: 'card5-shadow'
                }]
            }]
        });
        
        // スーパークラスメソッドコール
        App.MixinPanel.superclass.initComponent.call(me);
    }
});

Ext.reg('mixinpanel', App.MixinPanel);
