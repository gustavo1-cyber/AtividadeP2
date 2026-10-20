function calcular() {
    let compra = Number(document.getElementById('compra').value);

    let desconto = 0;

    if (compra > 500) {
        desconto = 0.10;
    } else if (compra > 100) {
        desconto = 0.05; 
    }

    let valorDoDesconto = compra * desconto;
    let valorFinal = compra - valorDoDesconto;


    document.getElementById('valorCompra').textContent = compra;
    document.getElementById('valorDesconto').textContent = valorDoDesconto;
    document.getElementById('valorFinal').textContent = valorFinal;
}