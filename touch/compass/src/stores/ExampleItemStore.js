Ext.StoreMgr.register(new Ext.data.TreeStore({

    storeId: 'ExampleItemStore',

    model: 'ExampleItem',

    root: {
        items: [{
            text: "_mixins.scss",
            type: "mixinpanel",
            leaf: true
        },{
            text: "_buttons.scss",
            type: "mixinpanel",
            leaf: false,
            items: [{
                text: "_mixins.scss",
                type: "mixinpanel",
                leaf: true
            }]
        }]
    },

    proxy: {

        type: 'ajax',

        reader: {

            type: 'tree',

            root: 'items'
        }
    }
}));
