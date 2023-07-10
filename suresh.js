// Custom JavaScript for the portfolio

// Smooth scrolling
$('a[href*="#"]').on('click', function (e) {
  e.preventDefault();

  $('html, body').animate({
    scrollTop: $($(this).attr('href')).offset().top
  }, 500, 'linear');
});

// Form submission
$('form').on('submit', function (e) {
  e.preventDefault();

  // Perform form validation here

  // Submit the form using AJAX or perform any other desired action
  // For example, you can display a success message

  alert('Message sent successfully!');
});
