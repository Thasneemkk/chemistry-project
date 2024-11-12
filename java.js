document.addEventListener("DOMContentLoaded", () => {
    // Smooth Scroll for Navigation Links
    document.querySelectorAll("header nav ul li a").forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
        });
      });
    });
  });