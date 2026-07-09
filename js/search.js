const products = [

    {
        brand: "CHARLES & KEITH",
        name: "Elora Shoulder Bag",
        price: "$139",
        image: "assets/images/products/bag1.jpg"
    },

    {
        brand: "ALDO",
        name: "Structured Tote",
        price: "$169",
        image: "assets/images/products/bag2.jpg"
    },

    {
        brand: "STEVE MADDEN",
        name: "Mini Crossbody",
        price: "$125",
        image: "assets/images/products/bag3.jpg"
    },

    {
        brand: "CHARLES & KEITH",
        name: "Classic Top Handle",
        price: "$149",
        image: "assets/images/products/bag4.jpg"
    }

];

const searchInput = document.getElementById("searchInput");
const results = document.getElementById("searchResults");

function renderProducts(list){

    results.innerHTML = "";

    list.forEach(product=>{

        results.innerHTML += `

            <a href="product.html" class="product-card">

                <img src="${product.image}">

                <div class="product-info">

                    <p class="brand">${product.brand}</p>

                    <h3>${product.name}</h3>

                    <p class="price">${product.price}</p>

                </div>

            </a>

        `;

    });

}

renderProducts(products);

searchInput.addEventListener("keyup",()=>{

    const keyword = searchInput.value.toLowerCase();

    const filtered = products.filter(product=>

        product.name.toLowerCase().includes(keyword) ||

        product.brand.toLowerCase().includes(keyword)

    );

    renderProducts(filtered);

});
