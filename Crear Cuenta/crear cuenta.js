// Función para mostrar / ocultar contraseñas
function togglePass(inputId, button) {
    const input = document.getElementById(inputId);
    
    if (input.type === 'password') {
        input.type = 'text';
        button.textContent = 'Ocultar';
    } else {
        input.type = 'password';
        button.textContent = 'Ver';
    }
}

// Validación e interacción al enviar el formulario
document.getElementById('registroForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita recargar la página

    const nombre = document.getElementById('nombre').value.trim();
    const correo = document.getElementById('correo').value.trim();
    const password = document.getElementById('password').value;
    const confirmar = document.getElementById('confirmar').value;
    const mensajeDiv = document.getElementById('mensaje');

    // Validación de campos vacíos
    if (!nombre || !correo || !password || !confirmar) {
        mostrarMensaje('Por favor, completa todos los campos.', 'error');
        return;
    }

    // Validación del largo de contraseña
    if (password.length < 6) {
        mostrarMensaje('La contraseña debe tener al menos 6 caracteres.', 'error');
        return;
    }

    // Validación de coincidencia de contraseñas
    if (password !== confirmar) {
        mostrarMensaje('Las contraseñas no coinciden.', 'error');
        return;
    }

    // Si todo está correcto
    mostrarMensaje('¡Cuenta creada con éxito! Redirigiendo...', 'exito');

    // Simula la redirección al inicio de sesión o página principal
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 2000);
});

function mostrarMensaje(texto, tipo) {
    const mensajeDiv = document.getElementById('mensaje');
    mensajeDiv.textContent = texto;
    mensajeDiv.className = `mensaje ${tipo}`;
}