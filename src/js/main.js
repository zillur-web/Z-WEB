
// PreeLoader Java Script
var preloader = document.getElementsByClassName("loader-warper")[0];
function preloaderfun(){
    preloader.style.display = "none";
};
// sticky-menu
window.addEventListener("scroll", function() {
    var nav = document.querySelector("nav");
    nav.classList.toggle("nav-scroll", window.scrollY > 0);
        
});
// Banner Text
// ES6 Class
class TypeWriter {
    constructor(txtElement, words, wait = 5000) {
      this.txtElement = txtElement;
      this.words = words;
      this.txt = '';
      this.wordIndex = 0;
      this.wait = parseInt(wait, 10);
      this.type();
      this.isDeleting = false;
    }
  
    type() {
      // Current index of word
      const current = this.wordIndex % this.words.length;
      // Get full text of current word
      const fullTxt = this.words[current];
  
      // Check if deleting
      if(this.isDeleting) {
        // Remove char
        this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
        // Add char
        this.txt = fullTxt.substring(0, this.txt.length + 1);
      }
  
      // Insert txt into element
      this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
  
      // Initial Type Speed
      let typeSpeed = 100;
  
      if(this.isDeleting) {
        typeSpeed /= 2;
      }
  
      // If word is complete
      if(!this.isDeleting && this.txt === fullTxt) {
        // Make pause at end
        typeSpeed = this.wait;
        // Set delete to true
        this.isDeleting = true;
      } else if(this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        // Move to next word
        this.wordIndex++;
        // Pause before start typing
        typeSpeed = 100;
      }
  
      setTimeout(() => this.type(), typeSpeed);
    }
  }
  
  
  // Init On DOM Load
  document.addEventListener('DOMContentLoaded', init);
  
  // Init App
  function init() {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    // Init TypeWriter
    new TypeWriter(txtElement, words, wait);
  };

/*Wow Js*/
wow = new WOW({
  animateClass: 'animated',
  offset: 100
});
wow.init();

/* ===============================  isotope Masonery  =============================== */

// init Isotope
var $grid = $('.portfolio-items').isotope({
  // options
});
// filter items on li click
$('.filter-menu').on( 'click', 'li', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});
// filter items on li Active
$('.filter-menu').on( 'click', 'li', function() {
  $(this).addClass('active').siblings().removeClass('active');
});
  
/* ===============================  Testimonials  =============================== */
 /* ===============================  slick Carousel  =============================== */

 $('.slick-track').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  arrows: true,
  prevArrow: '.testimonials .prev',
  nextArrow: '.testimonials .next',
  dots: false,
  draggable: true,
  autoplay: true,
  responsive: [
      {
          breakpoint: 1024,
          settings: {
              slidesToShow: 1,
              centerMode: false,
          }
      },
      {
          breakpoint: 767,
          settings: {
              slidesToShow: 1,
              centerMode: false,
          }
      },
      {
          breakpoint: 480,
          settings: {
              slidesToShow: 1,
              centerMode: false,
          }
      }
  ]
});
/* ===============================  About Testimonials  =============================== */
 /* ===============================  slick Carousel  =============================== */

 $('.about-slick-track').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  arrows: false
  
});
		
 /* =============================== Skills Progress Bar  =============================== */

 $(function() {

  $(".progress").each(function() {

    var value = $(this).attr('data-value');
    var left = $(this).find('.progress-left .progress-bar');
    var right = $(this).find('.progress-right .progress-bar');

    if (value > 0) {
      if (value <= 50) {
        right.css('transform', 'rotate(' + percentageToDegrees(value) + 'deg)')
      } else {
        right.css('transform', 'rotate(180deg)')
        left.css('transform', 'rotate(' + percentageToDegrees(value - 50) + 'deg)')
      }
    }

  })

  function percentageToDegrees(percentage) {

    return percentage / 100 * 360

  }

});

/* ===============================  tooltip  =============================== */

$('[data-tooltip-tit]').hover(function () {
  $('<div class="div-tooltip-tit"></div>').text($(this).attr('data-tooltip-tit')).appendTo('body').fadeIn('slow');
}, function () {
  $('.div-tooltip-tit').remove();
}).mousemove(function (e) {
  $('.div-tooltip-tit').css({ top: e.pageY + 10, left: e.pageX + 20 })
});
$('[data-tooltip-sub]').hover(function () {
  $('<div class="div-tooltip-sub"></div>').text($(this).attr('data-tooltip-sub')).appendTo('body').fadeIn('slow');
}, function () {
  $('.div-tooltip-sub').remove();
}).mousemove(function (e) {
  $('.div-tooltip-sub').css({ top: e.pageY + (-15), left: e.pageX + 30 })
});
