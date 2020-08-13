jQuery(document).ready(function ($) {
    var $stage = $('.stage'),
      $intro1 = $('#_01'),
      $intro2 = $('#_02'),
      $intro3 = $('#_03'),
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
  
    
      .from($intro1, 1, {  width: "480px", ease:Power4.easeInOut, delay: 0 }, "trans1")
      .from($intro2, 3, {  width: "480px", ease:Power4.easeInOut, delay: 1 }, "trans1")
      .from($intro3, 5, {  width: "480px", ease:Power4.easeInOut, delay: 1.8 }, "trans1")

       .add("end", 8)


      .to($intro1, 6, { opacity: "0", ease: Power1.easeInOut, delay: 6 }, "end")
      .to($intro2, 6, { opacity: "0", ease: Power1.easeInOut, delay: 6 }, "end")
      .to($intro3, 6, { opacity: "0", ease: Power1.easeInOut, delay: 6 }, "end")
      .to(".AnimTextEloise", 6, { opacity: "0", ease: Power1.easeInOut, delay: 6 }, "end")
      .to(".AnimTextJob", 6, { opacity: "0", ease: Power1.easeInOut, delay: 6 }, "end")
      .to(".AnimDesc", 6, { opacity: "0", ease: Power1.easeInOut, delay: 6 }, "end")

      .to($item1, 6, { left: "-160%", top: "-370%", ease: Power1.easeInOut, delay: 8 }, "end")
      .to($item2, 6, { opacity: "0", ease: Power1.easeInOut, delay: 9 }, "end")
      .to($item3, 6, { bottom: "340%", ease: Power1.easeInOut, delay: 7 }, "end")
      .to($item4, 6, { top: "-450%", ease: Power1.easeInOut, delay: 8 }, "end")
      .to($item5, 6, { top: "-550%", ease: Power1.easeInOut, delay: 6 }, "end")
      .to($item6, 6, { opacity: "0", transform: "scale(0)", ease: Power1.easeInOut, delay: 7 }, "end")
      .to($item7, 6, { opacity: "0", ease: Power1.easeInOut, delay: 8 }, "end")
      .to($item8, 6, { bottom: "300%", ease: Power1.easeInOut, delay: 9 }, "end")
      .to($item9, 6, { opacity: "0", top: "-210%", ease: Power1.easeInOut, delay: 7 }, "end")
      .to($item10, 6, { opacity: "0", ease: Power1.easeInOut, delay: 8 }, "end")
      .to($scroll, 6, { opacity: "0", ease: Power3.easeInOut, delay: 7 }, "end")
  
    // build scene and link scrolling to animation
    var scene = new ScrollMagic.Scene({ triggerElement: "#main", duration: 2000 , triggerHook: 0})
      .setPin(".stage" , {pushFollowers: true})
      .addTo(controller)
      .setTween(scrollAnimation);
    scene.offset(-1);
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
      
      if (scrollPercent > 28) {
        $('.menu-link img').css({ 'filter' : 'invert(100%)'});
       
      } else {
        $('.menu-link img').css({ 'filter' : 'invert(0%)' });
      }
  
  });      