Ext.ns('Ext.Twitter');

Ext.regModel('Tweet', {
	fields: [
		{name: 'profileImageUrl', mapping: 'user.profileImageUrl'},
		{name: 'text'},
		{name: 'name', mapping: 'user.name'}
	]
});

Ext.Twitter.TimelineView = Ext.extend(Ext.DataView, {

	tpl: [
		'<tpl for=".">',
			'<div class="tweet">',
				'<img src="{user.profileImageUrl}">',
				'<div class="tweet-anchor"></div>',
				'<div class="tweet-content ' + (Ext.is.isPhone ? 'x-phone' : '') + '">',
					'<h2>{user.name}</h2>',
					'<p>{text}</p>',
				'</div>',
			'</div>',
		'</tpl>'
	].join(''),


	initComponent: function() {
		var me = this;

		// 設定適用
		Ext.apply(me, {
			store: new Ext.data.Store({
				model: 'Tweet'
			}),
			emptyText: '<div class="no-tweet">No Tweet.</div>',
			itemSelector: 'div.tweet'
		});

		// スーパークラスメソッドコール
		Ext.Twitter.TimelineView.superclass.initComponent.call(me);
	},

	initEvents: function() {
		var me = this;

		// スーパークラスメソッドコール
		Ext.Twitter.TimelineView.superclass.initEvents.call(me);

		// レンダリング後のイベント定義
		me.on('afterrender', me.onAfterRender, me);
	},

	onAfterRender: function() {
		var me = this;
		console.log(me.rendered);
		me.refresh();
	},

	loadData: function(tl) {
		var me = this;

		if (!tl || !tl.each) {
			return false;
		}

		var store = me.getStore();
		tl.each(function(s) {
			store.loadData([s], true);
		});

		return true;
	}
});

Ext.reg('timeline', Ext.Twitter.TimelineView);
