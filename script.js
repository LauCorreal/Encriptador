function encriptarTexto() {
    const desplazamiento = 3; // Número de posiciones a desplazar (cifrado César)
    let texto = document.getElementById('inputTexto').value;
    let resultado = '';

    for (let i = 0; i < texto.length; i++) {
        let charCode = texto.charCodeAt(i);

        if (charCode >= 65 && charCode <= 90) {
            // Mayúsculas (A-Z)
            resultado += String.fromCharCode(((charCode - 65 + desplazamiento) % 26) + 65);
        } else if (charCode >= 97 && charCode <= 122) {
            // Minúsculas (a-z)
            resultado += String.fromCharCode(((charCode - 97 + desplazamiento) % 26) + 97);
        } else {
            // Otros caracteres (dejar sin cambios)
            resultado += texto[i];
        }
    }

    document.getElementById('outputTexto').value = resultado;
}

function desencriptarTexto() {
    const desplazamiento = 3; // Número de posiciones a desplazar (cifrado César)
    let texto = document.getElementById('inputTexto').value;
    let resultado = '';

    for (let i = 0; i < texto.length; i++) {
        let charCode = texto.charCodeAt(i);

        if (charCode >= 65 && charCode <= 90) {
            // Mayúsculas (A-Z)
            resultado += String.fromCharCode(((charCode - 65 - desplazamiento + 26) % 26) + 65);
        } else if (charCode >= 97 && charCode <= 122) {
            // Minúsculas (a-z)
            resultado += String.fromCharCode(((charCode - 97 - desplazamiento + 26) % 26) + 97);
        } else {
            // Otros caracteres (dejar sin cambios)
            resultado += texto[i];
        }
    }

    document.getElementById('outputTexto').value = resultado;
}
