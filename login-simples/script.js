const form = document.querySelector('#login-form');
const message = document.querySelector('#message');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Este exemplo apenas demonstra o formulário.
  const email = document.querySelector('#email').value.trim();
  message.textContent = `Formulário preenchido para ${email}. Esta tela ainda não verifica uma conta.`;
});

document.querySelector('#forgot-link').addEventListener('click', (event) => {
  event.preventDefault();
  message.textContent = 'Adicione aqui o fluxo de recuperação de senha do seu site.';
});

document.querySelector('#signup-link').addEventListener('click', (event) => {
  event.preventDefault();
  message.textContent = 'Adicione aqui a página de criação de conta.';
});
