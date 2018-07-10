 $('.navbar').css("padding-top", "50px");

 var lockNav = false;
 var lockScroll = false;

 window.onscroll = function () {
     scrollFunction()
 }

 function scrollFunction() {
     if ($(window).scrollTop() > 20) {
         lockScroll = true;
         $('#navigationbg').addClass("bg-orange");
         $('#logo').attr("src","img/andglobal2.svg");
         $('.navbar').css("padding-top", "5px");

     } else {
         lockScroll = false;
         if (!lockNav)
             $('#navigationbg').removeClass("bg-orange");
         $('#logo').attr("src","img/andglobal.svg");
         $('.navbar').css("padding-top", "50px");
     }
 }



 $(".navbar-toggler").on("click", function () {
     if ($(".navbar-toggler").attr("aria-expanded") === "false") {
         lockNav = true;
         $('#navigationbg').addClass("bg-orange");
     } else {
         lockNav = false;
         if (!lockScroll)
             $('#navigationbg').removeClass("bg-orange");
     }
 });

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .not('a[href*="#collapse"]')
  .not('a[href*="#carouselExampleIndicators"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });