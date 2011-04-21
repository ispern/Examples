Ext.regController('show', {

    model: 'ExampleItem',

    renderPanel: function(options) {
        var record = options.instance;

        var cmp = this.render({
            xtype: record.get('type')
        });

        Ext.getCmp('viewport').setActiveItem(cmp, 'slide');
    }
});
