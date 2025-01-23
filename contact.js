const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if (!name || !email || !message) {
    alert("Please fill out all fields before submitting.");
    return;
  }

  alert("Message sent successfully! I'll get back to you soon.");
  form.reset(); // Clear the form
});
