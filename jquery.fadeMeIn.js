/*
 * May 2015
 * fadeMeIn 1.0.0
 * @author Mario Vidov
 * @url http://vidov.it
 * @twitter MarioVidov
 * MIT license
 */
$.fn.fadeMeIn = function(options) {
    var settings = $.extend({
        duration: 400,
        easing: "swing",
        random: true,
        min: 100,
        max: 1000
    }, options);

    var self = this,
        selector = this.selector,
        duration;

    this.getRandomNumber = function(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }

    $(selector).hide();

    if (!$.easing.hasOwnProperty(settings.easing)) {
        settings.easing = "swing";
    }

    $.each($(selector), function(i, el) {

        if (settings.random === true) {
            duration = self.getRandomNumber(settings.min, settings.max);
        }
        else {
            duration = settings.duration;
        }

        $(el).fadeIn({
            duration: duration,
            easing: settings.easing
        });
    });
}