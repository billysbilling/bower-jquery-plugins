jQuery.fn.enter = function (callback) {
    var isDown = false;
    
    this.keypress(function(e) {
        if (!isDown && e.which === jQuery.keyCode.ENTER) {
            isDown = true;
            callback(e);
        }
    });
    
    this.keyup(function(e) {
        if (e.which === jQuery.keyCode.ENTER) {
            isDown = false;
        }
    });
    return this;
};