// Form submission
$('form').on('submit', function (e) {
  e.preventDefault();

  // Form validation
  var name = $('#name').val();
  var email = $('#email').val();
  var message = $('#message').val();

  if (name === '') {
    alert('Please enter your name.');
    return;
  }

  if (email === '') {
    alert('Please enter your email.');
    return;
  }

  if (!validateEmail(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  if (message === '') {
    alert('Please enter a message.');
    return;
  }

  // Submit the form using AJAX or perform any other desired action
  // For example, you can display a success message

  alert('Message sent successfully!');
});

// Email validation function
function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}
