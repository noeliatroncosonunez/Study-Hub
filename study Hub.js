window.addEventListener("scroll", () =>{
    const scroll = window.scrollY;
    document.querySelector(".hero").style.backgroundPositionY=
    scroll *0.5 + "px";
});

const topBtn = Document.getElementByid("topBtn");

window.addEventListener("scroll",()=> {
    if(window.scrollY > 300){
        topBtn.style.display = "block";

    }

    else{
        topBtn.style.display = "none";
    }
});

topBtn.onclick = () => {
    window.scrollTo ({
        top:0, behavior:"smooth"
    });
};

// Login
function abrirLogin(){
    document.getElementById("loginModal").style.display = "flex";
}

function abrirRegistro(){
    document.getElementById("registroModal").style.display = "flex";
}

function cerrarModal(id){
    document.getElementById(id).style.display = "none";
}

// Mostrar Password
function mostrarContraseña(id){
    const input = document.getElementById(id);

    if(input.type === "password"){
        input.type = "text";
    }

    else{
        input.type = "password";
    }
}

// Validar Login
function validarLogin(event){
    event.preventdefault();
    const correo = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    if(correo && password){
        alert("🚀 Sesión iniciada");
        cerrarModal("loginModal");
    }
}

// Validar Registro
function validarRegistro(event){
    event.preventdefault();
    const nombre = document.getElementById("registroNombre").value;

    if(nombre.length < 3){
        alert("⚠ Nombre demasiado corto");
        return;
    }

    alert("✅ Cuenta creada");
    cerrarModal("registroModal");
}

// Cerrar Modal
window.onclick = function(event){
    const login = document.getElementById("loginModal");
    const registro = this.document.getElementByid("registroModal");

    if(event.target === login){
        login.style.display = "none";
    }

    if(event.target === registro){
        registro.style.display = "none";
    }
}

// Estadísticas
let usuarios = 0;
let cursos = 0;
let logros = 0;

const intervalo = setInterval(()=> {
    if(usuarios < 150){
        usuarios++;
        document.getElementById("usuarios").innerHTML = usuarios;
    }

    if(cursos < 24){
        cursos++;
        document.getElementById("cursos").innerHTML = cursos;
    }

    if(logros < 35){
        logros++;
        document.getElementById("logros").innerHTML = logros;
    }
},30);

const cards = document.querySelectorAll(".card");
window.addEventListener("scroll",()=> {
    cards.forEach(card => {
        const top = card.getBoundingClientRect().top;
        if(top < window.innerHeight - 100){
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }
    });
});

function responderIA(){
    const respuesta = document.getElementById("respuesta");
    respuesta.innerHTML = "📘 Te recomiendo estudiar 30 minutos diarios.";
}

function desbloquear(){
    alert("🏆 ¡Nuevo logro desbloqueado!");
}
