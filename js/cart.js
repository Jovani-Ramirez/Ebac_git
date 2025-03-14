document.addEventListener("DOMContentLoaded", () => {
    const cartCount = document.getElementById("cart-count");
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cartCount.textContent = cart.length; // Actualiza el número de productos en el carrito
});
