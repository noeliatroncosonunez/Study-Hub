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