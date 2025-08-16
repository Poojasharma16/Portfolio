// script.js - Add any interactivity here
document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert("Thank you for reaching out!");
});
  document.getElementById('gmailLink').addEventListener('click', function (e) {
    e.preventDefault();
    window.location.href = 'mailto:poojuu09876@gmail.com';
  });



