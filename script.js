// window.addEventListener("load", function () {
//   document.body.classList.add("loaded");
// });

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 3 seconds
}

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-60px";
  }
  prevScrollpos = currentScrollPos;
};

$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
  });
  // toggle menu/navbar
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  // typing animation script
  var typed = new Typed(".typing", {
    strings: [
      "Sneakers",
      "Shoes",
      "Premium Quality Shoes",
      "Unbeatable Prices!",
      "Premium Quality Shoes",
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });
  var typed = new Typed(".typing-2", {
    strings: ["We sell Premium Quality Shoes at Unbeatable Prices!"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });
  // owl carousel script
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeout: 7000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
  // animation on scroll
  AOS.init();
});
/*-----------------close nav when clicking on a  nav item------------*/
document.addEventListener("click", function (e) {
  if (e.target.closest(".menu")) {
    toggleNav();
  }
});
// hash remover from tab

document.addEventListener("DOMContentLoaded", () => {
  // Detect hash changes
  window.addEventListener("hashchange", () => {
    // Use history.replaceState to remove the hash from the URL
    history.replaceState(
      null,
      document.title,
      window.location.pathname + window.location.search
    );
  });

  // Optionally remove the hash when the page loads
  if (window.location.hash) {
    history.replaceState(
      null,
      document.title,
      window.location.pathname + window.location.search
    );
  }
});
