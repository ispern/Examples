
Ext.onReady(function() {
    Ext.get('sample1').on('tap', function(e, el) {
        var panel = new Ext.Panel({
            modal: true,
            floating: true,
            width: 300,
            height: 400,
            contentEl: 'overlay'
        });
        panel.showBy(this);
    });
    Ext.get('sample2').on('tap', function(e, el) {
        var panel = new Ext.Panel({
            modal: true,
            floating: true,
            width: 300,
            height: 400,
            contentEl: 'overlay'
        });
        panel.showBy(this);
    });
});
