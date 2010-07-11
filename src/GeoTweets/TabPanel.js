Ext.ns('Ext.Twitter');

Ext.Twitter.MainPanel = Ext.extend(Ext.TabPanel, {

	initComponent: function() {
		var me = this;

		// 設定適用
		Ext.apply(me, {
			fullscreen: true,
			animation: 'slide',
			tabBar: {
				dock: 'bottom',
				ui: 'dark',
				layout: {
					pack: 'center'
				}
			},
			items: [{
				xtype: 'timeline',
				itemId: 'timeline',
				title: 'Home',
				iconCls: 'home'
			}/*,{
				xtype: 'peripheraltweetmap',
				itemId: 'peripheraltweetmap',
				title: 'Map',
				iconCls: 'maps'
			}*/],
			dockedItems: {
				xtype: 'toolbar',
				ui: 'dark',
				dock: 'top',
				layout: {
					pack: 'end'
				},
				items: [{
					id: 'signin',
					itemId: 'signin',
					hidden: true
				}]
			}
		});

		// スーパークラスメソッドコール
		Ext.Twitter.MainPanel.superclass.initComponent.call(me);
	},

	initEvents: function() {
		var me = this;

		// スーパークラスメソッドコール
		Ext.Twitter.MainPanel.superclass.initEvents.call(me);

		// レンダリング後のイベント定義
		me.on('afterrender', me.onAfterRender, me);
	},

	onAfterRender: function() {
		var me = this;

		// ショートハンド設定
		Ext.applyIf(me, {
			map: me.getComponent('peripheraltweetmap'),
			timeline: me.getComponent('timeline')
		});

		var geo = new Ext.util.GeoLocation();

		me.twttInit();
	},

	twttInit: function() {
		var me = this;

		Ext.ux.Anywhere.init({
			connectedCallback: function() {
				var el = me.getEl(),
					signin = me.getDockedItems()[0].getComponent('signin');

				signin.setText('Sign Out');
				signin.show();

				me.loadData();

				signin.setHandler(function() {
					Ext.ux.Anywhere.signOut();
				});
			},
			unconnectedCallback: function() {
				var signin = me.getDockedItems()[0].getComponent('signin');

				signin.setText('Sign In');
				signin.show();

				var store = me.timeline.store;
				store.fireEvent('datachanged');

				signin.setHandler(function() {
					Ext.ux.Anywhere.signIn();
				});

				var overlay = new Ext.Panel({
					floating: true,
					modal: true,
					centered: true,
					width: Ext.platform.isPhone ? 260 : 480,
					height: Ext.platform.isPhone ? 180 : 180,
					styleHtmlContent: true,
					scroll: 'vertical',
					html: '<div class="startup-window' + (Ext.platform.isPhone ? '-phone' : '-tablet') + '">右上の"Sign In"ボタンをクリックして、Twitterアカウントにサインインして下さい。</div>'
				});
				overlay.show();

			}
		});
	},

	loadData: function() {
		var me = this;

		me.timeline.loadData(Ext.ux.Anywhere.getTwitter().User.current().homeTimeline());
	}
});
