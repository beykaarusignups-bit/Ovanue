import { db } from "./firebase.js";

import {
    collection,
    addDoc
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const modal = document.getElementById("productModal");

const addBtn = document.getElementById("addProductBtn");
const closeBtn = document.getElementById("closeModal");
const saveBtn = document.getElementById("saveProduct");

const productName = document.getElementById("productName");

// Modal

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

// Test Save

saveBtn.addEventListener("click", async () => {

    try {

        await addDoc(collection(db, "test"), {

            name: productName.value

        });

        alert("Firestore Connected!");

    }

    catch(error){

        console.error(error);

        alert(error.message);

    }

});
