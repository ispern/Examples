Ext.override(Ext.chart.CartesianChart, {
    setXAxis: function(value){
        var xAxis = this.createAxis('xAxis', value);
        this.swf.setHorizontalAxis(xAxis);
    },
    setYAxis: function(value){
        var yAxis = this.createAxis('yAxis', value);
        this.swf.setVerticalAxis(yAxis);
    }
});
