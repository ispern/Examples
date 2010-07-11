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
		var handler = function(button, event) {
			Ext.fly('content').update(button.text + ' をタップしたよ');
		};
		var topBarGroup = [{
			text: 'default',
			handler: handler
		},{
			text: 'round',
			ui: 'round',
			handler: handler
		},{
			text: 'back',
			ui: 'back',
			handler: handler
		}];

		var bottomBarGroup = [{
			text: 'button1',
			handler: handler
		},{
			text: 'button2',
			handler: handler
		}];

		new Ext.Panel({
			fullscreen: true,
			dockedItems: [{
				xtype: 'toolbar',
				ui: 'dark',
				dock: 'top',
				items: topBarGroup
			},{
				xtype: 'toolbar',
				ui: 'metal',
				dock: 'bottom',
				items: bottomBarGroup
			}],
			html: '<div id="content">ボタンをタップしてね</div>'
		});
	}
});
