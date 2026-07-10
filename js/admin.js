import { db, storage } from "./firebase.js";

import {
    collection,
    addDoc,
    getDocs,
    deleteDoc,
    updateDoc,
    getDoc,
    setDoc,
    doc,
    serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

import {
    ref,
    uploadBytes,
    getDownloadURL
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-storage.js";

let editingProductId = null;

import {
    collection,
    addDoc,
    getDocs,
    deleteDoc,
    updateDoc,
    getDoc,
    doc,
    serverTimestamp
}
from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";


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
const homeAnnouncement = document.getElementById("homeAnnouncement");

const homeSubtitle = document.getElementById("homeSubtitle");

const homeTitle = document.getElementById("homeTitle");

const homeDescription = document.getElementById("homeDescription");

const homeButton = document.getElementById("homeButton");

const homeButtonLink = document.getElementById("homeButtonLink");

const homeImage = document.getElementById("homeImage");

const saveHomepageBtn = document.getElementById("saveHomepage");
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

async function saveProduct(){

    try{
let imageUrls = [];

const files = productImages.files;

for(const file of files){

    const imageRef = ref(
        storage,
        "products/" + Date.now() + "_" + file.name
    );

    await uploadBytes(imageRef,file);

    const url = await getDownloadURL(imageRef);

    imageUrls.push(url);

}

        
        const productData = {

    name: productName.value.trim(),

    brand: productBrand.value.trim(),

    category: productCategory.value,

    price: Number(productPrice.value),

    stock: Number(productStock.value),

    description: productDescription.value.trim(),

    featured: productFeatured.value === "true",

    images: imageUrls

};

        if(editingProductId){

            await updateDoc(
                doc(db,"products",editingProductId),
                productData
            );

            alert("Product Updated!");

        }

        else{

productData.images = imageUrls;
            
            productData.createdAt = serverTimestamp();

            await addDoc(
                collection(db,"products"),
                productData
            );

            alert("Product Added!");

        }

        editingProductId = null;

        clearForm();

        modal.style.display = "none";

        loadProducts();

    }

    catch(error){

        console.error(error);

        alert(error.message);

    }

}


// ======================
// CLEAR FORM details
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

               <td>

<img
src="${product.images?.[0] || 'assets/images/no-image.png'}"
style="
width:70px;
height:90px;
object-fit:cover;
border-radius:8px;
">

</td>
                <td>${product.name}</td>

                <td>${product.brand}</td>

                <td>${product.category}</td>

                <td>$${product.price}</td>

                <td>${product.stock}</td>

                <td>

   <button
onclick="window.editProduct('${doc.id}')">
Edit
</button>

    <button
        class="delete-btn"
        onclick="window.deleteProduct('${doc.id}')">

        Delete

    </button>

</td>

            </tr>

        `;

    });

}
async function deleteProduct(id){

    const confirmDelete = confirm("Delete this product?");

    if(!confirmDelete){

        return;

    }

    try{

        await deleteDoc(doc(db,"products",id));

        loadProducts();

    }

    catch(error){

        console.error(error);

        alert(error.message);

    }

}
window.deleteProduct = deleteProduct;

async function editProduct(id){

    const snap = await getDoc(
        doc(db,"products",id)
    );

    const product = snap.data();

    editingProductId = id;

    productName.value = product.name;

    productBrand.value = product.brand;

    productCategory.value = product.category;

    productPrice.value = product.price;

    productStock.value = product.stock;

    productDescription.value = product.description;

    productFeatured.value =
        product.featured.toString();

    modal.style.display = "flex";

}
window.editProduct = editProduct;

// ======================
// HOMEPAGE
// ======================

if (saveHomepageBtn) {

    loadHomepage();

    saveHomepageBtn.addEventListener("click", saveHomepage);

}

async function loadHomepage() {

    try {

        const snap = await getDoc(doc(db, "homepage", "content"));

        if (!snap.exists()) return;

        const data = snap.data();

        homeAnnouncement.value = data.announcement || "";
        homeSubtitle.value = data.heroSubtitle || "";
        homeTitle.value = data.heroTitle || "";
        homeDescription.value = data.heroDescription || "";
        homeButton.value = data.heroButton || "";
        homeButtonLink.value = data.heroLink || "";

    }

    catch (error) {

        console.error(error);

    }

}

async function saveHomepage() {

    try {

        let heroImageUrl = "";

        const current = await getDoc(doc(db, "homepage", "content"));

        if (current.exists()) {

            heroImageUrl = current.data().heroImage || "";

        }

        if (homeImage.files.length > 0) {

            const file = homeImage.files[0];

            const imageRef = ref(
                storage,
                "homepage/" + Date.now() + "_" + file.name
            );

            await uploadBytes(imageRef, file);

            heroImageUrl = await getDownloadURL(imageRef);

        }

        await setDoc(doc(db, "homepage", "content"), {

            announcement: homeAnnouncement.value,

            heroSubtitle: homeSubtitle.value,

            heroTitle: homeTitle.value,

            heroDescription: homeDescription.value,

            heroButton: homeButton.value,

            heroLink: homeButtonLink.value,

            heroImage: heroImageUrl

        });

        alert("Homepage Updated!");

    }

    catch (error) {

        console.error(error);

        alert(error.message);

    }

}
