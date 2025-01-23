document.addEventListener("DOMContentLoaded", () => {
    // Add fade-in effect on page load
    document.body.classList.add("loaded");
  
    const profileButton = document.querySelector(".btn[href='profile.html']");
  
    profileButton.addEventListener("click", (event) => {
      event.preventDefault();
  
      // Apply fade-out transition
      document.body.style.transition = "opacity 0.5s ease";
      document.body.style.opacity = "0";
  
      setTimeout(() => {
        window.location.href = "profile.html";
      }, 500);
    });
  });
  const toggleButton = document.getElementById("theme-toggle");
  toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
    