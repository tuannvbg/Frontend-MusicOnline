$(document).ready(function() {
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items: 2,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        stagePadding:0,
        mergeFit:true,
        dots:true,//hien thi dots cham dieu huong o phia duoi slide
        lazyLoadEager:4,
        autoHeight:true
    });
    $('.play').on('click', function() {
        owl.trigger('play.owl.autoplay', [1000])
    })
    $('.stop').on('click', function() {
        owl.trigger('stop.owl.autoplay')
    })
})
