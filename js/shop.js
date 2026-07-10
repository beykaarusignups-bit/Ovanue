import { db } from "./firebase.js";

import {
    collection,
    getDocs
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const grid = document.querySelector(".shop-grid");

async function loadProducts() {

    if (!grid) return;

    grid.innerHTML = "";

    const snapshot = await getDocs(collection(db, "products"));

    snapshot.forEach((doc) => {

        const product = doc.data();

        grid.innerHTML += `

            <a href="product.html?id=${doc.id}" class="product-card">

                <img src="${product.images[0]}" alt="${product.name}">

                <div class="product-info">

                    <p class="brand">${product.brand}</p>

                    <h3>${product.name}</h3>

                    <p class="price">$${product.price}</p>

                </div>

            </a>

        `;

    });

}

loadProducts();
