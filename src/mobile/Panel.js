Ext.setup({
	// apple-mobile-web-app-capableの設定
	fullscreen: true,

	// ホーム画面に登録された場合のアイコン設定
	icon: 'icon.png',

	// iPadからアクセスした場合のスプラッシュ画像
	tabletStartupScreen: 'tablet_startup.png',

	// iPhoneからアクセスした場合のスプラッシュ画像
	phoneStartupScreen: 'phone_startup.png',

	// アイコンを自動処理させない
	glossOnIcon: false,

	// onReady
	onReady: function() {
		new Ext.Panel({
			fullscreen: true,
			html: 'Hello Sencha Touch',
			dockedItems: [{
				xtype: 'toolbar',
				ui: 'dark',
				dock: 'top',
				items: [{
					xtype: 'button',
					text: 'Back',
					ui: 'green'
				}]
			}]
		});
	}
});
