const calcularGorjeta = (valorTotal, qualidade, callback) => {
    let percentual = 0;
    switch (qualidade) {
        case 'bom':
            percentual = 0.15;
            break;
        case 'regular':
            percentual = 0.1;
            break;
        case 'ruim':
            percentual = 0.05;
            break;
        default:
            percentual = 0.1; 
            break;
    }

    const gorjeta = valorTotal * percentual;
    const totalPagar = valorTotal + gorjeta;

    
    callback(gorjeta, totalPagar);
};


const exibirResultados = (gorjeta, totalPagar) => {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `
        <p>Gorjeta: R$ ${gorjeta.toFixed(2)}</p>
        <p>Total a Pagar: R$ ${totalPagar.toFixed(2)}</p>
    `;
};


const btnCalcular = document.getElementById('calcularGorjeta');
btnCalcular.addEventListener('click', () => {
    const valorConta = parseFloat(document.getElementById('totalConta').value);
    const qualidadeServico = document.getElementById('qualidadeServico').value;

    
    if (isNaN(valorConta) || valorConta <= 0) {
        alert('Por favor, insira um valor válido para a conta.');
        return;
    }

    
    calcularGorjeta(valorConta, qualidadeServico, exibirResultados);
});
