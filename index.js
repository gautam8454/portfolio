// Function expression to select elements


const selectElement = (s) => document.querySelector(s);
// queryselector is use for selecting the first mentiond tag

const navLinks = document.querySelectorAll(".nav-link");
// queryselectorAll is use for selecting the all the mentiond tag

console.log(navLinks)

selectElement(".menu-icon").addEventListener("click", () => {
  // Toggle the nav on menu icon click
  selectElement(".nav-list").classList.toggle("active");
  //toggle means remove 

  // Animate Links
  navLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5
        }s`;
      console.log(index / 7 + 0.5)
    }
  });

  //Burger Animation
  selectElement(".menu-icon").classList.toggle("toggle");
});

//close navbar on nav link click

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    selectElement(".nav-list").classList.toggle("active");

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5
          }s`;
      }
    });

    selectElement(".menu-icon").classList.toggle("toggle");
  });
});

$(window).scroll(function() {
  if ($(this).scrollTop() > 100) {
    $('.scroll-up-btn').fadeIn();
  } else {
    $('.scroll-up-btn').fadeOut();
  }
});

// slide-up script
$('.scroll-up-btn').click(function(){
  $('html').animate({scrollTop: 0});
  // removing smooth scroll on slide-up button click
  $('html').css("scrollBehavior", "auto");
});

  // typing text animation script
  var typed = new Typed(".typing1", {
    strings: ["Developer", "Blogger", "Designer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });

  var typed = new Typed(".typing2", {
    strings: ["Developer", "Blogger", "Designer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });
