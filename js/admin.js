import { db, storage } from "./firebase.js";

console.log("admin.js loaded");

const modal = document.getElementById("productModal");
const addBtn = document.getElementById("addProductBtn");
const closeBtn = document.getElementById("closeModal");
const saveBtn = document.getElementById("saveProduct");

console.log({
    modal,
    addBtn,
    closeBtn,
    saveBtn
});

addBtn.addEventListener("click", () => {
    console.log("Add Product clicked");
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

saveBtn.addEventListener("click", () => {
    console.log("SAVE clicked");
    alert("SAVE button works!");
});
