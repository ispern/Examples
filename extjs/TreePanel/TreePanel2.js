Ext.onReady( function() {
    Ext.Ajax.method = 'GET';
    Ext.QuickTips.init();

    // rootのツリーノードを生成
    var root = new Ext.tree.AsyncTreeNode({
        text: 'forum',
        leaf: false
    });

    var treePanel = new Ext.tree.TreePanel({
        title: 'Tree Panel',		// PanelのTitleを指定
        renderTo: Ext.getBody(),	// 表示する要素を指定
        width: 225,					// 幅
        height: 200,				// 高さ
        minSize: 150,				// 最小の幅
        maxSize: 300,				// 最大の幅
        rootVisible: false,			// rootのツリーノードを表示するか
        root: root,					// rootのツリーノードを指定
        loader: new Ext.tree.TreeLoader({
            url: 'TreePanel.json'	// 取得元URLを指定
        })
    });
});
