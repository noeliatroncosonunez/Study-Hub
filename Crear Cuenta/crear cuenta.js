// 1. Mostrar/Ocultar contraseña
    function togglePass(inputId, btn) {
        const input = document.getElementById(inputId);
        if (input.type === "password") {
            input.type = "text";
            btn.textContent = "Ocultar";
        } else {
            input.type = "password";
            btn.textContent = "Ver";
        }
    }

    // 2. Validación del formulario
    const form = document.getElementById('registroForm');
    const mensajeDiv = document.getElementById('mensaje');

    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Evitar el recargo de página

        const nombre = document.getElementById('nombre').value.trim();
        const correo = document.getElementById('correo').value.trim();
        const password = document.getElementById('password').value;
        const confirmar = document.getElementById('confirmar').value;

        // Limpiar mensajes previos
        mensajeDiv.className = '';
        mensajeDiv.style.display = 'none';

        // Validaciones en JS
        if (!nombre || !correo || !password || !confirmar) {
            mostrarMensaje('Por favor, completa todos los campos.', 'error');
            return;
        }

        if (password.length < 6) {
            mostrarMensaje('La contraseña debe tener al menos 6 caracteres.', 'error');
            return;
        }

        if (password !== confirmar) {
            mostrarMensaje('Las contraseñas no coinciden.', 'error');
            return;
        }

        // Si todo es correcto:
        mostrarMensaje('¡Cuenta creada con éxito! Redirigiendo...', 'success');

        // Simulación de redirección a la página principal tras 2 segundos
        setTimeout(() => {
            window.location.href = "index.html"; 
        }, 2000);
    });

    function mostrarMensaje(texto, tipo) {
        mensajeDiv.textContent = texto;
        mensajeDiv.className = tipo;
    }