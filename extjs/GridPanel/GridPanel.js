Ext.onReady(function() {
	Ext.QuickTips.init();

	// データ定義
	var data = [
		[1, 'Windows95', '9x系'],
		[2, 'Windows98', '9x系'],
		[3, 'WindowsMe', 'NT系'],
		[4, 'Windows2000', 'NT系'],
		[5, 'WindowsXP', 'NT系'],
		[6, 'WindowsVista', 'NT系'],
		[7, 'Windows7', 'NT系'],
		[8, 'Mac OS X v10.0', 'Cheetah'],
		[9, 'Mac OS X v10.1', 'Puma'],
		[10, 'Mac OS X v10.2', 'Jaguar'],
		[11, 'Mac OS X v10.3', 'Panther'],
		[12, 'Mac OS X v10.4', 'Tiger'],
		[13, 'Mac OS X v10.5', 'Leopard'],
		[14, 'Mac OS X v10.6', 'Snow Leopard']
	];

    var jsonData = {
        results: 14,
        data: data
    };

	// データストア
	var store = new Ext.data.ArrayStore({
        idProperty: 'id',
        totalProperty: 'results',
        root: 'data',
        autoLoad: true,
		fields: [
			{name: 'id', type: 'string'},
			{name: 'name', type: 'string'},
			{name: 'description', type: 'string'}
		],
        proxy: new Ext.data.MemoryProxy(jsonData)
	});

	// カラム定義
	var cm = new Ext.grid.ColumnModel({
		defaults: {
			width: 150,
			sortable: true
		},
		columns: [
			{id: 'id', header: 'ID', dataIndex: 'id', width: 30},
			{header: 'name', dataIndex: 'name'},
			{header: 'description', dataIndex: 'description'}
		]
	});

	var grid = new Ext.grid.GridPanel({
		title: 'Array GridPanel Sample',
		width: 800,
		height: 300,
		cm: cm,
		store: store,
		stripeRows: true,
		viewConfig: {
			forceFit: true
		},
        bbar: new Ext.PagingToolbar({
			store: store,
            pageSize: 20,
			displayInfo: true
		})
	});

    var fn = function(btn, event) {
        console.log('button click.');
        console.log(arguments);
    };

    var f = fn.createDelegate(this, ['bac'], true);
    console.log(f);
    var panel = new Ext.Panel({
        renderTo: Ext.getBody(),
        xtype: 'container',
        layout: 'fit',
        items: [grid],
        tbar: new Ext.Toolbar({
            items: [{
                xtype: 'button',
                text: 'button',
                handler: f
            }]
        })
    });
});
