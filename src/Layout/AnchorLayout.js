Ext.onReady(function() {
	Ext.BLANK_IMAGE_URL = 'http://extjs.cachefly.net/ext-3.2.0/resources/images/default/s.gif';
	Ext.QuickTips.init();

	var win = new Ext.Window({
		layout: 'anchor',
		title: 'AnchorLayout',
		width: 900,
		height: 600,
		autoScroll: true,
		anchorSize: {
			width: 600,
			height: 500
		},
		items: [{
			title: 'Panel1',
			html: 'anchorをパーセンテージで指定<br>anchor: 50% 30%',
			anchor: '50% 30%'
		},{
			title: 'Panel2',
			html: 'anchorをオフセットで指定<br>anchor: -200 -500',
			anchor: '-200 -350'
		},{
			title: 'Panel3',
			anchor: 'r b',
			width: 100,
			height: 100,
			html: 'anchorをSidesで指定<br>anchor: r b'
		}]
	});

	win.show();
});
