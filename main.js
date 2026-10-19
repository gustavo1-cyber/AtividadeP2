function calcular() {
    // 1. Captura o valor digitado no input HTML
    const compra = parseFloat(document.getElementById('compra').value);

    // Validação básica caso o usuário clique sem digitar nada ou digite um número inválido
    if (isNaN(compra) || compra <= 0) {
        alert("Por favor, insira um valor de compra válido.");
        return;
    }

    let percentualDesconto = 0;

    // 2. Aplica as regras de negócio solicitadas
    if (compra > 500) {
        percentualDesconto = 0.10; // 10% de desconto
    } else if (compra > 100) {
        percentualDesconto = 0.05; // 5% de desconto
    } else {
        percentualDesconto = 0;    // Sem desconto para valores menores ou iguais a 100
    }

    // 3. Realiza os cálculos matemáticos
    const valorDesconto = compra * percentualDesconto;
    const valorFinal = compra - valorDesconto;

    // 4. Devolve os resultados formatados com 2 casas decimais para o HTML
    document.getElementById('valorCompra').innerText = compra.toFixed(2);
    document.getElementById('valorDesconto').innerText = valorDesconto.toFixed(2);
    document.getElementById('valorFinal').innerText = valorFinal.toFixed(2);
}
