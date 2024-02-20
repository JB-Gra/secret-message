const entradaTexto = document.getElementById("entrada-texto");
const resultadoTexto = document.getElementById("resultado-texto");
const btnEncriptado = document.getElementById("encriptado");
const btnDesencriptado = document.getElementById("desencriptado");
const areaMensaje = document.getElementById("resultado-texto");
const mensajeEspera = document.getElementById("esperando-mensaje");
const btnCopiar = document.getElementById("btn-copiar");
let textoNuevo = document.createElement("p");

btnEncriptado.addEventListener("click", () => {
  mensajeEspera.remove();
  textoNuevo.remove();
  crearMensaje(encriptarMensaje(entradaTexto.value));
  entradaTexto.value = "";
})

btnDesencriptado.addEventListener("click", () => {
  mensajeEspera.remove();
  textoNuevo.remove();
  crearMensaje(desencriptarMensaje(entradaTexto.value));
  entradaTexto.value = "";
})

btnCopiar.addEventListener("click", () => {
  let texto = textoNuevo.textContent;
  navigator.clipboard.writeText(`${texto}`).then(() => {
    console.log("¡Texto copiado!");
  }, () => {
    console.error("Hubo un error al copiar");
  })
})

const crearMensaje = (func) => {
  textoNuevo.classList.add("salida__resultado-texto");
  textoNuevo.textContent = func;
  areaMensaje.append(textoNuevo);
}

const encriptarMensaje = (mensaje) => {
  const vocales = {
    "a": "ai",
    "e": "enter",
    "i": "imes",
    "o": "ober",
    "u": "ufat"
  }
  const mensajeEncriptado = mensaje.replace(/(a|e|i|o|u)/g, (vocal) => {
    return vocales[vocal];
  })
  return mensajeEncriptado;
}

const desencriptarMensaje = (mensaje) => {
  const encriptado = {
    "ai": "a",
    "enter": "e",
    "imes": "i",
    "ober": "o",
    "ufat": "u",
  }
  const mensajeDesencriptado = mensaje.replace(/(ai|enter|imes|ober|ufat)/g, (frase) => {
    return encriptado[frase];
  })
  return mensajeDesencriptado;
}
