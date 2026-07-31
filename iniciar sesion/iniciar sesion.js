document.getElementById('loginForm').addEventListener('submit', function(event) {
    
    event.preventDefault();

    
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('error-message');

    
    usernameInput.classList.remove('input-error');
    passwordInput.classList.remove('input-error');
    errorMessage.style.display = 'none';
    errorMessage.innerText = '';

    
    if (usernameInput.value.trim().length < 4) {
        showError('El usuario debe tener al menos 4 caracteres.', usernameInput);
        return;
    }

    
    if (passwordInput.value.length < 6) {
        showError('La contraseña debe tener al menos 6 caracteres.', passwordInput);
        return;
    }

    
    alert('¡Validación exitosa! Enviando datos...');
    
});


function showError(message, inputElement) {
    const errorMessage = document.getElementById('error-message');
    errorMessage.innerText = message;
    errorMessage.style.display = 'block';
    inputElement.classList.add('input-error');
    inputElement.focus();
}