// encontre o formulário na página
const form = document.querySelector('form');

// adicione um ouvinte de eventos para o envio do formulário
form.addEventListener('submit', (event) => {
  // impedir que o formulário seja enviado diretamente
  event.preventDefault();

  // obter o valor do campo de e-mail
  const emailInput = document.querySelector('input[name="email"]');
  const emailValue = emailInput.value;

  // criar um objeto de dados a ser enviado com o POST
  const data = {
    email: emailValue
  };

  // configurar a solicitação de POST
  const options = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  };

  // fazer a solicitação de POST
  fetch('https://h6gve5l5ajp4xvv6e7cmxjbepa0okysb.lambda-url.sa-east-1.on.aws/', options)
    .then(response => {
      // verificar se a resposta é bem-sucedida
      if (!response.ok) {
        throw new Error('Ocorreu um erro ao enviar o formulário.');
      }

      // mostrar uma mensagem de sucesso ao usuário
      const successAlert = document.querySelector('[data-form-alert]');
      successAlert.style.display = 'block';
    })
    .catch(error => {
      // mostrar uma mensagem de erro ao usuário
      const errorAlert = document.querySelector('[data-form-alert-danger]');
      errorAlert.style.display = 'block';
    });
});
