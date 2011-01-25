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
Ext.regModel('Items', {
    fields: ['item']
});
App.DataView = Ext.extend(Ext.DataView, {

    itemSelector: 'div.item',

    isExpand: true,

    tpl: new Ext.XTemplate(
        '<div style="height: 250px;"></div>',
        '<div class="item-wrap" style="height: 240px;">',
            '<div id="toggle-area" style="height: 40px;">',
                'タップする場所',
            '</div>',
            '<tpl for=".">',
                '<div class="item" style="border: 1px solid black; height: 40px;">',
                    '{item}',
                '</div>',
            '</tpl>',
        '</div>',
        '<div style="background-color: blue; height: 200px; position: relative; top: -200px;"></div>'),

    initComponent: function() {
        var me = this;

        // 設定適用
        Ext.apply(me, {
            store: new Ext.data.ArrayStore({
                model: 'Items',
                expandData: true
            })
        });

        // スーパークラスメソッドコール
        App.DataView.superclass.initComponent.call(me);

    },

    initEvents: function() {
        var me = this;

        me.on('containertap', me.onToggleTap, me);
        
        // スーパークラスメソッドコール
        App.DataView.superclass.initEvents.call(me);

        this.store.loadData(['11', '12', '13', '14', '15']);
        
    },

    onToggleTap: function(cmp, e) {

        var me = this,
            target = e.getTarget(),
            toggle = Ext.get('toggle-area'),
            wrap = me.getEl().down('.item-wrap'),
            height = wrap.getHeight();

        if (target === toggle.dom) {
            if (me.isExpand) {
                Ext.Anim.run(wrap, 'slide', {
                    duration: 500,
                    direction: 'up',
                    easing: 'ease-out',
                    autoClear: false
                });
                me.isExpand = false;
            } else {
                Ext.Anim.run(wrap, 'slide', {
                    duration: 500,
                    direction: 'down',
                    out: false,
                    easing: 'ease-out',
                    autoClear: false
                });
                me.isExpand = true;
            }
        }
    }
});

Ext.reg('app-dataview', App.DataView);
