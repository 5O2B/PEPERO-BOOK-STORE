$(document).ready(function(){

    const swiper = new Swiper('.swiper-container', {
        // Optional parameters       
        loop: true,
        speed: 400,
        spaceBetween: 100,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
      });
});

