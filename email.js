document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form[data-form-type="formoid"]');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData();
    const email = form.querySelector('input[name="email"]').value;
    formData.append('email', email);

    fetch('https://h6gve5l5ajp4xvv6e7cmxjbepa0okysb.lambda-url.sa-east-1.on.aws/', {
      method: 'POST',
      body: formData
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Error: ' + response.status);
      }

      form.querySelector('[data-form-alert]').removeAttribute('hidden');
      form.reset();
    })
    .catch(error => {
      console.error(error);
      form.querySelector('[data-form-alert-danger]').removeAttribute('hidden');
    });
  });
});
