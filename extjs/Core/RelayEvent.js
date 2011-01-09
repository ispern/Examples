Ext.onReady(function() {
    
    var panel1 = new Ext.Panel({
        title: 'Panel1',
        renderTo: 'elm1',
        width: 400,
        height: 350,
        html: 'Panel1',
        collapsible: true
    });

    var panel2 = new Ext.Panel({
        title: 'Panel2',
        renderTo: 'elm2',
        width: 400,
        height: 350,
        html: 'Panel2',
        collapsible: true
    });
});
