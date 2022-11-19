 $(function() {
     $(window).on('scroll', function() {
         if ($(window).scrollTop() > 10) {
             $('.navbar').addClass('active');
         } else {
             $('.navbar').removeClass('active');
         }
     });
 });
 // $(document).ready(function(){
 //     $(window).scroll(function(){
 //         if($(window).scrollTop() > $(window).height()){
 //             $(".menu").css({"background-color":"transparent"});   
 //         }
 //         else{
 //             $(".menu").css({"background-color":"white"});
 //         }

 //     })
 // })
 $(window).scroll(function() {
     $('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
 });