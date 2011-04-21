Ext.regApplication({
    
    // アプリケーション名
    name: 'App',
    
    // アイコン
    icon: '',
    
    // アイコンの光沢効果
    glossOnIcon: true,
    
    // モバイル用スタートアップ画像
    phoneStartupScreen: '',
    
    // タブレット用スタートアップ画像
    tabletStartupScreen: '',
    
    launch: function() {
        new Ext.Panel({
            layout: 'card',
            fullscreen: true,
            items: [{
                xtype: 'ux-coverflow',
                imageItems: [{
                    url: 'screen1.jpg'
                },{
                    url: 'screen2.jpg'
                },{
                    url: 'screen3.jpg'
                }]
            }]
        });
    }
});
