Ext.setup({

	fullscreen: true,

	// onReady
	onReady: function() {

		var modal = new Ext.Panel({
			fullscreen: false,
			html: 'Modal Window',
			modal: true,
			styleHtmlConent: false,
			floating: true,
			width: 200,
			height: 300
		});

		modal.setCentered(true);
		modal.show();

		console.log(Ext.getOrientation());
	}
});
