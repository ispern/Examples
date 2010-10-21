Ext.onReady(function() {
	Ext.BLANK_IMAGE_URL = 'http://extjs.cachefly.net/ext-3.2.0/resources/images/default/s.gif';
	Ext.QuickTips.init();

	// データ定義
    var jsonData = {
        results: 14,
        data: [{
            id: 1,
            name: 'Windows95',
            description: '9x系'
        }]
    };

	// データストア
	var store = new Ext.data.JsonStore({
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
		title: 'GridPanel Sample',
		renderTo: Ext.getBody(),
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
});
