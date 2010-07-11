Ext.setup({

	fullscreen: true,

	icon: 'icon.png',

	tabletStartupScreen: 'tablet_startup.png',

	phoneStartupScreen: 'phone_startup.png',

	glossOnIcon: false,

	onReady: function() {
		new Ext.Twitter.MainPanel();
	}
});

