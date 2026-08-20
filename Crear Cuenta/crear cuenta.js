<Crear-Cuenta
const form = document.getElementById('registerForm');
    const passwordInput = document.getElementById('password');
    const togglePasswordBtn = document.getElementById('togglePassword');
    const meter = document.getElementById('passwordStrength');
    const successMessage = document.getElementById('successMessage');

    // 1. Mostrar / Ocultar contraseÃ±a
    togglePasswordBtn.addEventListener('click', () => {
      const isPassword = passwordInput.type === 'password';
      passwordInput.type = isPassword ? 'text' : 'password';
      togglePasswordBtn.textContent = isPassword ? 'ðŸ™ˆ' : 'ðŸ‘ ï¸ ';
    });

    // 2. Medidor visual de fortaleza de contraseÃ±a
    passwordInput.addEventListener('input', () => {
      const val = passwordInput.value;
      let score = 0;

      if (val.length >= 6) score++;
      if (val.length >= 10) score++;
      if (/[A-Z]/.test(val) && /[0-9]/.test(val)) score++;
      if (/[^A-Za-z0-9]/.test(val)) score++;

      meter.value = score;
    });

    // 3. EnvÃ­o animado con estado de Ã©xito
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      // AnimaciÃ³n de desvanecimiento del formulario
      form.style.opacity = '0';
      
      setTimeout(() => {
        form.style.display = 'none';
        successMessage.style.display = 'block';
      }, 300);
    });
=======
document.addEventListener('DOMContentLoaded', () => {
  const registerForm = document.getElementById('registerForm');
  const passwordInput = document.getElementById('password');
  const confirmPasswordInput = document.getElementById('confirmPassword');
  const togglePasswordBtn = document.getElementById('togglePassword');
  const errorMessage = document.getElementById('error-message');

  // Alternar la visibilidad de la contraseña
  if (togglePasswordBtn) {
    togglePasswordBtn.addEventListener('click', () => {
      const isPassword = passwordInput.type === 'password';
      passwordInput.type = isPassword ? 'text' : 'password';
      togglePasswordBtn.textContent = isPassword ? '🙈' : '👁️';
    });
  }

  // Validaciones del registro
  registerForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = passwordInput.value.trim();
    const confirmPassword = confirmPasswordInput.value.trim();

    errorMessage.style.display = 'none';

    if (password !== confirmPassword) {
      showError('Las contraseñas no coinciden.');
      return;
    }

    if (password.length < 6) {
      showError('La contraseña debe tener al menos 6 caracteres.');
      return;
    }

    // Almacenar el usuario registrado para la sesión
    localStorage.setItem('nombreUsuario', username);

    // Redirigir al inicio
    window.location.href = '../index.html';
  });

  function showError(msg) {
    errorMessage.textContent = msg;
    errorMessage.style.display = 'block';
  }
});
 main
