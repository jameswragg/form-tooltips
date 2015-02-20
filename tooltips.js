/**
 * Tooltip toggler
 */
(function() {

    var MDGX = window['MDGX'] || {};

    MDGX.Tooltips = (function(){

        var Tooltips = {},
            className = 'hasfocus';


        function init(){
            console.time('Tooltips Init');

            $('input, textarea, select').each(function(el) {

                var $this = $(this),
                    $container = $(this).parents('.field').first(),
                    $tip = $container.find('.tooltip').eq(0),
                    availSpace;

                $this.on('focus', function(e) {
                    availSpace = $('body').width() - ($this.offset().left + $this.outerWidth());

                    // make sure the tip of the tip bubble actually sits on the top of the input
                    $tip.css('top', $this.position().top);
                    $container.addClass(className);

                })
                .on('blur', function(e) {
                    $container.removeClass(className);
                });

            });

            console.timeEnd('Tooltips Init');
        }

        $(document).on('app:load-complete', init);

        Tooltips.init = init;

        return Tooltips;
    })();

}());