function operacion(button){
    const pantalla = document.getElementById("pantalla");
    let valorActual = pantalla.value;

    if (button === "C") {
        pantalla.value = "";
        return;
    }

    if (button === "=" ) {
        try {
            const resultado = eval(valorActual);
            pantalla.value = resultado;
        } catch (error) {
         pantalla.value = "Error";
        }
        return;
    }

    pantalla.value = valorActual + button;

}

const botones = document.querySelectorAll("button");

botones.forEach(boton => { 
    boton.addEventListener("click", () => {
        operacion(boton.textContent);
    });
});