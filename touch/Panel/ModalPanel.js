Ext.setup({

	// onReady
	onReady: function() {

		// Panel生成
		var modal = new Ext.Panel({

			// fullscreen表示しない
			fullscreen: false,

			// Panelに表示するHTML
			html: 'ModalなWindow',

			// マスクする
			modal: true,

			// Panelをフローティング表示
			floating: true,

			// 幅
			width: 300,

			// 高さ
			height: 200,

			// Panelをセンター表示
			centered: true
		});

		// Panelを表示
		modal.show();
	}
});
