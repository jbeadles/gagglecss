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

        // Window resize events
        $(window).on("resize", function () {
            W = window.innerWidth || $(window).width();
            checkWidthAndAddMobileClass(W);
            stickyFooter();
        });

        // Functions
        function checkWidthAndAddMobileClass() {
            var W = window.innerWidth || $(window).width(),
                $page = $(".page");

            if (W <= 480) {
                $page.addClass("mobile");
            }

            if (W > 480 && $page.hasClass("mobile")) {
                $page.removeClass("mobile");
            }
        };

        function stickyFooter() {
            if ($(".page").hasClass("mobile")) { return false; }

            var footerHeight = $("#footer").outerHeight(),
                push = $(".push").height(footerHeight);

            $(".page").css({ "marginBottom": "-" + footerHeight + "px" });
        }

        // Initalizations
        checkWidthAndAddMobileClass();
        stickyFooter();

  });
})(jQuery);
