const tela = document.querySelector("#tela")
let resultado = 0;
let numeroNaTela;

// ================== TECLA CE ===============================
document.querySelector("#tecla-ce").addEventListener("click", () => {
    numeroNaTela = "0"
    tela.innerText = numeroNaTela
    resultado = 0
    operador = ""
})
// ================== TECLA C ===============================
document.querySelector("#tecla-c").addEventListener("click", () => {
    numeroNaTela = "0"
    tela.innerText = numeroNaTela
})


// ================== TECLADO NUMÉRICO ===============================
function teclarNumero(n) {
    if (numeroNaTela == 0 || novoNumero) {
        numeroNaTela = n
    } else if (numeroNaTela.length < 10) {
        numeroNaTela += n
    } else {
        alert("Número máximo de algarismo atingido!")
    }
    tela.innerText = numeroNaTela
    novoNumero = false
}
document.querySelector("#tecla-7").addEventListener("click", () => {
    teclarNumero("7")
})
document.querySelector("#tecla-8").addEventListener("click", () => {
    teclarNumero("8")
})
document.querySelector("#tecla-9").addEventListener("click", () => {
    teclarNumero("9")
})
document.querySelector("#tecla-4").addEventListener("click", () => {
    teclarNumero("4")
})
document.querySelector("#tecla-5").addEventListener("click", () => {
    teclarNumero("5")
})
document.querySelector("#tecla-6").addEventListener("click", () => {
    teclarNumero("6")
})
document.querySelector("#tecla-1").addEventListener("click", () => {
    teclarNumero("1")
})
document.querySelector("#tecla-2").addEventListener("click", () => {
    teclarNumero("2")
})
document.querySelector("#tecla-3").addEventListener("click", () => {
    teclarNumero("3")
})
document.querySelector("#tecla-0").addEventListener("click", () => {
    teclarNumero("0")
})
document.querySelector("#tecla-virg").addEventListener("click", () => {
    if (!numeroNaTela.includes(".")) {
        teclarNumero(".")
    }
})


let novoNumero = false
//======================== SOMAR ===========================
document.querySelector("#tecla-somar").addEventListener("click", () => {
    novoNumero = true;
    operador = "+"
    resultado += +numeroNaTela;
})
document.querySelector("#tecla-igual").addEventListener("click", () => {
    novoNumero = true;
    
    switch (operador) {
        case "+":
            resultado += +numeroNaTela;
    }

    tela.innerText = resultado;
    operador = ""
})