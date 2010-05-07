/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */
/*jslint evil: true */

// {{{ Ext expand methods

Ext.applyIf(Ext,{

    // {{{ maxZindex

    /**
     * DOMツリー内のzindex最大値を取得します。
     *
     * @return zindex最大値
     */
    maxZindex : function() {

        var ret = 0;
        var els = Ext.select('*');

        els.each(function(el){

            var zIndex = el.getStyle('z-index');
            if(Ext.isNumber(parseInt(zIndex, 10)) && ret < zIndex) {
                ret = zIndex;
            }

        }, this);

        return ret;
    },

    // }}}
    // {{{ getScrollPos

    /**
     * スクロール位置取得
     *
     * @return Object x:x位置 y:y位置
     */
    getScrollPos: function() {

        var y = (document.documentElement.scrollTop > 0) ? document.documentElement.scrollTop : document.body.scrollTop;
        var x = (document.documentElement.scrollLeft > 0) ? document.documentElement.scrollLeft : document.body.scrollLeft;

        return {
            x: x,
            y: y
        };

    },

    // }}}
    // {{{ clone

    /**
     * クローン生成メソッド
     */
    clone : function(o) {

        return Ext.trick.util.Clone(o);
    }

    // }}}

});

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */

