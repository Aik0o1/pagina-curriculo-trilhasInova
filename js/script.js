const punpun = document.querySelectorAll(".punpun")
function posHorizontalAleatoria(elemento){
    let posX = Math.floor(Math.random() * window.innerWidth)
    elemento.style.left = posX + "px"
    elemento.style.bottom = -100 +"px"
}

function moverPunpun(elemento){
    const larguraTela = window.innerWidth
    const alturaTela = window.innerHeight

    let movimento = setInterval(() => {
        let posY = parseInt(elemento.style.bottom)
        if (posY < alturaTela){
            posY++
            elemento.style.bottom = posY + "px"
        }
        else{
            clearInterval(movimento)
            posHorizontalAleatoria(elemento)
            moverPunpun(elemento)
        }
    }, 1)


}
punpun.forEach( img => {
    moverPunpun(img)
})

