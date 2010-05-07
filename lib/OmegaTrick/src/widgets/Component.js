/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

// {{{ Ext.Component.prototype.initRef

/**
 * Ext.Component.prototype.initRef createSequence
 *
 * @author  Kazuhiro Kotsutsumi <kotsutsumi@xenophy.com>
 * @version 1.0
 */
Ext.Component.prototype.initRef = Ext.Component.prototype.initRef.createSequence(function(){

    var me = this;
    var getOwner = function(base, arr) {

        var ret,
            name = arr.pop();

        ret = base[name];

        if(!ret) {
            base[name] = {};
            ret = base[name];
        }

        if(arr.length > 0) {
            // 再帰処理
            getOwner(ret, arr);
        }

        return ret;
    };

    if(Ext.isString(me.refName) && me.refName.indexOf('.') > 0 && me.refOwner) {

        var temp = me.refName.split('.');
        var refName = temp.pop();
        var owner = getOwner(me.refOwner, temp);

        owner[refName] = me;
        delete me.refOwner[me.refName];
    }
});

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */

