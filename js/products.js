import { db } from "./firebase.js";

import {
    doc,
    getDoc
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const params = new URLSearchParams(window.location.search);

const productId = params.get("id");

loadProduct();

async function loadProduct(){

    const snap = await getDoc(doc(db,"products",productId));

    if(!snap.exists()){

        alert("Product not found.");

        return;

    }

    const product = snap.data();

    document.getElementById("productImage").src = product.images[0];

    document.getElementById("productBrand").textContent = product.brand;

    document.getElementById("productName").textContent = product.name;

    document.getElementById("productPrice").textContent = "$" + product.price;

    document.getElementById("productDescription").textContent = product.description;

}
