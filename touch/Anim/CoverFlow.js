// {{{ Ext.ux.CoverFlow

/*
 *
 */
Ext.ux.CoverFlow = Ext.extend(Ext.Panel, {

    baseCls: 'x-coverflow',

    activeIndex: 0,
    
    // {{{ initComponent
    
    /*
     * コンポーネント初期化メソッド
     */
    initComponent: function() {

        var me = this;

        console.log(me);

        // スーパークラスメソッドコール
        Ext.ux.CoverFlow.superclass.initComponent.call(me);
    },
    
    // }}}
    // {{{ initEvents
    
    /*
     * イベント初期化メソッド
     */
    initEvents: function() {

        var me = this;
        
        // スーパークラスメソッドコール
        Ext.ux.CoverFlow.superclass.initEvents.call(me);
        
    },
    
    // }}}
    
    afterRender: function() {

        var me = this,
            el = me.body,
            items = me.initialConfig.imageItems,
            zindex = items.length;
            itemEls = [];

        Ext.each(items, function(item, index) {

            var x = (90 * index);
            var rotate = 30;
            var skew = 5;
            itemEls.push({
                cls: 'x-coverflow-item',
                children: [{
                    tag: 'img',
                    src: item.url
                }],
                style: {
                    '-webkit-transform': 'translate3d(' + x + 'px, 0px, 0px) skewY(' +skew + 'deg)',
                    left: '600px',
                    top: '200px',
                    'z-index': zindex - index
                }
            });
        });

        if (itemEls.length > 1) {
            itemEls[1].cls = itemEls[1].cls + ' x-coverflow-item-next';
        }

        Ext.DomHelper.insertFirst(el, itemEls, true);

        me.imageItems = new Ext.util.MixedCollection();

        var imageItems = me.body.query('.x-coverflow-item');
        Ext.each(imageItems, function(image) {
            image = Ext.get(image);
            me.imageItems.add(image.id, image);
        });

        me.mon(me.body, {
            drag: me.onDrag,
            dragThreshold: 5,
            dragend: me.onDragEnd,
            scope: me
        });
    },

    onDrag : function(e) {
        this.currentScroll = {
            x: e.deltaX,
            y: e.deltaY
        };
        
        var activeIndex = this.activeIndex;
        if (
            // And we are on the first card and dragging left
            (activeIndex === 0 && e.deltaX > 0) || 
            // Or on the last card and dragging right
            (activeIndex === this.imageItems.length - 1 && e.deltaX < 0)) {
            // Then slow the drag down
            this.currentScroll.x = e.deltaX / 2;             
        }

        this.updateImagePositions();
    },

    updateImagePositions : function(animate) {
        var images = this.imageItems.items,
            ln = images.length,
            imageOffset,
            i, image, el, style;
        
        for (i = 0; i < ln; i++) {
            image = images[i];  
                
            style = image.dom.style;

            if (image === this.imageItems.getAt(this.activeIndex)) {
                image.on('webkitTransitionEnd', this.onTransitionEnd, this, {single: true});
            }
            style.webkitTransitionDuration = '300ms';

            cardOffset = 90 * i;
            // Ext.Element.cssTransform(image, {
                // translate: [cardOffset+this.currentScroll.x, 0, 0]
            // });
            image.setStyle('-webkit-transform', 'translate3d(' + cardOffset+this.currentScroll.x + 'px, 0px, 0px) skewY(5deg)');
        }
    },

    onDragEnd : function(e, t) {
        var deltaOffset = e.deltaX,
            previousDelta = e.previousDeltaX;
            
        // We have gone to the right
        // if (deltaOffset < 0 && Math.abs(deltaOffset) > 3 && previousDelta <= 0 && this.layout.getNext()) {
            // this.next();
        // }
        // // We have gone to the left
        // else if (deltaOffset > 0 && Math.abs(deltaOffset) > 3 && previousDelta >= 0 && this.layout.getPrev()) {
            // this.prev();
        // }
        // else {
            // // drag back to current active card
            // this.scrollToCard(this.layout.activeItem);
        // }
    },

    onTransitionEnd : function(e, t) {
        this.customDrag = false;
        this.currentScroll = {x: 0, y: 0};
        // if (this.oldCard && this.layout.activeItem != this.oldCard) {
            // this.onCardSwitch(this.layout.activeItem, this.oldCard, this.items.indexOf(this.layout.activeItem), true);
        // }
        // delete this.oldCard;
    }
});

// }}}

// {{{ Register XType

Ext.reg('ux-coverflow', Ext.ux.CoverFlow);

// }}}
