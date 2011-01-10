App.ExampleList = Ext.extend(Ext.NestedList, {

    initComponent: function() {
        var me = this;
        
        // 設定適用
        Ext.apply(me, {

            title: 'サンプルリスト',

            store: 'ExampleItemStore',

            displayField: 'text'

        });
        
        // スーパークラスメソッドコール
        App.ExampleList.superclass.initComponent.call(me);
    }
});

Ext.reg('examplelist', App.ExampleList);
