(function($) {
    $(function() {
        var $toggleText = $('#menu-toggle').text();
        $('#menu-toggle').click(function() {
            $('#main-menu').slideToggle();
            $(this).toggleClass('active');
            if ($(this).text() === $toggleText) {
                $(this).text('Close');
            } else {
                $(this).text($toggleText);
            }
        });

        // Set class on body for window width <= 480px
        var W = window.innerWidth || $(window).width(),
            page = $(".page");

        // Set on initial load
        checkWidthAndAddMobileClass(W);

        $(window).on("resize", function () {
            W = $(window).width();
            checkWidthAndAddMobileClass(W);
        });

        function checkWidthAndAddMobileClass(width) {
            if (width <= 480) {
                page.addClass("mobile");
            }

            if (width > 480 && page.hasClass("mobile")) {
                page.removeClass("mobile");
            }
        };
  });
})(jQuery);
