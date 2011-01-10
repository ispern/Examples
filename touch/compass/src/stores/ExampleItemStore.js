Ext.StoreMgr.register(new Ext.data.TreeStore({

    storeId: 'ExampleItemStore',

    model: 'ExampleItem',

    autoLoad: true,

    proxy: {

        type: 'ajax',

        url: 'data/exampleItem.json',

        reader: {

            type: 'tree',

            root: 'items'
        }
    }
}));
