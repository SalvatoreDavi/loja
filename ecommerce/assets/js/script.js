document.addEventListener('DOMContentLoaded', function() {
    const buyButtons = document.querySelectorAll('.buy-button');
    const cartItems = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    let totalPrice = 0;
  
    buyButtons.forEach(button => {
      button.addEventListener('click', function() {
        const product = this.getAttribute('data-product');
        const price = parseFloat(this.getAttribute('data-price'));
  
        // Adiciona o produto ao carrinho
        const listItem = document.createElement('li');
        listItem.textContent = `${product} - $${price.toFixed(2)}`;
        cartItems.appendChild(listItem);
  
        // Atualiza o preço total
        totalPrice += price;
        totalPriceElement.textContent = totalPrice.toFixed(2);
      });
    });
  });
  