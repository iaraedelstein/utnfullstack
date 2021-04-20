const productos = [
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

let cart = [];
const productCart = document.querySelector("#product-cart");
const buyButton = document.querySelector("#buyButton");
const modalBody = document.querySelector("#checkoutModalBody");

/**
 * Load product on page with products data given
 */
const loadProducts = () => {
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
    productPriceContent = document.createTextNode(`$ ${productos[i].precio}`);
    productPrice.appendChild(productPriceContent);
    productImage = document.createElement("img");
    productImage.src = "./images/fast-food.jpeg";
    productImage.className = "product__image";
    addToCart = document.createElement("button");
    addToCart.className = "btn-add-cart btn btn-primary";
    addToCart.onclick = onClickProduct;
    addToCartContent = document.createTextNode("Add to Cart");
    addToCart.appendChild(addToCartContent);
    product.className = "product";
    product.appendChild(productImage);
    product.appendChild(productTitle);
    product.appendChild(productPrice);
    product.appendChild(addToCart);
    prodList.appendChild(product);
  }
};

/**
 * Load modal cart info with total price
 */
const loadModal = () => {
  modalBody.innerHTML = "";

  if (cart.length <= 0) {
    buyButton.disabled = true;
    const noProd = document.createElement("p");
    const noProdMessage = document.createTextNode(
      "No se encontraron productos en el carrito."
    );
    noProd.appendChild(noProdMessage);
    modalBody.appendChild(noProd);
  } else {
    buyButton.disabled = false;
    let total = 0;
    const modalBodyList = document.createElement("ul");
    modalBodyList.className = "modal-body__products";
    modalBody.appendChild(modalBodyList);

    cart.forEach((product) => {
      const li = document.createElement("li");
      li.className = "modal-body__product";
      const spanPrecio = document.createElement("span");
      const spanDescription = document.createElement("span");
      spanDescription.className = "product-name";
      const precioContent = document.createTextNode("$" + product.precio);
      const descriptionContent = document.createTextNode(product.nombre);
      spanPrecio.appendChild(precioContent);
      spanDescription.appendChild(descriptionContent);
      li.appendChild(spanDescription);
      li.appendChild(spanPrecio);
      modalBodyList.appendChild(li);
      total += product.precio;
    });
    const priceTotal = document.createElement("div");
    priceTotal.className = "modal-body__total";
    const spanPrecioTotal = document.createElement("span");
    const spanTotal = document.createElement("span");
    const precioContent = document.createTextNode("$" + total);
    const totalContent = document.createTextNode("Total");
    spanTotal.appendChild(totalContent);
    spanPrecioTotal.appendChild(precioContent);
    priceTotal.appendChild(spanTotal);
    priceTotal.appendChild(spanPrecioTotal);
    modalBody.appendChild(priceTotal);
  }
};

const onClickProduct = (e) => {
  const nombre = e.target.parentElement.childNodes[1].textContent;
  const { precio } = productos.find((p) => p.nombre === nombre);
  cart.push({ nombre: nombre, precio: precio });
  productCart.textContent = parseInt(productCart.textContent) + 1;
  e.target.disabled = true;
};

/**
 * EmptyButton
 */
const emptyCartAndReload = () => {
  restart();
  loadModal();
};

/**
 * BuyButton
 */
const endCheckout = () => {
  restart();
};

const restart = () => {
  cart = [];
  productCart.textContent = 0;
  document
    .querySelectorAll(".btn-add-cart")
    .forEach((e) => (e.disabled = false));
};
