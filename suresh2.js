// Form submission
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();

  // Form validation
  var nameInput = document.getElementById('name');
  var emailInput = document.getElementById('email');
  var messageInput = document.getElementById('message');
  var errorContainer = document.getElementById('error-container');
  var errorMessage = '';

  if (nameInput.value.trim() === '') {
    errorMessage += 'Please enter your name.\n';
  }

  if (emailInput.value.trim() === '') {
    errorMessage += 'Please enter your email.\n';
  } else if (!validateEmail(emailInput.value.trim())) {
    errorMessage += 'Please enter a valid email address.\n';
  }

  if (messageInput.value.trim() === '') {
    errorMessage += 'Please enter a message.\n';
  }

  if (errorMessage !== '') {
    errorContainer.textContent = errorMessage;
  } else {
    // Submit the form using AJAX or perform any other desired action
    // For example, you can display a success message

    alert('Message sent successfully!');
    errorContainer.textContent =
