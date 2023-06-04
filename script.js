const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

textArea.focus();

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"


// Funcion para verificar si hay caracteres especiales o acentos
function verificarCaracteres() {
    if (/[áéíóúñ$°~`|+*_#@!?<>":&^%]/.test(textArea.value)) {
        swal.fire({
            title: 'Error',
            text: 'No se permiten caracteres especiales o acentos',
            imageUrl: 'imagenes/error.jpg',
            imageWidth: 220,
            imageHeight: 200,
            imageAlt: 'Creeper',
        });
        textArea.value = "";
        return false;
    }
}

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    let verificar = verificarCaracteres();
    if(verificar === false) {
        return;
    }

    if (textArea.value !== "") {
        mensaje.value = textoEncriptado;
        textArea.value = "";
        mensaje.style.backgroundImage = "url(imagenes/background_aside.jpg)";
    }
}

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(textArea.value);
    let verificar = verificarCaracteres();
    if(verificar === false) {
        return;
    }

    if (textArea.value !== "") {
        mensaje.value = textoDesencriptado;
        textArea.value = "";
        mensaje.style.backgroundImage = "url(imagenes/background_aside.jpg)";
    }
}


// Funcion para copiar
function btnCopiar() {
    if (mensaje.value === "") {
        swal.fire({
            title: 'Error',
            text: 'No hay mensaje para copiar',
            imageUrl: 'imagenes/error.jpg',
            imageWidth: 220,
            imageHeight: 200,
            imageAlt: 'Creeper',
        });
        return;
    } else {
        mensaje.select();
        document.execCommand("copy");
        swal.fire({
            title: 'Copiado',
            text: 'El mensaje ha sido copiado al portapapeles',
            imageUrl: 'imagenes/copy.jpg',
            imageWidth: 220,
            imageHeight: 200,
            imageAlt: 'Steve montado en caballo',
        });
    }
}

// Función para encriptar
function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}

// Función para desencriptar
function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada;
}
