const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");
  const wrapper = document.querySelector("body > div");

  //Toggle nav
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    wrapper.classList.toggle("scroll-toggle");

    //animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 3 + 0.7
        }s`;
      }
    });

    //burger animation
    burger.classList.toggle("toggle");
  });
};

navSlide();
