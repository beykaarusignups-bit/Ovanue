const modal = document.getElementById("productModal");

const addBtn = document.getElementById("addProductBtn");

const closeBtn = document.getElementById("closeModal");

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
