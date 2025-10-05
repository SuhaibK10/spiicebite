/*
 * Small helper script for the Spiice Bite website.  At present
 * this script simply prevents the contact form from submitting so
 * that visitors don’t encounter errors on a static site.  If you
 * choose to connect the form to a backend later, remove the
 * listener or adjust its behaviour accordingly.
 */
document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Thank you for your message! Form submission is currently disabled on this demo site.');
    });
  }

  // Toggle display of ordering options when the user clicks the order button.
  const orderWrapper = document.querySelector('.order-wrapper');
  const orderButton = document.querySelector('.order-btn');
  if (orderWrapper && orderButton) {
    orderButton.addEventListener('click', function () {
      orderWrapper.classList.toggle('active');
    });
  }
});