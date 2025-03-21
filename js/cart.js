document.addEventListener("DOMContentLoaded", () => {
    const cartCount = document.getElementById("cart-count");
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cartCount.textContent = cart.length; // Actualiza el número de productos en el carrito
});


document.addEventListener("DOMContentLoaded", () => {
    const cartList = document.getElementById("cart-list");
    const cartTotal = document.getElementById("cart-total");
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    function renderCart() {
        cartList.innerHTML = "";
        let total = 0;
        cart.forEach((item, index) => {
            total += item.price * (item.quantity || 1);
            cartList.innerHTML += `
                <div class="card mb-3" style="max-width: 540px;">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="${item.image}" class="img-fluid rounded-start" alt="${item.name}">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">${item.name}</h5>
                                <p class="card-text">${item.description}</p>
                                <p class="card-text"><small class="text-muted">Precio: $${item.price.toFixed(2)}</small></p>
                                <div class="d-flex align-items-center gap-2">
                                    <button class="btn btn-outline-secondary" onclick="updateQuantity(${index}, -1)">-</button>
                                    <span class="fw-bold">${item.quantity || 1}</span>
                                    <button class="btn btn-outline-secondary" onclick="updateQuantity(${index}, 1)">+</button>
                                    <button class="btn btn-danger" onclick="removeItem(${index})">Eliminar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        });
        cartTotal.textContent = `$${total.toFixed(2)}`;
    }

    window.updateQuantity = (index, change) => {
        if (!cart[index].quantity) cart[index].quantity = 1;
        cart[index].quantity += change;
        if (cart[index].quantity <= 0) cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        renderCart();
    };

    window.removeItem = (index) => {
        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        renderCart();
    };

    renderCart();
});

