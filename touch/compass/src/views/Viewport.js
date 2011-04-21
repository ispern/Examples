App.Viewport = Ext.extend(Ext.Panel, {
    
    initComponent: function() {
        var me = this;
        
        // 設定適用
        Ext.apply(me, {
            
            fullscreen: true,

            layout: 'card',

            id: 'viewport'
        });

        // 戻るボタン作成
        me.backBtn = new Ext.Button({
            text: 'back',
            ui: 'back',
            hidden: true,
            handler: me.onBack,
            scope: me
        });
        var btns = [];
        btns.unshift(me.backBtn);

        // ツールバー作成
        me.naviToolbar = new Ext.Toolbar({
            dock: 'top',
            ui: 'dark',
            title: 'Demo',
            items: btns
        });

        // サンプルリストのコンポーネント作成
        me.exampleList = new App.ExampleList({
            dock: 'left',
            useToolbar: Ext.isPhone ? false : true,
            hidden: !Ext.is.Phone && Ext.Viewport.orientation == 'portrait',
            toolbar: me.naviToolbar
        });

        if (!Ext.is.Phone) {
            // モバイル端末以外の場合、幅を設定
            me.exampleList.setWidth(250);
        }

        me.dockedItems = me.dockedItems || [];
        me.dockedItems.unshift(me.naviToolbar);
        if (!Ext.is.Phone && Ext.Viewport.orientation == 'landscape') {
            // モバイル端末でなく横向きの場合、dockedItemsに追加
            me.dockedItems.unshift(me.exampleList);
        } else if (Ext.is.Phone) {
            // モバイル端末の場合、itemsに追加
            me.items = me.items || [];
            me.items.unshift(me.exampleList);
        }

        // スーパークラスメソッドコール
        App.Viewport.superclass.initComponent.call(me);
    },

    onBack: function() {
        
        var me = this,
            exampleList = me.exampleList;

        if (me.getActiveItem() === exampleList) {
            exampleList.onBackTap();
        } else {
            me.setActiveItem(exampleList, {
                type: 'slide',
                reverse: true
            });
        }
    }
});
