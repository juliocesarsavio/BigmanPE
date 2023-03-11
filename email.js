document.addEventListener('DOMContentLoaded', function() {
  var form = document.querySelector('form');
  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o comportamento de envio padrão do formulário
    var email = form.querySelector('input[name="email"]').value; // Obtém o valor do email
    // Faz uma solicitação POST para o servidor com os dados do email e subscribed
    fetch('https://h6gve5l5ajp4xvv6e7cmxjbepa0okysb.lambda-url.sa-east-1.on.aws/', {
      method: 'POST',
      body: JSON.stringify({ email: email, subscribed: true }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(function(response) {
      // Lida com a resposta aqui
      console.log(response);
    }).catch(function(error) {
      // Lida com o erro aqui
      console.log(error);
    });
  });
});
