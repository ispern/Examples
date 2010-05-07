/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

// {{{ Ext.trick.test.unit.alltest-runner

/**
 * Ext.trick.test.unit.alltest-runner
 *
 * OmegaTrick全体のテストケースを実行します。
 */
Ext.onReady(function(){

    // テストランナー生成
    var r = Ext.trick.unit.TestRunner;

    // Ext.trick.util TestSuite生成
    var utilSuite = new Ext.trick.unit.TestSuite("Ext.trick.util TestSuite");

    // Ext.trick.test.unit.util.clone テストケース追加
    utilSuite.add(Ext.trick.test.unit.util.Clone);

    // テストランナーに追加
    r.add(utilSuite);

    // ロガー生成
    var logger = new Ext.trick.unit.TestLogger('testLogger');

    // テスト実行
    r.run();

});

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */

