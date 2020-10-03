// Code for the navigation bar's style when user scrolls to the 'History' section of th page.
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var historySection = document.getElementById("history");
var teamSection = document.getElementById("team");
var historySectionOffset = historySection.offsetTop - 120;
var teamSectionOffset = teamSection.offsetTop - 125;
var logoText = document.querySelector(".logo-text");
var linksContainer = document.querySelector(".collapse");
var navLinks = document.querySelectorAll(".nav-link");

function myFunction() {
  if (window.pageYOffset >= historySectionOffset) {
    navbar.classList.add("sticky-navbar");
    logoText.style.visibility = 'visible';
    linksContainer.style.backgroundColor = 'white';
    navLinks.forEach(function(item) {
      item.style.color = 'rgb(56, 68, 99)';
      } 
    )
  } else {
    navbar.classList.remove("sticky-navbar");
    logoText.style.visibility = 'hidden';
    linksContainer.style.backgroundColor = '';
    navLinks.forEach(function(item) {
      item.style.color = 'white';
      } 
    )
  }
}


// jQuery code that sets properties for the 'Slick' carousel plugin.
$(document).ready(function(){
  $('.carousel-section').slick({
    dots: true,
    arrows: false,
    centerMode: true,
    slidesToShow: 1.5,
    slidesToScroll: 2,
    centerPadding: '20%',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '10%'
        }
      }
    ]
  });
});

// jQuery code for adding active styling to the mountain schedule links.
$('.schedule-link').on('click', function(){
  $('a').removeClass('active');
  $(this).addClass('active');

  $('.mountain-schedule').css('display', 'none');
  if($(this).text() === "MOUNTAIN 1") {
    $('#mountain-schedule1').css('display', 'block');
  } else if ($(this).text() === "MOUNTAIN 2") {
    $('#mountain-schedule2').css('display', 'block');
  }
});

