document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.contact-form');
  const nameInput = form.querySelector('input[type="text"]:first-of-type');
  const surnameInput = form.querySelector('input[type="text"]:nth-of-type(2)');
  const emailInput = form.querySelector('input[type="email"]');
  const messageInput = form.querySelector('textarea');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!nameInput.value.trim()) {
      alert("Please enter your name.");
      nameInput.focus();
      return;
    }
    if (!surnameInput.value.trim()) {
      alert("Please enter your surname.");
      surnameInput.focus();
      return;
    }
    if (!emailInput.value.trim() || !emailInput.value.includes("@")) {
      alert("Please enter a valid email.");
      emailInput.focus();
      return;
    }
    if (!messageInput.value.trim()) {
      alert("Please type your inquiry.");
      messageInput.focus();
      return;
    }

    alert("Thank you! Your inquiry has been submitted.");
    
    
    nameInput.value = "";
    surnameInput.value = "";
    emailInput.value = "";
    messageInput.value = "";
  });
});
