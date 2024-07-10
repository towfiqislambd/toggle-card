$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items:3,
    margin:15,
    autoplay:true,
    autoplayHoverPause:true,
    responsive: {
      0 : {
        items:1
      },
      968 : {
        items:2
      },
      1140 : {
        items: 3
      }
    }
  });
})
