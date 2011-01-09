Ext.setup({

    // onReady
    onReady: function() {
        new Ext.TabPanel({
            fullscreen: true,

            // TabBarの設定
            tabBar: {

                // タブを下部に配置
                dock: 'bottom',

                // スタイル設定
                ui: 'dark',

                layout: {

                    // タブを中央寄せ
                    pack: 'center'
                }
            },


            // Tab切り替えのアニメーション
            animation: 'slide',

            // 各Panelのデフォルト値設定
            defaults: {

                // スクロールは縦スクロール
                scroll: 'vertical'
            },
            items: [{
                title: 'About',
                html: '<h1>About Page</h1>',
                iconCls: 'info',
                cls: 'card1'
            },{
                title: 'User',
                iconCls: 'user',
                html: '<h1>User Page</h1>',
                cls: 'card2'
            }]
        });
    }
});

