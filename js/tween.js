jQuery(document).ready(function ($) {
    var $stage = $('.stage'),
      $intro1 = $('#intro'),
      $intro2 = $('#job'),
      $desc = $('#desc'),
      $nome = $('#nome'),
      $item1 = $('#item1'),
      $item2 = $('#item2'),
      $item3 = $('#item3'),
      $item4 = $('#item4'),
      $item5 = $('#item5'),
      $item6 = $('#item6'),
      $item7 = $('#item7'),
      $item8 = $('#item8'),
      $item9 = $('#item9');
      $item10 = $('#item10');
    $scroll = $('#scroll');
  
    // init controller
    var controller = new ScrollMagic.Controller();
  
    controller.scrollTo(200);
  
    // build timeline with animation tweens
    var scrollAnimation = new TimelineMax();
    scrollAnimation.set($stage, { autoAlpha: 1 })
  
  
      //.from($intro1, 5, { y: "-1250%", ease: Power1.easeInOut, delay: 0.75 }, "trans1")
      .to($intro2, 5, { opacity: "1", left: "0%", ease: Power1.easeInOut, delay: 0.75 }, "trans1")
      .to($item9, 1, { transform: "scale(1)", opacity: "1", ease: Power3.easeInOut })
      //.to($item10, 1, { opacity: "1", top: "-190%", right: "5%", ease: Power2.easeInOut },  'trans1')
      .to($desc, 2, { opacity: "1", ease: Power2.easeInOut })
      .to($item4, 3, { transform: "scale(1)", ease: Power3.easeInOut })
      .to($item8, 3, { transform: "scale(1)", ease: Power3.easeInOut })
      .from($item5, 3, { transform: "scale(1)", ease: Power3.easeInOut })
      .to($item4, 1, { transform: "scale(0)", ease: Power3.easeInOut, delay: 10 })
      .to($item8, 1, { transform: "scale(0)", ease: Power3.easeInOut }, '-=1')




      .add("end", 8)
      .to($intro1, 6, { opacity: "0", ease: Power1.easeInOut, delay: 6 }, "end")
      .to($nome, 7, { opacity: "0", left: "-18%", ease: Power1.easeInOut, delay: 12 }, "end")
      .to($intro2, 7, { opacity: "0", top: "-200%", ease: Power1.easeInOut, delay: 12 }, "end")
      .to($desc, 7, { opacity: "0", top: "-160%", opacity: "0", ease: Power1.easeInOut, delay: 12 }, "end")
      .to($item3, 13, { opacity: "0", left: "-200%", ease: Power1.easeInOut, delay: 12 }, "end")
      .to($item4, 5, { opacity: "0", top: "-300%", ease: Power1.easeInOut, delay: 13 }, "end")
      .to($item9, 7, { opacity: "0", transform: "scale(0)", ease: Power3.easeInOut, delay: 12 }, "end")
      .to($item8, 7, { opacity: "0", transform: "scale(0)", ease: Power3.easeInOut, delay: 11 }, "end")
      .to($item7, 7, { opacity: "0", right: "130%", ease: Power3.easeInOut, delay: 13 }, "end")
      .to($item1, 10, { opacity: "0", top: "-460%", ease: Power3.easeInOut, delay: 12 }, "end")
      .to($item6, 7, { opacity: "0", left: "-130%", ease: Power3.easeInOut, delay: 10 }, "end")
      .to($item2, 7, { opacity: "0", ease: Power3.easeInOut, delay: 14 }, "end")
      .to($item10, 7, { opacity: "0", top: "-390%", right: "50%", ease: Power3.easeInOut, delay: 11 }, "end")
      .to($scroll, 7, { opacity: "0", ease: Power3.easeInOut, delay: 13 }, "end")
  
    // build scene and link scrolling to animation
    var scene = new ScrollMagic.Scene({ triggerElement: "#main", duration: 2000 , triggerHook: 0,})
      .setPin(".stage" , {pushFollowers: true})
      .addTo(controller)
      .setTween(scrollAnimation);
    scene.offset(0);
  });


  $(window).scroll(function() {

    var startDistance = 0;    
      var scrollTop = $(document).scrollTop();           
      var scrollAmount = $(window).scrollTop();
      var documentHeight = $(document).height();
   
      // calculate the percentage the user has scrolled down the page
      var scrollPercent = (scrollAmount / documentHeight) * 100;    
      
      if (scrollTop > 50) {
          $('.bar-long').css('height', scrollPercent +"%"  );
      } else {
          $('.bar-long').css('height', startDistance);
      }
      
      console.log (scrollPercent)
      
  
  });