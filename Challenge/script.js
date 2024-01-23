var btn_Encrypt = document.querySelector(".btnEncrypt");
var btn_Decrypt = document.querySelector(".btnDecrypt");
var ilustration = document.querySelector(".ilustrationContainer");
var contenedor = document.querySelector(".paragrahContainer");
var resultado = document.querySelector(".answerContainer");

btn_Encrypt.onclick = encriptar;
btn_Decrypt.onclick = desencriptar;

function encriptar(){
    hideFront();
    var cajatexto = recuperarTexto()
    resultado.textContent = encriptarTexto(cajatexto);
}

function desencriptar(){
    hideFront();
    var cajatexto = recuperarTexto()
    resultado.textContent = desencriptarTexto(cajatexto);
}

function recuperarTexto(){
    var cajatexto = document.querySelector(".boxText")
    return cajatexto.value
}

function hideFront(){
    ilustration.classList.add("hide");
    contenedor.classList.add("hide");
}

function encriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        switch (texto[i]){
            case "a":
                textoFinal = textoFinal + "ai"
                break;
            case "e":
                textoFinal = textoFinal + "enter"
                break;
            case "i":
                textoFinal = textoFinal + "imes"
                break;
            case "o":
                textoFinal = textoFinal + "ober"
                break;
            case "u":
                textoFinal = textoFinal + "ufat"
                break;
            default:
                textoFinal = textoFinal + texto[i];
        }
    }
    return textoFinal;

}

function desencriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        switch (texto[i]){
            case "a":
                textoFinal = textoFinal + "a"
                i = i+1;
                break;
            case "e":
                textoFinal = textoFinal + "e"
                i = i+4;
                break;
            case "i":
                textoFinal = textoFinal + "i"
                i = i+3;
                break;
            case "o":
                textoFinal = textoFinal + "o"
                i = i+3;
                break;
            case "u":
                textoFinal = textoFinal + "u"
                i = i+3;
                break;
            default:
                textoFinal = textoFinal + texto[i];
        }
    }

    return textoFinal;

}

const btn_Copy = document.querySelector(".btnCopy"); 
    btn_Copy.addEventListener("click", copiar = () => {
    navigator.clipboard.writeText(document.querySelector(".answerContainer").textContent);
    console.log("hola"); 
});