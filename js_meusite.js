let cart = [];

function adicionarAoCarrinho(produto) {
    cart.push(produto);
    atualizarCarrinho();
}

function atualizarCarrinho() {
    const lista = document.getElementById('cart-items');
    const contador = document.getElementById('cart-count');
    lista.innerHTML = '';

    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = item + " ❌";
        li.onclick = function() {
            removerDoCarrinho(index);
        };
        lista.appendChild(li);
    });

    contador.textContent = cart.length;
}

function removerDoCarrinho(index) {
    cart.splice(index, 1);
    atualizarCarrinho();
}

function abrirCarrinho() {
    document.getElementById('cart-area').style.display = 'block';
}

function fecharCarrinho() {
    document.getElementById('cart-area').style.display = 'none';
}

function filtrarProdutos() {
    const input = document.getElementById('search-input').value.toLowerCase();
    const produtos = document.querySelectorAll('.product-card');

    produtos.forEach(produto => {
        const nome = produto.getAttribute('data-name').toLowerCase();
        produto.style.display = nome.includes(input) ? 'block' : 'none';
    });
}
