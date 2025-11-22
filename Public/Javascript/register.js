document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  const username = document.getElementById('username');
  const password = document.getElementById('password');
  const confirmPassword = document.getElementById('confirm-password');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem('usersDB')) || [];

    if (username.value.trim() === '') {
      alert('Please enter a username');
      return;
    }

    if (password.value.trim() === '') {
      alert('Please enter a password');
      return;
    }

    if (password.value !== confirmPassword.value) {
      alert('Passwords do not match');
      return;
    }

    const userExists = users.some((u) => u.username === username.value);
    if (userExists) {
      alert('Username already exists, choose another one');
      return;
    }

    users.push({ username: username.value, password: password.value });

    localStorage.setItem('usersDB', JSON.stringify(users));

    alert('Account created successfully! You can now log in.');

    window.location.href = '/Public/login.html';
  });
});
