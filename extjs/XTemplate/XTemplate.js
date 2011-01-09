Ext.onReady(function() {
    
    var t = new Ext.XTemplate(
        '<div name="{id}">',
        '    <span class="{cls}">{name:trim} {value:ellipsis(10)}</span>',
        '</div>'
    );

    t.append(Ext.getBody(), {id: 'myid', cls: 'myclass', name: 'foo', value: 'bar'});
    console.log(t.apply({id: 'myid', cls: 'myclass', name: 'foo', value: 'bar'}));
});
