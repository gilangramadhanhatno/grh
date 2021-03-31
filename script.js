// Mobile Nav
const menuToggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector("nav ul");

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});

// Fix Nav
const navBar = document.querySelector("nav");
const navHeight = navBar.getBoundingClientRect().height;

window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;
  if (scrollHeight > navHeight) {
    navBar.classList.add("fix-nav");
  } else {
    navBar.classList.remove("fix-nav");
  }
});

// Scroll To
const links = [...document.querySelectorAll(".scroll-link")];

links.map((link) => {
  if (!link) return;
  link.addEventListener("cilck", (e) => {
    e.preventDefault();

    const id = e.target.getAttribute("href").slice(1);

    const el = document.getElementById(id);
    let position = el.offsetTop - navHeight;

    window.scrollTo({
      top: position,
      left: 0,
    });
  });
});

// GSAP
// gsap.from(".logo", { opacity: 0, duration: 1, delay: 0.5, y: -10 });
// gsap.from(".menu-toggle", { opacity: 0, duration: 1, delay: 1, x: 20 });
// gsap.from(".menu", { opacity: 0, duration: 1, delay: 1.5, x: 20 });
// gsap.from(".hero-img", { opacity: 0, duration: 1, delay: 2, x: 200 });
// gsap.from(".hero-img-cut", { opacity: 0, duration: 1, delay: 2, x: 200 });
// gsap.from(".hero-content h2", { opacity: 0, duration: 1, delay: 2.5, y: -50 });
// gsap.from(".hero-content p", { opacity: 0, duration: 1, delay: 3, y: -45 });
// gsap.from(".hero-content a", { opacity: 0, duration: 1, delay: 4, y: 50 });

// EVENT BUBLING/EVENT DELEGATION
const containerLeft = document.querySelector(".left");
const jumbo = document.querySelector(".jumbo");
const thumbs = document.querySelectorAll(".thumb");

containerLeft.addEventListener("click", (e) => {
  if ((e.target.className = "thumb")) {
    jumbo.src = e.target.src;
    jumbo.classList.add("fade");
    setTimeout(() => {
      jumbo.classList.remove("fade");
    }, 500);

    thumbs.forEach((thumb) => {
      // Ini Kalo dicek terlebih dahulu
      // if (thumb.classList.contains("active")) {
      //   thumb.classList.remove("active");
      // }

      // Paksa semua untuk ubah classnya jadi thumb
      thumb.className = "thumb";
    });

    e.target.classList.add("active");
  }
});
