// Inicializar o carrossel
$(document).ready(function(){
    $('.carousel').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    });
});

// Função para adicionar produtos ao carrinho
function adicionarAoCarrinho(produtoId, produtoNome, produtoPreco) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    carrinho.push({ id: produtoId, nome: produtoNome, preco: produtoPreco });
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    alert("Produto adicionado ao carrinho!");
}

let quantity = 1;

function increase() {
    quantity++;
    document.getElementById("quantity").innerText = quantity;
}

function decrease() {
    if (quantity > 1) {
        quantity--;
        document.getElementById("quantity").innerText = quantity;
    }
}


