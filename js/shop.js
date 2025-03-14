document.addEventListener("DOMContentLoaded", () => {
    const productList = document.getElementById("product-list");
    const cartCount = document.getElementById("cart-count");

    // Productos (esto podría venir de una API o JSON en el futuro)
    const products = [
        {
            id: 1,
            name: "Figura T-Rex",
            price: 29.99,
            description: "Réplica coleccionable del famoso T-Rex de Jurassic World.",
            image: "../img/productos/t-rex.jpg"
        },
        {
            id: 2,
            name: "Camiseta Jurassic World",
            price: 19.99,
            description: "Camiseta oficial con el logo clásico de Jurassic World.",
            image: "../img/productos/playera.webp"
        },
        {
            id: 3,
            name: "Camiseta Jurassic World",
            price: 19.99,
            description: "Gorra ajustable con diseño exclusivo de Isla Nublar.",
            image: "../img/productos/playera-2.webp"
        },
        {
            id: 4,
            name: "Camiseta Jurassic World",
            price: 19.99,
            description: "Gorra ajustable con diseño exclusivo de Isla Nublar.",
            image: "../img/productos/playera-3.webp"
        },
        {
            id: 5,
            name: "Gorra Isla Nublar",
            price: 14.99,
            description: "Gorra ajustable con diseño exclusivo de Isla Nublar.",
            image: "../img/productos/gorra.webp"
        },
        {
            id: 6,
            name: "Mochila Jurassic Park",
            price: 24.99,
            description: "Mochila de diseño exclusivo de Jurassic Park.",
            image: "../img/productos/mochila.avif"
        },
        {
            id: 7,
            name: "Poster Jurassic World",
            price: 4.99,
            description: "Poster coleccionable con el diseño exclusivo de Velociraptor.",
            image: "../img/productos/poster.webp"
        },
        {
            id: 8,
            name: "Taza",
            price: 10.99,
            description: "Taza de diseño exclusivo de Jurassic World.",
            image: "../img/productos/taza.webp"
        },
        {
            id: 9,
            name: "Juguete Jurassic World",
            price: 19.99,
            description: "Juguete coleccionable con el diseño exclusivo de Therinosaurus.",
            image: "../img/productos/juguete.jpg"
        }
    ];

    // Renderizar productos
    products.forEach(product => {
        const productHTML = `
            <div class="col-md-4 mb-4">
                <div class="card">
                    <img src="${product.image}" class="card-img-top" alt="${product.name}">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">$${product.price.toFixed(2)}</p>
                        <button class="btn btn-primary add-to-cart" data-id="${product.id}">Agregar al carrito</button>
                        <button class="btn btn-link toggle-details">Ver más</button>
                        <p class="product-details d-none">${product.description}</p>
                    </div>
                </div>
            </div>
        `;
        productList.innerHTML += productHTML;
    });

    // Manejo del botón de "Ver más"
    document.querySelectorAll(".toggle-details").forEach(button => {
        button.addEventListener("click", (e) => {
            const details = e.target.nextElementSibling;
            details.classList.toggle("d-none");
        });
    });

    // Cargar carrito desde localStorage
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cartCount.textContent = cart.length;

    // Agregar al carrito
    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", (e) => {
            const productId = e.target.dataset.id;
            const product = products.find(p => p.id == productId);
            cart.push(product);
            localStorage.setItem("cart", JSON.stringify(cart));
            cartCount.textContent = cart.length;
        });
    });
});
