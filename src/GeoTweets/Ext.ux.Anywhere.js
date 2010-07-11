Ext.ns("Ext.ux");

Ext.ux.Anywhere = function() {
	var tw = null;

	return {
		init: function(opt) {
			twttr.anywhere(function(t) {
				tw = t;
				twttr.anywhere.config({ callbackURL: 'http://192.168.77.102/~Examples/html/GeoTweets/index.html' });

				tw.bind('authComplete', function(e, user) {
					if(opt.connectedCallback && Ext.isFunction(opt.connectedCallback)){
						opt.connectedCallback.call(opt.scope || this, opt.args);
					}
				});

				tw.bind('signOut', function() {
					if (opt.unconnectedCallback && Ext.isFunction(opt.unconnectedCallback)) {
						opt.unconnectedCallback.call(opt.scope || this, opt.args);
					}
				});

				if (tw.isConnected()) {
					if (opt.connectedCallback && Ext.isFunction(opt.connectedCallback)) {
						opt.connectedCallback.call(opt.scope || this, opt.args);
					}
				} else {
					if (opt.unconnectedCallback && Ext.isFunction(opt.unconnectedCallback)) {
						opt.unconnectedCallback.call(opt.scope || this, opt.args);
					}
				}
			}, window);
		},
	
		isReady: function() {
			return tw !== null ? true : false;
		},

		getTwitter: function() {
			return tw;
		},

		signIn: function() {
			tw.signIn();
		},

		signOut: function() {
			twttr.anywhere.signOut();
		},

		linkifyUsers: function(selector) {
			if (!selector && Ext.isString(selector)) {
				tw.linkifyUsers(selector);
				return true;
			}
			tw.linkifyUsers();
			return true;
		}
	};
}();
