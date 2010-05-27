Ext.onReady(function() {
	Ext.BLANK_IMAGE_URL = 'http://extjs.cachefly.net/ext-3.2.0/resources/images/default/s.gif';
		Ext.QuickTips.init();

	var items = [];
	for (var i=0; i<50; i++) {
		items[i] = {
			xtype: 'fieldset',
			title: 'fieldset ' + i,
			items: [{
				layout: 'column',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample1'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample2'
					}]
				},{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample3'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample4'
					}]
				}]
			}]
		};
	}

	var start = new Date().getTime();

	var form = new Ext.Panel({
		renderTo: Ext.getBody(),
		title: 'FormPanel - Examples -',
		layout: 'form',
		width: 800,
		height: 600,
		padding: '20',
		autoScroll: true,
		items: [{
			xtype: 'fieldset',
			title: 'fieldset ' + i,
			items: [{
				layout: 'column',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample1'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample2'
					}]
				},{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample3'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample4'
					}]
				}]
			}]
		},{
			xtype: 'fieldset',
			title: 'fieldset ' + i,
			items: [{
				layout: 'column',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample1'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample2'
					}]
				},{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample3'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample4'
					}]
				}]
			}]
		},{
			xtype: 'fieldset',
			title: 'fieldset ' + i,
			items: [{
				layout: 'column',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample1'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample2'
					}]
				},{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample3'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample4'
					}]
				}]
			}]
		},{
			xtype: 'fieldset',
			title: 'fieldset ' + i,
			items: [{
				layout: 'column',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample1'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample2'
					}]
				},{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample3'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample4'
					}]
				}]
			}]
		},{
			xtype: 'fieldset',
			title: 'fieldset ' + i,
			items: [{
				layout: 'column',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample1'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample2'
					}]
				},{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample3'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample4'
					}]
				}]
			}]
		},{
			xtype: 'fieldset',
			title: 'fieldset ' + i,
			items: [{
				layout: 'column',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample1'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample2'
					}]
				},{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample3'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample4'
					}]
				}]
			}]
		},{
			xtype: 'fieldset',
			title: 'fieldset ' + i,
			items: [{
				layout: 'column',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample1'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample2'
					}]
				},{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample3'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample4'
					}]
				}]
			}]
		},{
			xtype: 'fieldset',
			title: 'fieldset ' + i,
			items: [{
				layout: 'column',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample1'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample2'
					}]
				},{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample3'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample4'
					}]
				}]
			}]
		},{
			xtype: 'fieldset',
			title: 'fieldset ' + i,
			items: [{
				layout: 'column',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample1'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample2'
					}]
				},{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample3'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample4'
					}]
				}]
			}]
		},{
			xtype: 'fieldset',
			title: 'fieldset ' + i,
			items: [{
				layout: 'column',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample1'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample2'
					}]
				},{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample3'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample4'
					}]
				}]
			}]
		},{
			xtype: 'fieldset',
			title: 'fieldset ' + i,
			items: [{
				layout: 'column',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample1'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample2'
					}]
				},{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample3'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample4'
					}]
				}]
			}]
		},{
			xtype: 'fieldset',
			title: 'fieldset ' + i,
			items: [{
				layout: 'column',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample1'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample2'
					}]
				},{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample3'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample4'
					}]
				}]
			}]
		},{
			xtype: 'fieldset',
			title: 'fieldset ' + i,
			items: [{
				layout: 'column',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample1'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample2'
					}]
				},{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample3'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample4'
					}]
				}]
			}]
		},{
			xtype: 'fieldset',
			title: 'fieldset ' + i,
			items: [{
				layout: 'column',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample1'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample2'
					}]
				},{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample3'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample4'
					}]
				}]
			}]
		},{
			xtype: 'fieldset',
			title: 'fieldset ' + i,
			items: [{
				layout: 'column',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample1'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample2'
					}]
				},{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample3'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample4'
					}]
				}]
			}]
		},{
			xtype: 'fieldset',
			title: 'fieldset ' + i,
			items: [{
				layout: 'column',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample1'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample2'
					}]
				},{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample3'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample4'
					}]
				}]
			}]
		},{
			xtype: 'fieldset',
			title: 'fieldset ' + i,
			items: [{
				layout: 'column',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample1'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample2'
					}]
				},{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample3'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample4'
					}]
				}]
			}]
		},{
			xtype: 'fieldset',
			title: 'fieldset ' + i,
			items: [{
				layout: 'column',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample1'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample2'
					}]
				},{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample3'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample4'
					}]
				}]
			}]
		},{
			xtype: 'fieldset',
			title: 'fieldset ' + i,
			items: [{
				layout: 'column',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample1'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample2'
					}]
				},{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample3'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample4'
					}]
				}]
			}]
		},{
			xtype: 'fieldset',
			title: 'fieldset ' + i,
			items: [{
				layout: 'column',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample1'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample2'
					}]
				},{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample3'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample4'
					}]
				}]
			}]
		},{
			xtype: 'fieldset',
			title: 'fieldset ' + i,
			items: [{
				layout: 'column',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample1'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample2'
					}]
				},{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample3'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample4'
					}]
				}]
			}]
		},{
			xtype: 'fieldset',
			title: 'fieldset ' + i,
			items: [{
				layout: 'column',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample1'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample2'
					}]
				},{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample3'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample4'
					}]
				}]
			}]
		},{
			xtype: 'fieldset',
			title: 'fieldset ' + i,
			items: [{
				layout: 'column',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample1'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample2'
					}]
				},{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample3'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample4'
					}]
				}]
			}]
		},{
			xtype: 'fieldset',
			title: 'fieldset ' + i,
			items: [{
				layout: 'column',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample1'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample2'
					}]
				},{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample3'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample4'
					}]
				}]
			}]
		},{
			xtype: 'fieldset',
			title: 'fieldset ' + i,
			items: [{
				layout: 'column',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample1'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample2'
					}]
				},{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample3'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample4'
					}]
				}]
			}]
		},{
			xtype: 'fieldset',
			title: 'fieldset ' + i,
			items: [{
				layout: 'column',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample1'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample2'
					}]
				},{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample3'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample4'
					}]
				}]
			}]
		},{
			xtype: 'fieldset',
			title: 'fieldset ' + i,
			items: [{
				layout: 'column',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample1'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample2'
					}]
				},{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample3'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample4'
					}]
				}]
			}]
		},{
			xtype: 'fieldset',
			title: 'fieldset ' + i,
			items: [{
				layout: 'column',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample1'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample2'
					}]
				},{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample3'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample4'
					}]
				}]
			}]
		},{
			xtype: 'fieldset',
			title: 'fieldset ' + i,
			items: [{
				layout: 'column',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample1'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample2'
					}]
				},{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample3'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample4'
					}]
				}]
			}]
		},{
			xtype: 'fieldset',
			title: 'fieldset ' + i,
			items: [{
				layout: 'column',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample1'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample2'
					}]
				},{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample3'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample4'
					}]
				}]
			}]
		},{
			xtype: 'fieldset',
			title: 'fieldset ' + i,
			items: [{
				layout: 'column',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample1'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample2'
					}]
				},{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample3'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample4'
					}]
				}]
			}]
		},{
			xtype: 'fieldset',
			title: 'fieldset ' + i,
			items: [{
				layout: 'column',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample1'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample2'
					}]
				},{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample3'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample4'
					}]
				}]
			}]
		},{
			xtype: 'fieldset',
			title: 'fieldset ' + i,
			items: [{
				layout: 'column',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample1'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample2'
					}]
				},{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample3'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample4'
					}]
				}]
			}]
		},{
			xtype: 'fieldset',
			title: 'fieldset ' + i,
			items: [{
				layout: 'column',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample1'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample2'
					}]
				},{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample3'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample4'
					}]
				}]
			}]
		},{
			xtype: 'fieldset',
			title: 'fieldset ' + i,
			items: [{
				layout: 'column',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample1'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample2'
					}]
				},{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample3'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample4'
					}]
				}]
			}]
		},{
			xtype: 'fieldset',
			title: 'fieldset ' + i,
			items: [{
				layout: 'column',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample1'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample2'
					}]
				},{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample3'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample4'
					}]
				}]
			}]
		},{
			xtype: 'fieldset',
			title: 'fieldset ' + i,
			items: [{
				layout: 'column',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample1'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample2'
					}]
				},{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample3'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample4'
					}]
				}]
			}]
		},{
			xtype: 'fieldset',
			title: 'fieldset ' + i,
			items: [{
				layout: 'column',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample1'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample2'
					}]
				},{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample3'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample4'
					}]
				}]
			}]
		},{
			xtype: 'fieldset',
			title: 'fieldset ' + i,
			items: [{
				layout: 'column',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample1'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample2'
					}]
				},{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample3'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample4'
					}]
				}]
			}]
		},{
			xtype: 'fieldset',
			title: 'fieldset ' + i,
			items: [{
				layout: 'column',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample1'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample2'
					}]
				},{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample3'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample4'
					}]
				}]
			}]
		},{
			xtype: 'fieldset',
			title: 'fieldset ' + i,
			items: [{
				layout: 'column',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample1'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample2'
					}]
				},{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample3'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample4'
					}]
				}]
			}]
		},{
			xtype: 'fieldset',
			title: 'fieldset ' + i,
			items: [{
				layout: 'column',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample1'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample2'
					}]
				},{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample3'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample4'
					}]
				}]
			}]
		},{
			xtype: 'fieldset',
			title: 'fieldset ' + i,
			items: [{
				layout: 'column',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample1'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample2'
					}]
				},{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample3'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample4'
					}]
				}]
			}]
		},{
			xtype: 'fieldset',
			title: 'fieldset ' + i,
			items: [{
				layout: 'column',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample1'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample2'
					}]
				},{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample3'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample4'
					}]
				}]
			}]
		},{
			xtype: 'fieldset',
			title: 'fieldset ' + i,
			items: [{
				layout: 'column',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample1'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample2'
					}]
				},{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample3'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample4'
					}]
				}]
			}]
		},{
			xtype: 'fieldset',
			title: 'fieldset ' + i,
			items: [{
				layout: 'column',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample1'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample2'
					}]
				},{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample3'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample4'
					}]
				}]
			}]
		},{
			xtype: 'fieldset',
			title: 'fieldset ' + i,
			items: [{
				layout: 'column',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample1'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample2'
					}]
				},{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample3'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample4'
					}]
				}]
			}]
		},{
			xtype: 'fieldset',
			title: 'fieldset ' + i,
			items: [{
				layout: 'column',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample1'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample2'
					}]
				},{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample3'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample4'
					}]
				}]
			}]
		},{
			xtype: 'fieldset',
			title: 'fieldset ' + i,
			items: [{
				layout: 'column',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample1'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample2'
					}]
				},{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample3'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample4'
					}]
				}]
			}]
		},{
			xtype: 'fieldset',
			title: 'fieldset ' + i,
			items: [{
				layout: 'column',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample1'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample2'
					}]
				},{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample3'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample4'
					}]
				}]
			}]
		},{
			xtype: 'fieldset',
			title: 'fieldset ' + i,
			items: [{
				layout: 'column',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample1'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample2'
					}]
				},{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample3'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample4'
					}]
				}]
			}]
		},{
			xtype: 'fieldset',
			title: 'fieldset ' + i,
			items: [{
				layout: 'column',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample1'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample2'
					}]
				},{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample3'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample4'
					}]
				}]
			}]
		},{
			xtype: 'fieldset',
			title: 'fieldset ' + i,
			items: [{
				layout: 'column',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample1'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample2'
					}]
				},{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample3'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample4'
					}]
				}]
			}]
		},{
			xtype: 'fieldset',
			title: 'fieldset ' + i,
			items: [{
				layout: 'column',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample1'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample2'
					}]
				},{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample3'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample4'
					}]
				}]
			}]
		},{
			xtype: 'fieldset',
			title: 'fieldset ' + i,
			items: [{
				layout: 'column',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample1'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample2'
					}]
				},{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample3'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample4'
					}]
				}]
			}]
		},{
			xtype: 'fieldset',
			title: 'fieldset ' + i,
			items: [{
				layout: 'column',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample1'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample2'
					}]
				},{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample3'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample4'
					}]
				}]
			}]
		},{
			xtype: 'fieldset',
			title: 'fieldset ' + i,
			items: [{
				layout: 'column',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample1'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample2'
					}]
				},{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample3'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample4'
					}]
				}]
			}]
		},{
			xtype: 'fieldset',
			title: 'fieldset ' + i,
			items: [{
				layout: 'column',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample1'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample2'
					}]
				},{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample3'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample4'
					}]
				}]
			}]
		},{
			xtype: 'fieldset',
			title: 'fieldset ' + i,
			items: [{
				layout: 'column',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample1'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample2'
					}]
				},{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample3'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample4'
					}]
				}]
			}]
		},{
			xtype: 'fieldset',
			title: 'fieldset ' + i,
			items: [{
				layout: 'column',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample1'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample2'
					}]
				},{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample3'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample4'
					}]
				}]
			}]
		},{
			xtype: 'fieldset',
			title: 'fieldset ' + i,
			items: [{
				layout: 'column',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample1'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample2'
					}]
				},{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample3'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample4'
					}]
				}]
			}]
		},{
			xtype: 'fieldset',
			title: 'fieldset ' + i,
			items: [{
				layout: 'column',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample1'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample2'
					}]
				},{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample3'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample4'
					}]
				}]
			}]
		},{
			xtype: 'fieldset',
			title: 'fieldset ' + i,
			items: [{
				layout: 'column',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample1'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample2'
					}]
				},{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample3'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample4'
					}]
				}]
			}]
		},{
			xtype: 'fieldset',
			title: 'fieldset ' + i,
			items: [{
				layout: 'column',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample1'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample2'
					}]
				},{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample3'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample4'
					}]
				}]
			}]
		},{
			xtype: 'fieldset',
			title: 'fieldset ' + i,
			items: [{
				layout: 'column',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample1'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample2'
					}]
				},{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample3'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample4'
					}]
				}]
			}]
		},{
			xtype: 'fieldset',
			title: 'fieldset ' + i,
			items: [{
				layout: 'column',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample1'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample2'
					}]
				},{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample3'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample4'
					}]
				}]
			}]
		},{
			xtype: 'fieldset',
			title: 'fieldset ' + i,
			items: [{
				layout: 'column',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample1'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample2'
					}]
				},{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample3'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample4'
					}]
				}]
			}]
		},{
			xtype: 'fieldset',
			title: 'fieldset ' + i,
			items: [{
				layout: 'column',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample1'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample2'
					}]
				},{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample3'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample4'
					}]
				}]
			}]
		},{
			xtype: 'fieldset',
			title: 'fieldset ' + i,
			items: [{
				layout: 'column',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample1'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample2'
					}]
				},{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample3'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample4'
					}]
				}]
			}]
		},{
			xtype: 'fieldset',
			title: 'fieldset ' + i,
			items: [{
				layout: 'column',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample1'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample2'
					}]
				},{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample3'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample4'
					}]
				}]
			}]
		},{
			xtype: 'fieldset',
			title: 'fieldset ' + i,
			items: [{
				layout: 'column',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample1'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample2'
					}]
				},{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample3'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample4'
					}]
				}]
			}]
		},{
			xtype: 'fieldset',
			title: 'fieldset ' + i,
			items: [{
				layout: 'column',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample1'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample2'
					}]
				},{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample3'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample4'
					}]
				}]
			}]
		},{
			xtype: 'fieldset',
			title: 'fieldset ' + i,
			items: [{
				layout: 'column',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample1'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample2'
					}]
				},{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample3'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample4'
					}]
				}]
			}]
		},{
			xtype: 'fieldset',
			title: 'fieldset ' + i,
			items: [{
				layout: 'column',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample1'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample2'
					}]
				},{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample3'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample4'
					}]
				}]
			}]
		},{
			xtype: 'fieldset',
			title: 'fieldset ' + i,
			items: [{
				layout: 'column',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample1'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample2'
					}]
				},{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample3'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample4'
					}]
				}]
			}]
		},{
			xtype: 'fieldset',
			title: 'fieldset ' + i,
			items: [{
				layout: 'column',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample1'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample2'
					}]
				},{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample3'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample4'
					}]
				}]
			}]
		},{
			xtype: 'fieldset',
			title: 'fieldset ' + i,
			items: [{
				layout: 'column',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample1'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample2'
					}]
				},{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample3'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample4'
					}]
				}]
			}]
		},{
			xtype: 'fieldset',
			title: 'fieldset ' + i,
			items: [{
				layout: 'column',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample1'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample2'
					}]
				},{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample3'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample4'
					}]
				}]
			}]
		},{
			xtype: 'fieldset',
			title: 'fieldset ' + i,
			items: [{
				layout: 'column',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample1'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample2'
					}]
				},{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample3'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample4'
					}]
				}]
			}]
		},{
			xtype: 'fieldset',
			title: 'fieldset ' + i,
			items: [{
				layout: 'column',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample1'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample2'
					}]
				},{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample3'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample4'
					}]
				}]
			}]
		},{
			xtype: 'fieldset',
			title: 'fieldset ' + i,
			items: [{
				layout: 'column',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample1'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample2'
					}]
				},{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample3'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample4'
					}]
				}]
			}]
		},{
			xtype: 'fieldset',
			title: 'fieldset ' + i,
			items: [{
				layout: 'column',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample1'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample2'
					}]
				},{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample3'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample4'
					}]
				}]
			}]
		},{
			xtype: 'fieldset',
			title: 'fieldset ' + i,
			items: [{
				layout: 'column',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample1'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample2'
					}]
				},{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample3'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample4'
					}]
				}]
			}]
		},{
			xtype: 'fieldset',
			title: 'fieldset ' + i,
			items: [{
				layout: 'column',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample1'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample2'
					}]
				},{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample3'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample4'
					}]
				}]
			}]
		},{
			xtype: 'fieldset',
			title: 'fieldset ' + i,
			items: [{
				layout: 'column',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample1'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample2'
					}]
				},{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample3'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample4'
					}]
				}]
			}]
		},{
			xtype: 'fieldset',
			title: 'fieldset ' + i,
			items: [{
				layout: 'column',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample1'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample2'
					}]
				},{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample3'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample4'
					}]
				}]
			}]
		},{
			xtype: 'fieldset',
			title: 'fieldset ' + i,
			items: [{
				layout: 'column',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample1'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample2'
					}]
				},{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample3'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample4'
					}]
				}]
			}]
		},{
			xtype: 'fieldset',
			title: 'fieldset ' + i,
			items: [{
				layout: 'column',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample1'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample2'
					}]
				},{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample3'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample4'
					}]
				}]
			}]
		},{
			xtype: 'fieldset',
			title: 'fieldset ' + i,
			items: [{
				layout: 'column',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample1'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample2'
					}]
				},{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample3'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample4'
					}]
				}]
			}]
		},{
			xtype: 'fieldset',
			title: 'fieldset ' + i,
			items: [{
				layout: 'column',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample1'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample2'
					}]
				},{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample3'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample4'
					}]
				}]
			}]
		},{
			xtype: 'fieldset',
			title: 'fieldset ' + i,
			items: [{
				layout: 'column',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample1'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample2'
					}]
				},{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample3'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample4'
					}]
				}]
			}]
		},{
			xtype: 'fieldset',
			title: 'fieldset ' + i,
			items: [{
				layout: 'column',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample1'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample2'
					}]
				},{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample3'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample4'
					}]
				}]
			}]
		},{
			xtype: 'fieldset',
			title: 'fieldset ' + i,
			items: [{
				layout: 'column',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample1'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample2'
					}]
				},{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample3'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample4'
					}]
				}]
			}]
		},{
			xtype: 'fieldset',
			title: 'fieldset ' + i,
			items: [{
				layout: 'column',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample1'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample2'
					}]
				},{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample3'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample4'
					}]
				}]
			}]
		},{
			xtype: 'fieldset',
			title: 'fieldset ' + i,
			items: [{
				layout: 'column',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample1'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample2'
					}]
				},{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample3'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample4'
					}]
				}]
			}]
		},{
			xtype: 'fieldset',
			title: 'fieldset ' + i,
			items: [{
				layout: 'column',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample1'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample2'
					}]
				},{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample3'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample4'
					}]
				}]
			}]
		},{
			xtype: 'fieldset',
			title: 'fieldset ' + i,
			items: [{
				layout: 'column',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample1'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample2'
					}]
				},{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample3'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample4'
					}]
				}]
			}]
		},{
			xtype: 'fieldset',
			title: 'fieldset ' + i,
			items: [{
				layout: 'column',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample1'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample2'
					}]
				},{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample3'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample4'
					}]
				}]
			}]
		},{
			xtype: 'fieldset',
			title: 'fieldset ' + i,
			items: [{
				layout: 'column',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample1'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample2'
					}]
				},{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample3'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample4'
					}]
				}]
			}]
		},{
			xtype: 'fieldset',
			title: 'fieldset ' + i,
			items: [{
				layout: 'column',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample1'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample2'
					}]
				},{
					columnWidth: '.50',
					layout: 'form',
					items:[{
						xtype: 'textfield',
						fieldLabel: 'Sample3'
					},{
						xtype: 'textfield',
						fieldLabel: 'Sample4'
					}]
				}]
			}]
		}]
	});

	var end = new Date().getTime();
	alert("時間" + (end-start)/1000);
});
