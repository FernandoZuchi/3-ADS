function consumirAPI() {
    fetch('http://localhost:3000/produtos')
    .then(response => response.json())
    .then(produtos => {
        const produtosContainer = document.getElementById('produtosContainer')
        produtosContainer.innerHTML = '';

        produtos.forEach(produto => {
            const produtoCard = document.createElement('div');
            produtoCard.classList.add('produto-card');

            produtoCard.innerHTML = `
                <h2>${produto.nome}</h2>
                <p><strong>Preço:</strong> R$ ${produto.precoUnitario.toFixed(2)}</p>
                <p><strong>Quantidade:</strong> ${produto.quantidade}</p>
                <p><strong>Categoria:</strong> ${produto.categoria}</p>
                <p class="fabricante"><strong>Fabricante:</strong> ${produto.fabricante.nome}, ${produto.fabricante.endereco}</p>
            `

            produtosContainer.appendChild(produtoCard);
        })
    })
    .catch(error => console.log('Erro ao carregar produtos: ', error));
}

window.onload = consumirAPI;