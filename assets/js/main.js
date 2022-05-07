const menuToggler = document.querySelector(".mobile-navbar");

menuToggler.addEventListener("click", () => {
  const headerMenu = document.querySelector("ul.header--menu");
  const navIcon = document.querySelectorAll(".navIcon");

  headerMenu.classList.toggle("show");

  navIcon.forEach((icon) => {
    icon.classList.toggle("d-none");
  });
});

(function () {
  const headerDOM = document.getElementById("header");
  const navTopOffSet = headerDOM.clientHeight + 100;

  window.addEventListener("scroll", () => {
    let scroll = window.pageYOffset || document.documentElement.scrollTop;
    if (scroll >= navTopOffSet) {
      headerDOM.classList.add("header-fixed");
    } else {
      headerDOM.classList.remove("header-fixed");
    }
  });
})();

function headerMenuActive() {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".header--menu__item>a");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (pageYOffset >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute("id");
      }
    });
    navLinks.forEach((li) => {
      li.classList.remove("active");
      if (current == li.getAttribute("href").split("#")[1]) {
        li.classList.add("active");
      }
    });
  });
}
headerMenuActive();
