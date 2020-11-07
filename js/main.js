$(document).ready(function(){
    $('.fade').slick({
        slidesToShow: 1,
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        responsive: [
        {
            breakpoint: 768,
            settings: {
            dots: true,
            arrows: false,
            slidesToShow: 1
            }
        }
        ]
    });
});


$('.slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
    {
        breakpoint: 1024,
        settings: {
            dots: true,
            arrows: false,
            slidesToShow: 3
        }
    },
    {
        breakpoint: 768,
        settings: {
            dots: true,
            arrows: false,
            slidesToShow: 2
        }
    },
    {
        breakpoint: 576,
        settings: {
        slidesToShow: 1,
        dots: true,
        arrows: false
        }
    }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
});
