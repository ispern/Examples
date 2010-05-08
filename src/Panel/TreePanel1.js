Ext.onReady( function() {
	Ext.BLANK_IMAGE_URL = 'http://extjs.cachefly.net/ext-3.2.0/resources/images/default/s.gif';
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
		root: root					// rootのツリーノードを指定
	});

	// 子ノードを生成

	var node1 = new Ext.tree.TreeNode({
		text: 'thread1',
		leaf: true
	});

	var node2 = new Ext.tree.TreeNode( {
		text: 'thread2',
		leaf: true
	});

	var node3 = new Ext.tree.TreeNode( {
		text: 'thread3',
		leaf: true
	});

	// 生成した子ノードをrootノードに追加
	root.appendChild(node1);
	root.appendChild(node2);
	root.appendChild(node3);

});
