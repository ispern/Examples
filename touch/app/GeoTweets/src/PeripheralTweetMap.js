Ext.ns('Ext.Twitter');

Ext.Twitter.PeripheralTweetMap = Ext.extend(Ext.Map, {

	initComponent: function() {
		var me = this;
		// 設定適用
		Ext.apply(me, {
			title: 'Map',
			mapOptions: {
				zoom: 12
			},
			autoRender: false
		});

		// スーパークラスメソッドコール
		Ext.Twitter.PeripheralTweetMap.superclass.initComponent.call(me);
	},

	refresh: function() {
		var me = this,
			coords = me.map.geo.coords;

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
						alert(position);

					}
				}
			}
		});
	},

	addMarker: function(tweet, position) {
		var me = this;

		var marker = new google.maps.Marker({
			map: me.map,
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
	}
});

Ext.reg('peripheraltweetmap', Ext.Twitter.PeripheralTweetMap);
