Ext.setup({

	fullscreen: true,

	icon: 'icon.png',

	tabletStartupScreen: 'tablet_startup.png',

	phoneStartupScreen: 'phone_startup.png',

	glossOnIcon: false,

	onReady: function() {
		var timeline = new Ext.Component({
			title: 'Timeline',
			cls: 'timeline',
			scroll: 'vertical',
			tpl: [
				'<tpl for=".">',
					'<div class="tweet">',
						'<div class="abater">',
							'<img src="{profile_image_url}">',
						'</div>',
						'<div class="tweet-content">',
							'<h2>{from_user}</h2>',
							'<p>{text}</p>',
						'</div>',
					'</div>',
				'</tpl>'
			]
		});

		var map = new Ext.Map({
			title: 'Map',
			getLocation: true,
			mapOptions: {
				zoom: 12
			}
		});

		var panel = new Ext.TabPanel({
			fullscreen: true,
			animation: 'slide',
			items: [map, timeline]
		});

		var refresh = function() {
			var coords = map.geo.coords;

			Ext.util.JSONP.request({
				url: 'http://search.twitter.com/search.json',
				callbackKey: 'callback',
				params: {
					geocode: coords.latitude + ',' + coords.longitude + ',' + '25km',
					rpp: 200
				},
				callback: function(data) {
					data = data.results;
					timeline.update(data);

					for (var i=0, ln=data.length; i<ln; i++) {
						var tweet = data[i];
						if (tweet.geo && tweet.geo.coordinates) {
							var position = new google.maps.LatLng(tweet.geo.coordinates[0], tweet.geo.coordinates[1]);
							console.log(position);
							addMarker(tweet, position);
						}
					}
				}
			});
		};

		var addMarker = function(tweet, position) {
			var marker = new google.maps.Marker({
				map: map.map,
				position: position
			});

			var tpl = new Ext.XTemplate(
					'<div>',
						'<img src="{profile_image_url}">',
					'</div>',
					'<div>',
						'<h2>{from_user}</h2>',
						'<p>{text}</p>',
					'</div>'
			);

			var infoWin = new google.maps.InfoWindow({
				content: tpl.apply({
					profile_image_url: tweet.profile_image_url,
					from_user: tweet.from_user,
					text: tweet.text
				})
			});
			google.maps.event.addListener(marker, 'click', function() {
				infoWin.open(map.map, marker);
			});
		};
		map.geo.on('update', refresh);

		var tabBar = panel.getTabBar();
		tabBar.addDocked({
			xtype: 'button',
			ui: 'mask',
			iconCls: 'refresh',
			dock: 'right',
			stretch: false,
			align: 'center',
			handler: refresh
		});
	}
});

