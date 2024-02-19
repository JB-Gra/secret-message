// Paso 1: tomar los elementos del DOM (área de texto, resultado del mensaje y botones)
const entradaTexto = document.getElementById("entrada-texto");
const resultadoTexto = document.getElementById("resultado-texto");
const btnEncriptado = document.getElementById("encriptado");
const btnDesencriptado = document.getElementById("desencriptado");
const areaMensaje = document.getElementById("resultado-texto");
const mensajeEspera = document.getElementById("esperando-mensaje");
let textoNuevo = document.createElement("p");

// Paso 2: asegurarse de que estemos capturando el valor del área de texto
// Paso 3: mostrar el texto en pantalla
// Paso 3.5: reemplazar el texto una vez que se crea
const crearMensaje = () => {
  textoNuevo.classList.add("salida__resultado-texto");
  textoNuevo.textContent = entradaTexto.value.toLowerCase();
  areaMensaje.append(textoNuevo);
}

btnEncriptado.addEventListener("click", () => {
  mensajeEspera.remove();
  textoNuevo.remove();
  crearMensaje();
})
