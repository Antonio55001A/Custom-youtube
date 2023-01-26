$(".carousel").owlCarousel({
    margin: 10,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
      0:{
        items:3,
        nav: false
      },
      600:{
        items:5,
        nav: false
      },
      1000:{
        items:7,
        nav: false
      }
    }
  });