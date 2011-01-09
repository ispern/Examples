Ext.setup({

	// onReady
	onReady: function() {

		// ボタンのハンドラ定義
		var handler = function(button, event) {
			Ext.fly('content').update(button.text + ' をタップしたよ');
		};

		// 上部ツールバーグループ
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

		// 下部ツールバーグループ
		var bottomBarGroup = [{
			text: 'button1',
			handler: handler
		},{
			text: 'button2',
			handler: handler
		}];

		// Panel生成
		new Ext.Panel({
			fullscreen: true,

			// dockedItemsにツールバーを追加
			dockedItems: [{
				xtype: 'toolbar',
				ui: 'dark',
				dock: 'top',
				layout: {
					pack: 'center'
				},
				items: topBarGroup
			},{
				xtype: 'toolbar',
				ui: 'metal',
				dock: 'bottom',
				layout: {
					pack: 'end'
				},
				items: bottomBarGroup
			}],
			html: '<div id="content">ボタンをタップしてね</div>'
		});
	}
});
