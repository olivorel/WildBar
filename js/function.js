$(document).ready(function () {

// début partie navbar
    var affixElement = '#navbar-main';

    $(affixElement).affix({
        offset: {
            // Distance of between element and top page
            top: function () {
                return (this.top = $(affixElement).offset().top)
            },
            // when start #footer
            bottom: function () {
                return (this.bottom = $('#footer').outerHeight(true))
            }
        }
    });

    // Code pour animer les transitions des ancres
    $("a[href^=#s]").click(function (e) {
        e.preventDefault();
        var dest = $(this).attr('href');
        console.log(dest);
        $('html,body').animate({scrollTop: $(dest).offset().top}, 'slow');
    });
// fin partie navbar

// début partie menu burger
    //navbar closes when clicking outside
    $(document).click(function (e) {
        if (!$(e.target).is('a')) {
            $('.navbar-collapse').collapse('hide');
        }
    });
// fin partie menu burger

// début bouton go back to top
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('#goToTopBtn').fadeIn('slow');
        } else {
            $('#goToTopBtn').fadeOut('slow');
        }
    });
    $('#goToTopBtn').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 'slow');
    });
// fin bouton go back to top
});