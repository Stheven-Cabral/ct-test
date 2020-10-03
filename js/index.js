// Code for changing Navbar style when scrolling to a specific section.
// window.onscroll = function() {myFunction()};

// var navbar = document.getElementById("navbar");
// var navbarChange = document.getElementById("mountains-text");
// var navbarChangeOffset = navbarChange.offsetTop;

// function myFunction() {
//   if (window.pageYOffset >= navBarChangeOffset) {
//     navbar.classList.add("sticky-navbar");
//   } else {
//     navbar.classList.remove("sticky-navbar");
//   }
// }

window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var historySection = document.getElementById("history");
var teamSection = document.getElementById("team");
var historySectionOffset = historySection.offsetTop - 25;
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
      item.style.color = 'rgb(112, 112, 112)';
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

$(document).on("tap", function(){
  myFunction();
});

// jQuery for responsive carousel feature
$(document).ready(function(){
  $('.carousel-section').slick({
    dots: true,
    infinte: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true
  });
});