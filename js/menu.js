document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle");
    const nav = document.getElementById("navbarNav");
  
    menuToggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  });
  