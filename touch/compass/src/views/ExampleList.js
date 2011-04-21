App.ExampleList = Ext.extend(Ext.NestedList, {

    initComponent: function() {

        var me = this;
        
        // 設定適用
        Ext.apply(me, {

            id: 'example-list',

            store: 'ExampleItemStore',

            displayField: 'text'

        });
        
        // スーパークラスメソッドコール
        App.ExampleList.superclass.initComponent.call(me);
    },

    initEvents: function() {

        var me = this;

        me.on('leafitemtap', me.onLeafItemTap, me);
    
        // スーパークラスメソッドコール
        App.ExampleList.superclass.initEvents.call(me);
    
    },

    onLeafItemTap: function(list, number) {

        var me = this,
            record = list.getStore().getAt(number);

        if (record) {
            Ext.dispatch({
                controller: 'show',
                action: 'renderPanel',
                instance: record,
                history: 'show/render'
            });
        }
    }
});

Ext.reg('examplelist', App.ExampleList);
