Ext.onReady(function() {
	Ext.BLANK_IMAGE_URL = 'http://extjs.cachefly.net/ext-3.2.0/resources/images/default/s.gif';
	Ext.QuickTips.init();

	var start = new Date().getTime();

	var form = new Ext.Panel({
		renderTo: Ext.getBody(),
		title: 'FormPanel - Speed Test2 -',
		layout: 'form',
		width: 800,
		height: 600,
		padding: '20',
		autoScroll: true,
		items: [{
			xtype: 'fieldset',
			title: 'fieldset',
			items: [{
				layout: 'column',
				xtype: 'container',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					xtype: 'container',
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
					xtype: 'container',
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
			title: 'fieldset',
			items: [{
				layout: 'column',
				xtype: 'container',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					xtype: 'container',
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
					xtype: 'container',
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
			title: 'fieldset',
			items: [{
				layout: 'column',
				xtype: 'container',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					xtype: 'container',
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
					xtype: 'container',
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
			title: 'fieldset',
			items: [{
				layout: 'column',
				xtype: 'container',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					xtype: 'container',
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
					xtype: 'container',
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
			title: 'fieldset',
			items: [{
				layout: 'column',
				xtype: 'container',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					xtype: 'container',
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
					xtype: 'container',
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
			title: 'fieldset',
			items: [{
				layout: 'column',
				xtype: 'container',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					xtype: 'container',
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
					xtype: 'container',
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
			title: 'fieldset',
			items: [{
				layout: 'column',
				xtype: 'container',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					xtype: 'container',
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
					xtype: 'container',
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
			title: 'fieldset',
			items: [{
				layout: 'column',
				xtype: 'container',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					xtype: 'container',
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
					xtype: 'container',
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
			title: 'fieldset',
			items: [{
				layout: 'column',
				xtype: 'container',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					xtype: 'container',
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
					xtype: 'container',
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
			title: 'fieldset',
			items: [{
				layout: 'column',
				xtype: 'container',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					xtype: 'container',
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
					xtype: 'container',
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
			title: 'fieldset',
			items: [{
				layout: 'column',
				xtype: 'container',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					xtype: 'container',
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
					xtype: 'container',
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
			title: 'fieldset',
			items: [{
				layout: 'column',
				xtype: 'container',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					xtype: 'container',
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
					xtype: 'container',
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
			title: 'fieldset',
			items: [{
				layout: 'column',
				xtype: 'container',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					xtype: 'container',
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
					xtype: 'container',
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
			title: 'fieldset',
			items: [{
				layout: 'column',
				xtype: 'container',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					xtype: 'container',
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
					xtype: 'container',
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
			title: 'fieldset',
			items: [{
				layout: 'column',
				xtype: 'container',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					xtype: 'container',
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
					xtype: 'container',
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
			title: 'fieldset',
			items: [{
				layout: 'column',
				xtype: 'container',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					xtype: 'container',
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
					xtype: 'container',
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
			title: 'fieldset',
			items: [{
				layout: 'column',
				xtype: 'container',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					xtype: 'container',
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
					xtype: 'container',
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
			title: 'fieldset',
			items: [{
				layout: 'column',
				xtype: 'container',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					xtype: 'container',
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
					xtype: 'container',
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
			title: 'fieldset',
			items: [{
				layout: 'column',
				xtype: 'container',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					xtype: 'container',
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
					xtype: 'container',
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
			title: 'fieldset',
			items: [{
				layout: 'column',
				xtype: 'container',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					xtype: 'container',
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
					xtype: 'container',
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
			title: 'fieldset',
			items: [{
				layout: 'column',
				xtype: 'container',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					xtype: 'container',
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
					xtype: 'container',
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
			title: 'fieldset',
			items: [{
				layout: 'column',
				xtype: 'container',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					xtype: 'container',
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
					xtype: 'container',
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
			title: 'fieldset',
			items: [{
				layout: 'column',
				xtype: 'container',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					xtype: 'container',
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
					xtype: 'container',
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
			title: 'fieldset',
			items: [{
				layout: 'column',
				xtype: 'container',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					xtype: 'container',
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
					xtype: 'container',
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
			title: 'fieldset',
			items: [{
				layout: 'column',
				xtype: 'container',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					xtype: 'container',
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
					xtype: 'container',
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
			title: 'fieldset',
			items: [{
				layout: 'column',
				xtype: 'container',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					xtype: 'container',
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
					xtype: 'container',
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
			title: 'fieldset',
			items: [{
				layout: 'column',
				xtype: 'container',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					xtype: 'container',
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
					xtype: 'container',
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
			title: 'fieldset',
			items: [{
				layout: 'column',
				xtype: 'container',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					xtype: 'container',
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
					xtype: 'container',
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
			title: 'fieldset',
			items: [{
				layout: 'column',
				xtype: 'container',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					xtype: 'container',
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
					xtype: 'container',
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
			title: 'fieldset',
			items: [{
				layout: 'column',
				xtype: 'container',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					xtype: 'container',
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
					xtype: 'container',
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
			title: 'fieldset',
			items: [{
				layout: 'column',
				xtype: 'container',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					xtype: 'container',
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
					xtype: 'container',
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
			title: 'fieldset',
			items: [{
				layout: 'column',
				xtype: 'container',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					xtype: 'container',
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
					xtype: 'container',
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
			title: 'fieldset',
			items: [{
				layout: 'column',
				xtype: 'container',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					xtype: 'container',
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
					xtype: 'container',
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
			title: 'fieldset',
			items: [{
				layout: 'column',
				xtype: 'container',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					xtype: 'container',
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
					xtype: 'container',
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
			title: 'fieldset',
			items: [{
				layout: 'column',
				xtype: 'container',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					xtype: 'container',
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
					xtype: 'container',
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
			title: 'fieldset',
			items: [{
				layout: 'column',
				xtype: 'container',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					xtype: 'container',
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
					xtype: 'container',
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
			title: 'fieldset',
			items: [{
				layout: 'column',
				xtype: 'container',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					xtype: 'container',
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
					xtype: 'container',
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
			title: 'fieldset',
			items: [{
				layout: 'column',
				xtype: 'container',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					xtype: 'container',
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
					xtype: 'container',
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
			title: 'fieldset',
			items: [{
				layout: 'column',
				xtype: 'container',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					xtype: 'container',
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
					xtype: 'container',
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
			title: 'fieldset',
			items: [{
				layout: 'column',
				xtype: 'container',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					xtype: 'container',
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
					xtype: 'container',
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
			title: 'fieldset',
			items: [{
				layout: 'column',
				xtype: 'container',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					xtype: 'container',
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
					xtype: 'container',
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
			title: 'fieldset',
			items: [{
				layout: 'column',
				xtype: 'container',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					xtype: 'container',
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
					xtype: 'container',
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
			title: 'fieldset',
			items: [{
				layout: 'column',
				xtype: 'container',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					xtype: 'container',
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
					xtype: 'container',
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
			title: 'fieldset',
			items: [{
				layout: 'column',
				xtype: 'container',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					xtype: 'container',
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
					xtype: 'container',
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
			title: 'fieldset',
			items: [{
				layout: 'column',
				xtype: 'container',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					xtype: 'container',
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
					xtype: 'container',
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
			title: 'fieldset',
			items: [{
				layout: 'column',
				xtype: 'container',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					xtype: 'container',
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
					xtype: 'container',
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
			title: 'fieldset',
			items: [{
				layout: 'column',
				xtype: 'container',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					xtype: 'container',
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
					xtype: 'container',
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
			title: 'fieldset',
			items: [{
				layout: 'column',
				xtype: 'container',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					xtype: 'container',
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
					xtype: 'container',
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
			title: 'fieldset',
			items: [{
				layout: 'column',
				xtype: 'container',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					xtype: 'container',
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
					xtype: 'container',
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
			title: 'fieldset',
			items: [{
				layout: 'column',
				xtype: 'container',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					xtype: 'container',
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
					xtype: 'container',
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
			title: 'fieldset',
			items: [{
				layout: 'column',
				xtype: 'container',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					xtype: 'container',
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
					xtype: 'container',
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
			title: 'fieldset',
			items: [{
				layout: 'column',
				xtype: 'container',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					xtype: 'container',
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
					xtype: 'container',
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
			title: 'fieldset',
			items: [{
				layout: 'column',
				xtype: 'container',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					xtype: 'container',
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
					xtype: 'container',
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
			title: 'fieldset',
			items: [{
				layout: 'column',
				xtype: 'container',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					xtype: 'container',
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
					xtype: 'container',
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
			title: 'fieldset',
			items: [{
				layout: 'column',
				xtype: 'container',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					xtype: 'container',
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
					xtype: 'container',
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
			title: 'fieldset',
			items: [{
				layout: 'column',
				xtype: 'container',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					xtype: 'container',
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
					xtype: 'container',
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
			title: 'fieldset',
			items: [{
				layout: 'column',
				xtype: 'container',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					xtype: 'container',
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
					xtype: 'container',
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
			title: 'fieldset',
			items: [{
				layout: 'column',
				xtype: 'container',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					xtype: 'container',
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
					xtype: 'container',
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
			title: 'fieldset',
			items: [{
				layout: 'column',
				xtype: 'container',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					xtype: 'container',
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
					xtype: 'container',
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
			title: 'fieldset',
			items: [{
				layout: 'column',
				xtype: 'container',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					xtype: 'container',
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
					xtype: 'container',
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
			title: 'fieldset',
			items: [{
				layout: 'column',
				xtype: 'container',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					xtype: 'container',
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
					xtype: 'container',
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
			title: 'fieldset',
			items: [{
				layout: 'column',
				xtype: 'container',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					xtype: 'container',
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
					xtype: 'container',
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
			title: 'fieldset',
			items: [{
				layout: 'column',
				xtype: 'container',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					xtype: 'container',
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
					xtype: 'container',
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
			title: 'fieldset',
			items: [{
				layout: 'column',
				xtype: 'container',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					xtype: 'container',
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
					xtype: 'container',
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
			title: 'fieldset',
			items: [{
				layout: 'column',
				xtype: 'container',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					xtype: 'container',
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
					xtype: 'container',
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
			title: 'fieldset',
			items: [{
				layout: 'column',
				xtype: 'container',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					xtype: 'container',
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
					xtype: 'container',
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
			title: 'fieldset',
			items: [{
				layout: 'column',
				xtype: 'container',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					xtype: 'container',
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
					xtype: 'container',
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
			title: 'fieldset',
			items: [{
				layout: 'column',
				xtype: 'container',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					xtype: 'container',
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
					xtype: 'container',
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
			title: 'fieldset',
			items: [{
				layout: 'column',
				xtype: 'container',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					xtype: 'container',
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
					xtype: 'container',
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
			title: 'fieldset',
			items: [{
				layout: 'column',
				xtype: 'container',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					xtype: 'container',
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
					xtype: 'container',
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
			title: 'fieldset',
			items: [{
				layout: 'column',
				xtype: 'container',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					xtype: 'container',
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
					xtype: 'container',
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
			title: 'fieldset',
			items: [{
				layout: 'column',
				xtype: 'container',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					xtype: 'container',
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
					xtype: 'container',
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
			title: 'fieldset',
			items: [{
				layout: 'column',
				xtype: 'container',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					xtype: 'container',
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
					xtype: 'container',
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
			title: 'fieldset',
			items: [{
				layout: 'column',
				xtype: 'container',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					xtype: 'container',
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
					xtype: 'container',
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
			title: 'fieldset',
			items: [{
				layout: 'column',
				xtype: 'container',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					xtype: 'container',
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
					xtype: 'container',
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
			title: 'fieldset',
			items: [{
				layout: 'column',
				xtype: 'container',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					xtype: 'container',
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
					xtype: 'container',
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
			title: 'fieldset',
			items: [{
				layout: 'column',
				xtype: 'container',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					xtype: 'container',
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
					xtype: 'container',
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
			title: 'fieldset',
			items: [{
				layout: 'column',
				xtype: 'container',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					xtype: 'container',
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
					xtype: 'container',
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
			title: 'fieldset',
			items: [{
				layout: 'column',
				xtype: 'container',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					xtype: 'container',
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
					xtype: 'container',
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
			title: 'fieldset',
			items: [{
				layout: 'column',
				xtype: 'container',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					xtype: 'container',
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
					xtype: 'container',
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
			title: 'fieldset',
			items: [{
				layout: 'column',
				xtype: 'container',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					xtype: 'container',
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
					xtype: 'container',
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
			title: 'fieldset',
			items: [{
				layout: 'column',
				xtype: 'container',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					xtype: 'container',
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
					xtype: 'container',
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
			title: 'fieldset',
			items: [{
				layout: 'column',
				xtype: 'container',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					xtype: 'container',
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
					xtype: 'container',
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
			title: 'fieldset',
			items: [{
				layout: 'column',
				xtype: 'container',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					xtype: 'container',
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
					xtype: 'container',
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
			title: 'fieldset',
			items: [{
				layout: 'column',
				xtype: 'container',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					xtype: 'container',
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
					xtype: 'container',
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
			title: 'fieldset',
			items: [{
				layout: 'column',
				xtype: 'container',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					xtype: 'container',
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
					xtype: 'container',
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
			title: 'fieldset',
			items: [{
				layout: 'column',
				xtype: 'container',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					xtype: 'container',
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
					xtype: 'container',
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
			title: 'fieldset',
			items: [{
				layout: 'column',
				xtype: 'container',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					xtype: 'container',
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
					xtype: 'container',
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
			title: 'fieldset',
			items: [{
				layout: 'column',
				xtype: 'container',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					xtype: 'container',
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
					xtype: 'container',
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
			title: 'fieldset',
			items: [{
				layout: 'column',
				xtype: 'container',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					xtype: 'container',
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
					xtype: 'container',
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
			title: 'fieldset',
			items: [{
				layout: 'column',
				xtype: 'container',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					xtype: 'container',
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
					xtype: 'container',
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
			title: 'fieldset',
			items: [{
				layout: 'column',
				xtype: 'container',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					xtype: 'container',
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
					xtype: 'container',
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
			title: 'fieldset',
			items: [{
				layout: 'column',
				xtype: 'container',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					xtype: 'container',
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
					xtype: 'container',
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
			title: 'fieldset',
			items: [{
				layout: 'column',
				xtype: 'container',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					xtype: 'container',
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
					xtype: 'container',
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
			title: 'fieldset',
			items: [{
				layout: 'column',
				xtype: 'container',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					xtype: 'container',
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
					xtype: 'container',
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
			title: 'fieldset',
			items: [{
				layout: 'column',
				xtype: 'container',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					xtype: 'container',
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
					xtype: 'container',
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
			title: 'fieldset',
			items: [{
				layout: 'column',
				xtype: 'container',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					xtype: 'container',
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
					xtype: 'container',
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
			title: 'fieldset',
			items: [{
				layout: 'column',
				xtype: 'container',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					xtype: 'container',
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
					xtype: 'container',
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
			title: 'fieldset',
			items: [{
				layout: 'column',
				xtype: 'container',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					xtype: 'container',
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
					xtype: 'container',
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
			title: 'fieldset',
			items: [{
				layout: 'column',
				xtype: 'container',
				items: [{
					columnWidth: '.50',
					layout: 'form',
					xtype: 'container',
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
					xtype: 'container',
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
	alert((end-start)/1000);
});
