const entradaTexto = document.getElementById("entrada-texto");
const resultadoTexto = document.getElementById("resultado-texto");
const btnEncriptado = document.getElementById("encriptado");
const btnDesencriptado = document.getElementById("desencriptado");
const mensajeEspera = document.getElementById("esperando-mensaje");
const btnCopiar = document.getElementById("btn-copiar");
let textoNuevo = document.createElement("p");

btnEncriptado.addEventListener("click", () => {
  if (entradaTexto.value === "") {
    alert("No has escrito nada aún");
    throw new Error("No hay ningún mensaje");
  } else {
    mensajeEspera.remove();
    textoNuevo.remove();
    crearMensaje(encriptarMensaje(entradaTexto.value));
    entradaTexto.value = "";
  }
})

btnDesencriptado.addEventListener("click", () => {
  if (entradaTexto.value === "") {
    alert("No has escrito nada aún");
    throw new Error("No hay ningún mensaje");
  } else {
    mensajeEspera.remove();
    textoNuevo.remove();
    crearMensaje(desencriptarMensaje(entradaTexto.value));
    entradaTexto.value = "";
  }
})

btnCopiar.addEventListener("click", () => {
  let texto = textoNuevo.textContent;
  navigator.clipboard.writeText(`${texto}`).then(() => {
    alert("¡Texto copiado!");
  }, () => {
    alert("¡Vaya! Falló el copiado");
    console.error("Hubo un error al copiar");
  })
})

const crearMensaje = (func) => {
  textoNuevo.classList.add("salida__resultado-texto");
  textoNuevo.textContent = func;
  resultadoTexto.append(textoNuevo);
}

const encriptarMensaje = (mensaje) => {
  const vocales = {
    "a": "ai",
    "e": "enter",
    "i": "imes",
    "o": "ober",
    "u": "ufat"
  }
  const mensajeEncriptado = mensaje.toLowerCase().replace(/(a|e|i|o|u)/g, (vocal) => {
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
  const mensajeDesencriptado = mensaje.toLowerCase().replace(/(ai|enter|imes|ober|ufat)/g, (frase) => {
    return encriptado[frase];
  })
  return mensajeDesencriptado;
}
