const modal = document.getElementById("productModal");

document
.getElementById("addProductBtn")
.onclick = () => {

    modal.style.display = "flex";

};

document
.getElementById("closeModal")
.onclick = () => {

    modal.style.display = "none";

};

window.onclick = function(e){

    if(e.target === modal){

        modal.style.display = "none";

    }

};
import "./productManager.js";
