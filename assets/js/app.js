var swiper = new Swiper(".logo_slider", {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 30,
  loopedSlides: 4,
  autoplay: {
    delay: 2000,
  },
  breakpoints: {
    
    500: {
      slidesPerView: 3, 
    },
    1024: {
      slidesPerView: 4, // for large screens
    },
  },
});

var swiper = new Swiper(".programs-slider", {
  loop: true,
  spaceBetween: 50,
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
});


$(document).ready(function() {
    $('.nav-menu li a').click(function() {
      $('.nav-menu li a').removeClass('active');
      $(this).addClass('active');
    });
  });



  $(document).ready(function() {
    $("#openNav").click(function() {
      $("#myDiv").addClass("active");
    });
  });

  $(document).ready(function() {
    $("#closeNav").click(function() {
      $("#myDiv").removeClass("active");
    });
  });

  $(document).ready(function() {
    $(".nav-menu li a").click(function() {
      $("#myDiv").removeClass("active");
    });
  });


  $(document).on('scroll', function() {
    var scrollTop = $(this).scrollTop();
    if (scrollTop > 0) {
      $('.navigation-wrapper').addClass('scrolled');
    } else {
      $('.navigation-wrapper').removeClass('scrolled');
    }
  });