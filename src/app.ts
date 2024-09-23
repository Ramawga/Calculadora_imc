const pesoInput = document.getElementById('peso') as HTMLInputElement;
const alturaInput = document.getElementById('altura') as HTMLInputElement;
const calcularBtn = document.getElementById('calcular') as HTMLButtonElement;
const resultadoDiv = document.getElementById('resultado') as HTMLDivElement;

function calcularIMC(peso: number, altura: number): number {
    return peso / (altura * altura);
}

function classificarIMC(imc: number): string {
    if (imc < 18.5) return 'Abaixo do peso';
    if (imc >= 18.5 && imc < 24.9) return 'Peso normal';
    if (imc >= 25 && imc < 29.9) return 'Sobrepeso';
    if (imc >= 30 && imc < 34.9) return 'Obesidade grau 1';
    if (imc >= 35 && imc < 39.9) return 'Obesidade grau 2';
    return 'Obesidade grau 3';
}

calcularBtn.addEventListener('click', () => {
    const peso = parseFloat(pesoInput.value);
    const altura = parseFloat(alturaInput.value);

    if (!peso || !altura) {
        resultadoDiv.innerText = 'Por favor, insira valores válidos!';
        return;
    }

    const imc = calcularIMC(peso, altura);
    const classificacao = classificarIMC(imc);

    resultadoDiv.innerText = `Seu IMC é ${imc.toFixed(2)} (${classificacao})`;
});