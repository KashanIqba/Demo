// Shopping cart array to hold cart items
let cart = [];

// Function to add product to the cart
function addToCart(id, name, price) {
    // Check if product already exists in cart
    let product = cart.find(item => item.id === id);
    
    if (product) {
        product.quantity++;
    } else {
        cart.push({ id, name, price, quantity: 1 });
    }

    updateCartCount();
    displayCart();
}

// Function to update cart counter
function updateCartCount() {
    let cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    document.getElementById('cart-count').textContent = cartCount;
}

// Function to display the cart items (Console for now)
function displayCart() {
    console.clear();
    console.log("Cart Items:");
    cart.forEach(item => {
        console.log(`${item.name} - $${item.price} x ${item.quantity}`);
    });
}

// Adding event listeners to "Add to Cart" buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (e) => {
        const id = e.target.getAttribute('data-id');
        const name = e.target.getAttribute('data-name');
        const price = e.target.getAttribute('data-price');
        addToCart(id, name, price);
    });
});
