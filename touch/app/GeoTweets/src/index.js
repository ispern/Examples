Ext.setup({

	fullscreen: true,

	tabletIcon: '../../../images/icon_tablet.png',

	phoneIcon: '../../../images/icon_phone.png',

	tabletStartupScreen: '../../../images/tablet_startup.png',

	phoneStartupScreen: '../../../images/phone_startup.png',

	glossOnIcon: false,

	onReady: function() {
		new Ext.Twitter.MainPanel();
	}
});

