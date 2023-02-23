
var input = document.querySelector("#input__texto")
var vazio = document.querySelector(".input__vazio")
var resultado = document.querySelector("#output__texto")
var botao = document.querySelector("#botao-3")


document.getElementById('botao--1').addEventListener('click', function () {

    let check = document.getElementById('input__texto').value;
    if (check !== '') {

        document.getElementById('input__vazio').style.display = "none"

        let i = input.value.toLowerCase()
        let substituir = i.replaceAll("e", "enter").replaceAll("i", "imes").replaceAll("a", "ai").replaceAll("o", "ober").replaceAll("u", "ufat")
        return resultado.innerHTML = substituir

    } else {
        alert('Preencha o campo')
    }
})

document.getElementById('botao--2').addEventListener('click', function () {

    let check = document.getElementById('input__texto').value;
    if (check !== '') {
        document.getElementById('input__vazio').style.display = "none"


        let i = input.value.toLowerCase()
        let substituir = i.replaceAll("enter", "e").replaceAll("imes", "i").replaceAll("ai", "a").replaceAll("ober", "o").replaceAll("ufat", "u")
        return resultado.innerHTML = substituir
        
    } else {
        alert('Preencha o campo')
    }
})

document.getElementById('botao--3').addEventListener('click', function () {

    let check = document.getElementById('output__texto').value;
    if (check !== '') {
        navigator.clipboard.writeText(resultado.innerHTML)
        alert("Mensagemn copiada!")

    } else {
        alert("Não há mensagem para copiar");
    }
})

