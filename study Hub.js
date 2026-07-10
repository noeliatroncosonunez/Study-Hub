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

let contadorPreguntas = 0;

function responderIA(){

    let pregunta = document.getElementById("pregunta").value.trim();

    if(pregunta === ""){
        return;
    }

    contadorPreguntas++;

    document.getElementById("contador").textContent =
    contadorPreguntas;

    let chatBox = document.getElementById("chatBox");

    let hora = new Date().toLocaleTimeString([],{
        hour:"2-digit",
        minute:"2-digit"
    });

    chatBox.innerHTML += `
        <div class="mensaje usuario">
            ${pregunta}
            <small>${hora}</small>
        </div>
    `;

    let respuesta =
    "Actualmente estoy aprendiendo. Intenta con otra pregunta.";

    let texto = pregunta.toLowerCase();

    if(texto.includes("html")){
        respuesta =
        "HTML es el lenguaje utilizado para estructurar páginas web.";
    }

    else if(texto.includes("css")){
        respuesta =
        "CSS permite diseñar y dar estilo a los elementos de una página web.";
    }

    else if(texto.includes("javascript")){
        respuesta =
        "JavaScript agrega interactividad y funcionalidades dinámicas a una página web.";
    }

    else if(texto.includes("matem")){
        respuesta =
        "Las matemáticas estudian números, operaciones y relaciones entre cantidades.";
    }

    else if(texto.includes("historia")){
        respuesta =
        "La historia estudia los acontecimientos del pasado para comprender el presente.";
    }

    else if(texto.includes("fotosíntesis") || texto.includes("fotosintesis")){
        respuesta =
        "La fotosíntesis es el proceso mediante el cual las plantas producen su alimento usando luz solar.";
    }

    else if(texto.includes("inglés") || texto.includes("ingles")){
        respuesta =
        "El inglés es uno de los idiomas más utilizados en el mundo y en la tecnología.";
    }

    else if(texto.includes("estudiar")){
        respuesta =
        "Estudia en bloques de 25 minutos, toma descansos y practica constantemente.";
    }

    setTimeout(() => {

        chatBox.innerHTML += `
            <div class="mensaje bot">
                🤖 ${respuesta}
                <small>${hora}</small>
            </div>
        `;

        chatBox.scrollTop =
        chatBox.scrollHeight;

    },800);

    document.getElementById("pregunta").value = "";
}

function preguntaRapida(texto){

    document.getElementById("pregunta").value =
    texto;

    responderIA();
}

function limpiarChat(){

    document.getElementById("chatBox").innerHTML = `
        <div class="mensaje bot">
            👋 ¡Hola! Soy StudyBot.
            ¿En qué puedo ayudarte hoy?
        </div>
    `;

    contadorPreguntas = 0;

    document.getElementById("contador").textContent =
    "0";
}

document.getElementById("pregunta").addEventListener(
"keypress",
function(event){

    if(event.key === "Enter"){
        responderIA();
    }

});

function desbloquear(){
    alert("🏆 ¡Nuevo logro desbloqueado!");
}
