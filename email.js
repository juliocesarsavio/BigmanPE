document.addEventListener('DOMContentLoaded', function() {
  var form = document.querySelector('form');
  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    var email = form.querySelector('input[name="email"]').value; // Get the email value
    // Make a POST request to the server with the email data
    fetch('https://h6gve5l5ajp4xvv6e7cmxjbepa0okysb.lambda-url.sa-east-1.on.aws/', {
      method: 'POST',
      body: JSON.stringify({ email: email, subscribed: true }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(function(response) {
      // Handle the response here
      console.log(response);
    }).catch(function(error) {
      // Handle the error here
      console.log(error);
    });
  });
});
