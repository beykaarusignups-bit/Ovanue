const products = [

    {
        id:1,
        brand:"CHARLES & KEITH",
        name:"Elora Shoulder Bag",
        price:"$139",
        image:"assets/images/products/bag1.jpg"
    },

    {
        id:2,
        brand:"ALDO",
        name:"Structured Tote",
        price:"$169",
        image:"assets/images/products/bag2.jpg"
    },

    {
        id:3,
        brand:"STEVE MADDEN",
        name:"Mini Crossbody",
        price:"$125",
        image:"assets/images/products/bag3.jpg"
    },

    {
        id:4,
        brand:"CHARLES & KEITH",
        name:"Classic Top Handle",
        price:"$149",
        image:"assets/images/products/bag4.jpg"
    }

];

const grid = document.querySelector(".shop-grid");

products.forEach(product=>{

    grid.innerHTML += `

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
