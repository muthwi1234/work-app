const loginBtn = document.getElementById('login-btn');
const errorMessage = document.getElementById('message');

loginBtn.addEventListener('click', (event) => {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username === 'worker' && password === 'password') {
    localStorage.setItem('isLoggedIn', true);
    window.location.href = 'home.html';
  } else {
    errorMessage.innerHTML = 'Invalid username or password';
  }
});
