  window.addEventListener("load", () => {
    document.body.classList.add("loaded");
  });

  document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector("nav");

    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });

    nav.querySelectorAll("a").forEach(link =>
      link.addEventListener("click", () => {
        nav.classList.remove("show");
      })
    );
  });
