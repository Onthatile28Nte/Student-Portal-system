document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');
  const username = document.getElementById('username');
  const password = document.getElementById('password');
  const spanLogin = document.getElementById('spanLogin');
  const spanPassword = document.getElementById('spanPassword');

  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem('usersDB')) || [];

    spanLogin.innerText = '';
    spanPassword.innerText = '';

    if (username.value.trim() === '') {
      spanLogin.innerText = 'Please enter your username';
      return;
    }

    if (password.value.trim() === '') {
      spanPassword.innerText = 'Please enter your password';
      return;
    }

    const user = users.find(
      (u) => u.username === username.value && u.password === password.value
    );

    if (user) {
      alert('Login successful!');
      window.location.href = '/Admin/dashboard.html';
    } else {
      spanPassword.innerText = 'Invalid username or password';
    }
  });
});
