// search bar
$(".search").on("click",function(){
  $(".search-bar").addClass("search-bar-active")
});

$(".search-cancel").on("click",function(){
  $(".search-bar").removeClass("search-bar-active")
});
 // sign-in and log-in
$(document).on("click",".user,.already-account",function(){
  $(".form").addClass("login-active").removeClass("sign-up-active")
});

$(document).on("click",".sign-up-btn, .register",function(){
  $(".form").addClass("sign-up-active").removeClass("login-active")
});


$(document).on("click",".form-cancel",function(){
  $(".form").removeClass("login-active").removeClass("sign-up-active")
});



// grid system
$(document).ready(function(){
    $(".col-sm").mouseenter(function(){
       $("img ").css("size","1ex");
       $("img ").css("size","1ex");
       $(this).css("border","1px solid orange");
       });
     $(".col-sm").mouseleave(function(){
           $("img p").css("font-size","1em");
           $("img p").css("font-size","1em");
           $(this).css("border","2px rgb(253, 253, 253)");
           }); 
     });


window.addEventListener('DOMContentLoaded', (event) => {
  jQuery('nav').css("background-color", "rgba(247, 196, 94 )");
  jQuery(window).scroll(function() {
      if (jQuery(window).scrollTop() > 0) {
          jQuery('nav').css("background-color", "rgba(247, 196, 94 , 0.8");              
      } else {
          jQuery('nav').css("background-color", "rgba(247, 196, 94)");
      }
  });
}); 

$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  autoplay:true,
  nav:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:5
      }
  }
})



 $(function () {
   var kuchb = $("#logo");
 $(window).scroll(function () {
     var scroll = $(window).scrollTop();

    if (scroll >= 100) {
        kuchb.removeClass('before-scroll')
                .addClass("after-scroll");
    } else {
       kuchb.removeClass("after-scroll")
                  .addClass('before-scroll');
  }
   });
   });