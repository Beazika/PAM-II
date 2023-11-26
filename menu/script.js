document.getElementById('submitButton').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    if (username.trim() === '' || password.trim() === '') {
      alert('Por favor, preencha todos os campos.');
    } else {
      const message = `Login: ${username}\nSenha: ${password}`;
      alert(message);
    }
  });
  