jQuery.fn.enter = function (callback) {
    this.keypress(function(e) {
        if (e.which == jQuery.keyCode.ENTER) {
            callback(e);
        }
    });
    return this;
};