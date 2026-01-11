const products = [
  { id: 1, name: "Shirt", price: 999, img: "images/shirt.png" },
  { id: 2, name: "Watch", price: 1999, img: "images/watch.png" },
  { id: 3, name: "Earbuds", price: 2499, img: "images/buds.png" }
];

const productDiv = document.getElementById("products");

if (productDiv) {
  products.forEach(p => {
    productDiv.innerHTML += `
      <div class="product">
        <img src="${p.img}">
        <h3>${p.name}</h3>
        <p>₹${p.price}</p>
        <button onclick="viewProduct(${p.id})">View</button>
      </div>
    `;
  });
}

function viewProduct(id) {
  let product = products.find(p => p.id === id);
  localStorage.setItem("product", JSON.stringify(product));
  window.location.href = "product.html";
}

function goToCart() {
  window.location.href = "cart.html";
}

function goToOrders() {
  window.location.href = "orders.html";
}


