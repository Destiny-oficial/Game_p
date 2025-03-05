function iniciarJuego() {
    document.getElementById("menu").style.display = "none";
    document.getElementById("adopcion").style.display = "block";
}

function adoptar() {
    let nombre = document.getElementById("nombreGatita").value;
    if (nombre.trim() === "") {
        alert("Por favor, elige un nombre.");
        return;
    }
    localStorage.setItem("gatitaNombre", nombre);
    document.getElementById("nombreMostrar").innerText = nombre;
    document.getElementById("adopcion").style.display = "none";
    document.getElementById("juego").style.display = "block";
}

function cambiarEscena(imagen) {
    document.getElementById("fondo").src = imagen;
}

function acariciar() {
    document.getElementById("mensaje").innerText = "Miauu~ ¡Tu gatita está feliz!";
    setTimeout(() => {
        document.getElementById("mensaje").innerText = "";
    }, 2000);
}
