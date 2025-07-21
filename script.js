// ===== Contact Form Validation =====
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent actual form submission

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all fields before submitting.");
    return;
  }

  // Show a success message
  alert("Thank you for reaching out, " + name + "! Your message has been sent.");

  // Clear the form
  this.reset();
});

// ===== Scroll-to-Top Button =====
const scrollBtn = document.getElementById("scrollTopBtn");

// Show/hide scroll button based on scroll position
window.addEventListener("scroll", () => {
  scrollBtn.style.display =
    window.scrollY > 100 ? "block" : "none";
});

// Smooth scroll to top on click
scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
