Ext.setup({

	fullscreen: true,

	tabletIcon: 'icon_tablet.png',

	phoneIcon: 'icon_phone.png',

	tabletStartupScreen: 'tablet_startup.png',

	phoneStartupScreen: 'phone_startup.png',

	glossOnIcon: false,

	onReady: function() {
		new Ext.Twitter.MainPanel();
	}
});

