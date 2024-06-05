// Mobile menu
const initApp = () => {
    const hamburgerBtn = document.getElementById('hamburger-button');
    const mobileMenu = document.getElementById('mobile-menu');

    const toggleMenu = () => {
        mobileMenu.classList.toggle('hidden')
        mobileMenu.classList.toggle('flex')
    }

    hamburgerBtn.addEventListener('click', toggleMenu)
    mobileMenu.addEventListener('click', toggleMenu)
}

document.addEventListener('DOMContentLoaded', initApp);

// Get the contact form and success section elements
const contactForm = document.getElementById('contact-form');
const contactMeSuccess = document.getElementById('contactme-success');

// Add a submit event listener to the form
contactForm.addEventListener('submit', (e) => {
  // Prevent the default form submission behavior
  e.preventDefault();

  // Toggle the visibility of the success section
  contactMeSuccess.classList.toggle('hidden');

  contactForm.reset();
});