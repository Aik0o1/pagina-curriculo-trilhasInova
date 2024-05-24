let texto = "Ei! É bom te ver."

let tagTexto = document.querySelector(".sobre-titulo")
let contLetras = 0

function escreverTexto() {
    if (contLetras < texto.length){
        tagTexto.textContent += texto.charAt(contLetras)
        contLetras++


        setTimeout(escreverTexto, 200)
    }
}

escreverTexto()