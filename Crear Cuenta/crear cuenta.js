document.getElementById("registroForm").addEventListener("submit", function (e){

    e.preventDefault();

    let nombre=document.getElementById("nombre").value;
    let correo=document.getElementById("correo").value;
    let password=document.getElementById("password").value;
    let confirmar=document.getElementById("confirmar").value;

    if(password!=confirmar){
       alert("Las contraseñas no coinciden");
       return;
    }

    let usuario={
        nombre:nombre,
        correo:correo,
        password: password
    };
localStorage.setItem("usuario", JSON.stringify(usuario));

document.getElementById("mensaje").innerHTML="✅ Cuenta creada correctamente.";
});