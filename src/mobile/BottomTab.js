Ext.setup({
	// apple-mobile-web-app-capableの設定
	fullscreen: true,

	// ホーム画面に登録された場合のアイコン設定
	icon: 'icon.png',

	// iPadからアクセスした場合のスプラッシュ画像
	tabletStartupScreen: 'tablet_startup.png',

	// iPhoneからアクセスした場合のスプラッシュ画像
	phoneStartupScreen: 'phone_startup.png',

	// アイコンの光沢効果を無効
	glossOnIcon: false,

	// ステータスバーを半透明表示
	statusBarStyle: 'black-translucent',

	// onReady
	onReady: function() {
		new Ext.TabPanel({
			fullscreen: true,
			tabBar: {
				dock: 'bottom',
				layout: {
					pack: 'center'
				}
			},
			ui: 'light',
			animation: 'slide',
			defaults: {
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