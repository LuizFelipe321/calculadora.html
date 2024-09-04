function calcularIMC() {
    var peso = parseFloat(document.getElementById('peso').value);
    var altura = parseFloat(document.getElementById('altura').value);

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        alert('Por favor, insira valores válidos para peso e altura.');
        return;
    }

    var imc = peso / (altura * altura);
    var mensagem = '';
    var porcentagem = '';

    if (imc < 18.5) {
        mensagem = 'Você está abaixo do peso.';
        var pesoIdealMin = 18.5 * (altura * altura);
        var diffPeso = pesoIdealMin - peso;
        porcentagem = `Você precisa ganhar aproximadamente ${(diffPeso / peso * 100).toFixed(2)}% do seu peso atual para atingir o IMC ideal.`;
    } else if (imc >= 18.5 && imc < 24.9) {
        mensagem = 'Seu IMC está dentro da faixa saudável.';
    } else if (imc >= 25 && imc < 29.9) {
        mensagem = 'Você está acima do peso.';
        var pesoIdealMax = 24.9 * (altura * altura);
        var diffPeso = peso - pesoIdealMax;
        porcentagem = `Você precisa perder aproximadamente ${(diffPeso / peso * 100).toFixed(2)}% do seu peso atual para atingir o IMC ideal.`;
    } else {
        mensagem = 'Você está com obesidade.';
        var pesoIdealMax = 24.9 * (altura * altura);
        var diffPeso = peso - pesoIdealMax;
        porcentagem = `Você precisa perder aproximadamente ${(diffPeso / peso * 100).toFixed(2)}% do seu peso atual para atingir o IMC ideal.`;
    }

    document.getElementById('imc').innerText = `Seu IMC é ${imc.toFixed(2)}`;
    document.getElementById('mensagem').innerText = mensagem;
    document.getElementById('porcentagem').innerText = porcentagem;
}
