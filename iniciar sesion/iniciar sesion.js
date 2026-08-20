document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');
  const passwordInput = document.getElementById('password');
  const togglePasswordBtn = document.getElementById('togglePassword');
  const errorMessage = document.getElementById('error-message');

  // Mostrar u ocultar la contraseña
  if (togglePasswordBtn) {
    togglePasswordBtn.addEventListener('click', () => {
      const isPassword = passwordInput.type === 'password';
      passwordInput.type = isPassword ? 'text' : 'password';
      togglePasswordBtn.textContent = isPassword ? '🙈' : '👁️';
    });
  }

  // Procesar el formulario de inicio de sesión
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = passwordInput.value.trim();

    errorMessage.style.display = 'none';

    if (username === '' || password === '') {
      showError('Por favor completa todos los campos.');
      return;
    }

    if (password.length < 4) {
      showError('La contraseña ingresada no es válida.');
      return;
    }

    // Guardar la sesión en localStorage
    localStorage.setItem('nombreUsuario', username);

    // Redirigir a la página principal
    window.location.href = '../index.html';
  });

  function showError(msg) {
    errorMessage.textContent = msg;
    errorMessage.style.display = 'block';
  }
});