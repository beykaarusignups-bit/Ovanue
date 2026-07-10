console.log("Loaded");

const modal = document.getElementById("productModal");
const addBtn = document.getElementById("addProductBtn");
const closeBtn = document.getElementById("closeModal");

console.log(modal);
console.log(addBtn);
console.log(closeBtn);

addBtn.onclick = () => {

    modal.style.display = "flex";

};

closeBtn.onclick = () => {

    modal.style.display = "none";

};

window.onclick = (e) => {

    if(e.target === modal){

        modal.style.display = "none";

    }

};
