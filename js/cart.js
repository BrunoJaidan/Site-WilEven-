// Array para armazenar os produtos do carrinho
let cart = [];

// Função para adicionar produto ao carrinho
function addProductToCart(productName, productPrice) {
  // Adiciona o produto ao array do carrinho
  cart.push({ name: productName, price: productPrice });

  // Atualiza o carrinho na tela
  updateCartDisplay();
}

// Função para atualizar a exibição do carrinho no HTML
function updateCartDisplay() {
  const cartItemsList = document.getElementById('cart-items');
  const totalElement = document.getElementById('total');

  // Limpar itens antigos do carrinho
  cartItemsList.innerHTML = '';

  // Adiciona os itens atuais ao carrinho na tela
  let total = 0;
  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - R$ ${item.price.toFixed(2)}`;
    cartItemsList.appendChild(li);
    total += item.price;
  });

  // Exibe o total no carrinho
  totalElement.textContent = `Total: R$ ${total.toFixed(2)}`;
}
