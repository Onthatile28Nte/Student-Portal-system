document.addEventListener('DOMContentLoaded', () => {
  const nameInput = document.querySelector('.name-info');
  const surnameInput = document.querySelector('.surname-info');
  const ageInput = document.querySelector('.age');
  const usernameInput = document.querySelector('.username-info');
  const passwordInput = document.querySelector('.password-info');
  const editBtn = document.querySelector('.edit-info');

  const savedInfo = JSON.parse(localStorage.getItem('personalInfo')) || {};
  if (savedInfo.name) nameInput.value = savedInfo.name;
  if (savedInfo.surname) surnameInput.value = savedInfo.surname;
  if (savedInfo.age) ageInput.value = savedInfo.age;
  if (savedInfo.username) usernameInput.value = savedInfo.username;
  if (savedInfo.password) passwordInput.value = savedInfo.password;

  let isEditing = false;
  editBtn.addEventListener('click', () => {
    isEditing = !isEditing;

    [nameInput, surnameInput, ageInput, passwordInput].forEach(input => {
      input.readOnly = !isEditing;
      input.style.border = isEditing ? '1px solid #0d6efd' : 'none';
      input.style.backgroundColor = isEditing ? '#fff' : '#f5f5f5';
    });

    editBtn.textContent = isEditing ? 'Save Info' : 'Edit Info';

    if (!isEditing) {
      const personalInfo = {
        name: nameInput.value,
        surname: surnameInput.value,
        age: ageInput.value,
        username: usernameInput.value,
        password: passwordInput.value
      };
      localStorage.setItem('personalInfo', JSON.stringify(personalInfo));
      alert('Personal information saved!');
    }
  });
});
