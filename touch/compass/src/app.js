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
        this.viewport = new App.Viewport();

        Ext.defer(function() {
            Ext.dispatch({
                controller: 'show',
                action: 'first',
                historyUrl: 'show/first'
            });
        }, 500);
    }
});
