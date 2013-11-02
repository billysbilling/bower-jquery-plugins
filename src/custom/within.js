jQuery.Event.prototype.within = function(selector) {
    return ($(this.target).is(selector) || $(this.target).closest(selector).length != 0);
};