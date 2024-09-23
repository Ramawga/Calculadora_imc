"use strict";
var pesoInput = document.getElementById('peso');
var alturaInput = document.getElementById('altura');
var calcularBtn = document.getElementById('calcular');
var resultadoDiv = document.getElementById('resultado');
function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}
function classificarIMC(imc) {
    if (imc < 18.5)
        return 'Abaixo do peso';
    if (imc >= 18.5 && imc < 24.9)
        return 'Peso normal';
    if (imc >= 25 && imc < 29.9)
        return 'Sobrepeso';
    if (imc >= 30 && imc < 34.9)
        return 'Obesidade grau 1';
    if (imc >= 35 && imc < 39.9)
        return 'Obesidade grau 2';
    return 'Obesidade grau 3';
}
calcularBtn.addEventListener('click', function () {
    var peso = parseFloat(pesoInput.value);
    var altura = parseFloat(alturaInput.value);
    if (!peso || !altura) {
        resultadoDiv.innerText = 'Por favor, insira valores válidos!';
        return;
    }
    var imc = calcularIMC(peso, altura);
    var classificacao = classificarIMC(imc);
    resultadoDiv.innerText = "Seu IMC \u00E9 ".concat(imc.toFixed(2), " (").concat(classificacao, ")");
});
