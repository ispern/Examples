Ext.setup({
	// apple-mobile-web-app-capableの設定
	fullscreen: true,

	// ホーム画面に登録された場合のアイコン設定
	icon: '../../../icon.png',

	// iPadからアクセスした場合のスプラッシュ画像
	tabletStartupScreen: '../../../tablet_startup.png',

	// iPhoneからアクセスした場合のスプラッシュ画像
	phoneStartupScreen: '../../../phone_startup.png',

	// アイコンを自動処理させない
	glossOnIcon: false,

	// onReady
	onReady: function() {
		new Ext.Panel({

			// Panelをフルスクリーン表示
			fullscreen: true,

			// Panelに表示するHTML
			html: 'Hello Sencha Touch',

			// Dockに表示させるコンポーネント
			dockedItems: [{

				// xtype
				xtype: 'toolbar',

				// uiを'dark'に設定
				ui: 'dark',

				// ツールバーを上部に表示
				dock: 'top',

				// ツールバーに表示させるコンポーネント
				items: [{

					// backボタン
					xtype: 'button',
					text: 'Back',
					ui: 'back'
				},{
					// スペーサー
					xtype: 'spacer'
				},{

					// roundボタン
					xtype: 'button',
					text: 'round',
					ui: 'round'
				}]
			}]
		});
	}
});

