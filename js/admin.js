import { db } from "./firebase.js";

import {
    collection,
    addDoc,
    getDocs,
    serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";


// ======================
// ELEMENTS
// ======================

const modal = document.getElementById("productModal");

const addBtn = document.getElementById("addProductBtn");
const closeBtn = document.getElementById("closeModal");
const saveBtn = document.getElementById("saveProduct");

const productName = document.getElementById("productName");
const productBrand = document.getElementById("productBrand");
const productCategory = document.getElementById("productCategory");
const productPrice = document.getElementById("productPrice");
const productStock = document.getElementById("productStock");
const productDescription = document.getElementById("productDescription");
const productFeatured = document.getElementById("productFeatured");
const productImages = document.getElementById("productImages");
const productTable = document.getElementById("productTable");

// ======================
// MODAL
// ======================

addBtn.addEventListener("click", () => {

    modal.style.display = "flex";

});

closeBtn.addEventListener("click", () => {

    modal.style.display = "none";

});

window.addEventListener("click", (e) => {

    if (e.target === modal) {

        modal.style.display = "none";

    }

});

// ======================
// SAVE PRODUCT
// ======================

saveBtn.addEventListener("click", saveProduct);

async function saveProduct() {

    try {

        if (
            productName.value.trim() === "" ||
            productBrand.value.trim() === "" ||
            productPrice.value.trim() === ""
        ) {

            alert("Please fill in the required fields.");

            return;

        }

        await addDoc(collection(db, "products"), {

            name: productName.value.trim(),

            brand: productBrand.value.trim(),

            category: productCategory.value,

            price: Number(productPrice.value),

            stock: Number(productStock.value),

            description: productDescription.value.trim(),

            featured: productFeatured.value === "true",

            images: [],

            createdAt: serverTimestamp()

        });

        alert("Product added successfully!");

        clearForm();

        modal.style.display = "none";

    }

    catch(error){

        console.error(error);

        alert(error.message);

    }

}

// ======================
// CLEAR FORM
// ======================

function clearForm(){

    productName.value = "";

    productBrand.value = "";

    productCategory.selectedIndex = 0;

    productPrice.value = "";

    productStock.value = "";

    productDescription.value = "";

    productFeatured.value = "false";

    productImages.value = "";

}
loadProducts();

async function loadProducts() {

    productTable.innerHTML = "";

    const snapshot = await getDocs(collection(db, "products"));

    snapshot.forEach((doc) => {

        const product = doc.data();

        productTable.innerHTML += `

            <tr>

                <td>—</td>

                <td>${product.name}</td>

                <td>${product.brand}</td>

                <td>${product.category}</td>

                <td>$${product.price}</td>

                <td>${product.stock}</td>

                <td>

                    <button class="edit-btn" data-id="${doc.id}">

                        Edit

                    </button>

                    <button class="delete-btn" data-id="${doc.id}">

                        Delete

                    </button>

                </td>

            </tr>

        `;

    });

}
