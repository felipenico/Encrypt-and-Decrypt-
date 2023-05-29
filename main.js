//Capturando las propiedades de las etiquetas de cajas de texto y los botones
const enterTex = document.querySelector(".EnterTex");
const finaltext = document.querySelector(".FinalText");
const buttonEncrypt = document.querySelector(".btn_encrypt");
const buttonDecrypt = document.querySelector(".btn_decrypt");
const buttoncopy = document.querySelector(".coppy");

let keyss = [
  ["e", "enter"],
  ["i", "imes"],
  ["a", "ai"],
  ["o", "ober"],
  ["u", "ufat"],
];
let encryptT = 0;
let decryptT = 0;
//Esta expresion elimina caracteres especiales, eso incluye ñ,espacios o tabulaciones
let chars = /[A-Z0-9~!@#$%&*()_+|{}[\]\\\/?><^:"`;.,áéíóúàèìòùñ]/g;

function WithoutTexto(aviso) {
  alert(
    "¡Alto Ahi!,aun no hay nada por " + aviso + ".Recuerda ingresar un texto"
  );
}
//Encriptamos texto
function encriptar() {
  //Obteniendo la cadena de texto
  let encryptText = enterTex.value.toLowerCase(); //Letras Mayusculas a minusculas
  //encryptText = encryptText.replace(/[^a-zA-Zñ\s]/g, '');
  encryptText = encryptText.replaceAll(chars, "");
  encryptT = encryptText;
  //Evaluando nuestra cadena de texto
  if (encryptText.length == 0) {
    WithoutTexto("ENCRIPTAR");
  } else {
    for (let i = 0; i < keyss.length; i++) {
      encryptT = encryptT.replaceAll(keyss[i][0], keyss[i][1]);
    }
    //Borramos el texto que parece en nuestra caja de texto de la etiqueta clase EnterText
    enterTex.value = "";
    //Enviamos el texto Encriptado a la etiqueta clase
    finaltext.value = encryptT;
    finaltext.style.backgroundImage = "none";
  }
}
buttonEncrypt.onclick = encriptar;

//Desencriptamos el texto
function desencriptar() {

  let decryptText = enterTex.value.toLowerCase(); //Letras Mayusculas a minusculas
  //encryptText = encryptText.replace(/[^a-zA-Zñ\s]/g, '');
  decryptText = decryptText.replaceAll(chars, "");
  decryptT = decryptText;
  //Evaluando nuestra cadena de texto
  if (decryptText.length == 0) {
    WithoutTexto("DESENCRIPTAR");
  } else {
    for (let i = 0; i < keyss.length; i++) {
      decryptT = decryptT.replaceAll(keyss[i][1], keyss[i][0]);
    }
    //Borramos el texto que parece en nuestra caja de texto de la etiqueta clase EnterText
    enterTex.value = "";
    //Enviamos el texto Encriptado a la etiqueta clase
    finaltext.value = decryptT;
    finaltext.style.backgroundImage = "none";
  }
}
buttonDecrypt.onclick = desencriptar;

//Copiar el texto de FinalText
function btn_copy() {
  buttoncopy.addEventListener(
    "click",
    copiar = () => {
      let btn_content = finaltext.value;
      navigator.clipboard.writeText(btn_content);
    })
}
buttoncopy.onclick = btn_copy;
