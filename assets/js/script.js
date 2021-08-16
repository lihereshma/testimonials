/* Author: Reshma Lihe*/

$(window).resize(function(){location.reload();});

// Check window size
$(document).ready(function(){  
  if (window.matchMedia('(max-width: 425px)').matches) {
    $('.review-container').addClass('tm-slider');
    tmSlider();
    tmAnimation();
    $('.review-container').removeClass('tm-wrap');
  }
  else {
    $('.review-container').removeClass('tm-slider');
    $('.review-container').addClass('tm-wrap');
    tmActiveUser();
  }
});

// Testimonials slider
function tmSlider() {
  $('.tm-slider').slick ({
  dots: true,
  arrows: false,
  });  
};

// Testimonials animation 
function tmAnimation() {
  $('.user-img').click(function(){
    $('.user-img').removeClass("active");
    $(this).addClass("active");
  });
};

// Active user
function tmActiveUser(){
  $('.img-box .user-img').click(function(e){
    e.stopPropagation();
    $('.img-box .user-img').removeClass('active');
    $(this).addClass('active');    
    var tab_id = $(this).attr('data-tab');
    $("#"+tab_id + ".quote").addClass('show');
    $("#"+tab_id + ".quote").removeClass('hide-bottom');
    $('.user-review').removeClass('current-user');  
    $("#"+tab_id).addClass('current-user');
  });
};