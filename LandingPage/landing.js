
  // Smooth scroll to anchor links
  const navLinks = document.querySelectorAll("nav ul li a");

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetElementId = link.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetElementId);
      const offsetTop = targetElement.getBoundingClientRect().top;
      const scrollOptions = {
        behavior: "smooth",
        block: "start",
      };
      window.scrollBy({
        top: offsetTop,
        left: 0,
        behavior: "smooth",
      });
    });
  });


