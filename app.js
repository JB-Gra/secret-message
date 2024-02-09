// Paso 1: tomar los elementos del DOM (área de texto, resultado del mensaje y botones)
const entradaTexto = document.getElementById("entrada-texto");
const resultadoTexto = document.getElementById("resultado-texto");
const btnEncriptado = document.getElementById("encriptado");
const btnDesencriptado = document.getElementById("desencriptado");

// Paso 2: asegurarse de que estemos capturando el valor del área de texto
btnEncriptado.addEventListener("click", () => alert(entradaTexto.value))
