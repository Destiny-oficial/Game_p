function cambiarEscena(imagen) {
    let fondo = document.getElementById("fondo");
    let gatita = document.getElementById("gatita");

    fondo.src = imagen;
    
    // Hacer que la gatita camine
    gatita.style.left = "0%"; // Inicia a la izquierda
    gatita.style.transition = "left 2s linear";
    
    setTimeout(() => {
        gatita.style.left = "50%"; // Camina al centro
    }, 100);
}
