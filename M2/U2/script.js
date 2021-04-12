var productos = [
  {
    nombre: "harina",
    precio: 35,
  },
  {
    nombre: "pan",
    precio: 25,
  },
  {
    nombre: "papa",
    precio: 52,
  },
  {
    nombre: "palta",
    precio: 55,
  },
  {
    nombre: "fideos",
    precio: 85,
  },
  {
    nombre: "aceite",
    precio: 350,
  },
  {
    nombre: "sopa",
    precio: 86,
  },
  {
    nombre: "mermelada",
    precio: 108,
  },
  {
    nombre: "porotos",
    precio: 69,
  },
  {
    nombre: "lentejas",
    precio: 85,
  },
  {
    nombre: "mandarina",
    precio: 43,
  },
  {
    nombre: "banana",
    precio: 79,
  },
  {
    nombre: "leche de almendras",
    precio: 145,
  },
  {
    nombre: "papel higiénico",
    precio: 147,
  },
  {
    nombre: "lavandina",
    precio: 55,
  },
  {
    nombre: "alcohol en gel",
    precio: 123,
  },
  {
    nombre: "shampoo",
    precio: 400,
  },
  {
    nombre: "arroz",
    precio: 66,
  },
  {
    nombre: "harina",
    precio: 35,
  },
  {
    nombre: "salsa de tomate",
    precio: 35,
  },
];

var cart = [];

function loadProducts() {
  let prodList = document.createElement("ul");
  prodList.className = "products";
  document.getElementsByClassName("product-container")[0].appendChild(prodList);
  for (let i = 0; i < productos.length; i++) {
    product = document.createElement("li");
    productTitle = document.createElement("h3");
    productTitle.className = "capitalize";
    productTitleContent = document.createTextNode(productos[i].nombre);
    productTitle.appendChild(productTitleContent);
    productPrice = document.createElement("p");
    productPriceContent = document.createTextNode(productos[i].precio);
    productPrice.appendChild(productPriceContent);
    productImage = document.createElement("img");
    productImage.src = "./images/fast-food.jpeg";
    productImage.className = "product__image";
    addToCart = document.createElement("button");
    addToCart.className = "btn btn-primary";
    addToCart.onclick = function (e) {
      const nombre = e.target.parentElement.childNodes[1].textContent;
      const precio = parseInt(e.target.parentElement.childNodes[2].textContent);
      cart.push({ nombre: nombre, precio: precio });
      const productCart = document.getElementById("product-cart");
      productCart.textContent = parseInt(productCart.textContent) + 1;
      this.disabled = true;
    };
    addToCartContent = document.createTextNode("Add to Cart");
    addToCart.appendChild(addToCartContent);
    product.className = "product";
    product.appendChild(productImage);
    product.appendChild(productTitle);
    product.appendChild(productPrice);
    product.appendChild(addToCart);
    prodList.appendChild(product);
  }
}

function loadCheckoutModal() {
  const modalBody = document.getElementById("checkoutModalBody");
  modalBody.innerHTML = " ";
  let total = 0;
  cart.forEach((product) => {
    const p = document.createElement("p");
    const pContent = document.createTextNode(
      product.nombre + " $" + product.precio
    );
    p.appendChild(pContent);
    modalBody.appendChild(p);
    total += product.precio;
  });

  const p = document.createElement("p");
  const pContent = document.createTextNode("Total: $" + total);
  p.appendChild(pContent);
  modalBody.appendChild(p);
}
