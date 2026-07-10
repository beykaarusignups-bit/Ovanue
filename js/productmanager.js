import { db, storage } from "./firebase.js";

import {
    collection,
    addDoc,
    serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

import {
    ref,
    uploadBytes,
    getDownloadURL
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-storage.js";

const saveBtn = document.getElementById("saveProduct");

const productName = document.getElementById("productName");

const productBrand = document.getElementById("productBrand");

const productCategory = document.getElementById("productCategory");

const productPrice = document.getElementById("productPrice");

const productStock = document.getElementById("productStock");

const productDescription = document.getElementById("productDescription");

const productFeatured = document.getElementById("productFeatured");

const productImages = document.getElementById("productImages");

saveBtn.addEventListener("click", saveProduct);

async function saveProduct(){

    alert("Save button connected successfully.");

}

// Modal

const modal = document.getElementById("productModal");

const addProductBtn = document.getElementById("addProductBtn");

const closeModalBtn = document.getElementById("closeModal");

addProductBtn.addEventListener("click", () => {

    modal.style.display = "flex";

});

closeModalBtn.addEventListener("click", () => {

    modal.style.display = "none";

});

window.addEventListener("click", (e) => {

    if (e.target === modal) {

        modal.style.display = "none";

    }

});
