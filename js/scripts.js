$(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
        $('.navbar-scroll').addClass('navbar-scrolled');
    } else {
        $('.navbar-scroll').removeClass('navbar-scrolled');
    }
});
