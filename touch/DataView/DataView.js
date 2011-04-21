Ext.setup({
    
    // アイコン
    icon: '',
    
    // アイコンの光沢効果
    glossOnIcon: true,
    
    // モバイル用スタートアップ画像
    phoneStartupScreen: '',
    
    // タブレット用スタートアップ画像
    tabletStartupScreen: '',
    
    onReady: function() {
        new Ext.Panel({
            fullscreen: true,
            items: [{
                xtype: 'app-dataview'
            }]
        });
    }
});

Ext.ns('App');

var data = {
    items: [{
        name: 'record1',
        child: [{
            name: 'child1'
        }]
    },{
        name: 'record2',
        child: [{
            name: 'child1'
        }]
    },{
        name: 'record3',
        child: [{
            name: 'child1'
        }]
    },{
        name: 'record4',
        child: [{
            name: 'child1'
        }]
    },{
        name: 'record5',
        child: [{
            name: 'child1'
        }]
    },{
        name: 'record6',
        child: [{
            name: 'child1'
        }]
    }]
};

Ext.regModel('Item', {

    fields: ['name'],

    hasMany: {
        model: 'Child',

        name: 'child'
    }
});

Ext.regModel('Chidl', {

    fields: [
        'name'
    ],

    belongsTo: 'Item'
});

Ext.regStore('Items', {

    model: 'Item',

    type: 'json',

    autoLoad: true,

    data: data,

    proxy: {

        type: 'memory',

        reader: {

            type: 'json',

            root: 'items'
        }
    }
});

App.DataView = Ext.extend(Ext.DataView, {

    itemSelector: 'div.item',

    tpl: new Ext.XTemplate(
        '<tpl for=".">',
            '<div class="item" style="border: 1px solid black; height: 40px;">',
                '{name}',
                '<tpl for="child">',
                    '<span>{name}</span>',
                '</tpl>',
            '</div>',
        '</tpl>'),

    initComponent: function() {

        var me = this;

        // 設定適用
        Ext.apply(me, {

            store: 'Items'

        });

        // スーパークラスメソッドコール
        App.DataView.superclass.initComponent.call(me);
    },

    initEvents: function() {

        var me = this;
        
        // スーパークラスメソッドコール
        App.DataView.superclass.initEvents.call(me);
    },

    onItemSelect: function() {
        console.log(this.store);
        console.log(arguments);
    }
});

Ext.reg('app-dataview', App.DataView);
