Ext.regController('show', {

    model: 'ExampleItem',

    first: function() {
        var me = this,
            store = Ext.getStore('ExampleItemStore'),
            rootNode = store.getRootNode(),
            first;

        if (!rootNode.hasChildNodes) {
            return;
        }

        first = rootNode.getChildAt(0);
        var record = first.getRecord();

        Ext.dispatch({
            controller: 'show',
            action: 'show',
            instance: record,
            history: 'show/' + record.get('text')
        });
    },

    show: function(options) {
        var record = options.instance,
            type = record.get('type'),
            viewport = Ext.getCmp('viewport');

        console.log(type);
        var cmp = this.render({
            xtype: type
        });

        viewport.setActiveItem(cmp);
    }
});
