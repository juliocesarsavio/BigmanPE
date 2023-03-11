// seleciona o formulário
const form = document.querySelector('form');

// adiciona um listener de evento para quando o formulário for enviado
form.addEventListener('submit', (event) => {
  // impede que o formulário seja enviado pelo navegador
  event.preventDefault();

  // cria uma instância do objeto XMLHttpRequest
  const xhr = new XMLHttpRequest();

  // define a URL do endpoint de destino
  const url = 'https://h6gve5l5ajp4xvv6e7cmxjbepa0okysb.lambda-url.sa-east-1.on.aws/';

  // define o método HTTP como POST
  const method = 'POST';

  // define os dados que serão enviados no corpo da requisição
  const data = new FormData(form);

  // abre a conexão com o endpoint de destino
  xhr.open(method, url);

  // define o cabeçalho da requisição com o tipo de conteúdo enviado
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

  // adiciona um listener de evento para quando a requisição for concluída
  xhr.addEventListener('load', () => {
    // exibe a resposta recebida no console
    console.log(xhr.responseText);
  });

  // envia a requisição com os dados do formulário
  xhr.send(data);
});