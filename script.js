// PRODUCTS VARIABLE
var productsState = [
  {
    id: 1,
    name: "Puma Multicolor",
    price: 925.99,
    rates: 5,
    image:
      "https://www.tradeinn.com/f/13758/137587173/puma-future-rider-play-on-trainers.jpg",
  },
  {
    id: 2,
    name: "Puma Grey",
    price: 1700.00,
    rates: 3,
    image:
      "https://www.tradeinn.com/f/13805/138052727/puma-city-rider-trainers.jpg",
  },
  {
    id: 1,
    name: "Puma White-Fizzy Lime-Puma Royal",
    price: 1600,
    rates: 2,
    image:
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/371149/75/fnd/ZAF/w/1000/h/1000/fmt/png",
  },
  {
    id: 1,
    name: "Puma Grey",
    price: 660.99,
    rates: 1,
    image:
      "https://www.tradeinn.com/f/13805/138052726/puma-city-rider-trainers.jpg",
  },
  {
    id: 1,
    name: "Puma White-Puma Black",
    price: 1500.00,
    rates: 1,
    image:
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/384530/01/fnd/ZAF/w/1000/h/1000/fmt/png",
  },
  {
    id: 1,
    name: "Puma Black-Puma White-Puma Silver",
    price: 796.49,
    rates: 5,
    image:
      "https://www.tradeinn.com/f/13805/138052407/puma-future-rider-play-on.jpg",
  },
  {
    id: 1,
    name: "Puma Brown",
    price:679.99,
    rates: 4,
    image:
      "https://www.tradeinn.com/f/13805/138052765/puma-future-rider-tiny-trainers.jpg",
  },
  {
    id: 1,
    name: "Puma Blue",
    price: 689.99,
    rates: 3,
    image:
      "https://www.tradeinn.com/f/13815/138158294/puma-future-rider-tiny-junior-trainers.jpg",
  },
];

let cartArray = [];

var products = document.getElementById("products");
var brnie = document.getElementById("brnie");
var mnodisplay = document.getElementById("mnodisplay");
var totalcount = document.getElementById("totalcount");

function homeDisplayProducts() {


  products.innerHTML = "";
  // loop into productsState and display
  for (let i = 0; i < productsState.length; i++) {
    products.innerHTML += `
  
  <div class="product">
      <div class="product__img">
          <img
            src=${productsState[i].image}
            alt=""
          />
      </div>
          <div class="product__name">${productsState[i].name}</div>
            <div class="product__rate">
              ${"<span>*</span>".repeat(productsState[i].rates)}
            </div>
            <div class="product__price">R <span>${
              productsState[i].price
            }</span></div> 
              <button onclick="odwa(${i})">+ ADD TO CART</button> 
        </div>
  
  `
  }
  brnie.innerHTML = cartArray.length;
  
}

function calculate() {
  let total = 0

  for (let i = 0; i < cartArray.length; i++) {
    total += cartArray[i].price
  }

  totalcount.innerHTML = total
}

function removecl(i) {
  cartArray.splice(i, 1);

  calculate();

  mno();

  saveToStorge()

  readLocalStorage()

  homeDisplayProducts();
}

function odwa(i) {
  document.getElementById("brnie").innerHTML = cartArray.length;
  cartArray.push(productsState[i]);

  calculate();

  mno();

  saveToStorge()

  readLocalStorage()

  homeDisplayProducts();
}

function mno() {
  mnodisplay.innerHTML = ""

  for (let i = 0; i < cartArray.length; i++) {
    mnodisplay.innerHTML += `
    
    <div class="product" id="vuko">
      <div class="product">
      <div class="product__img">
        <img
          src=${cartArray[i].image}
          alt=""
        />
    </div>
        <div class="product__name">${cartArray[i].name}</div>
          <div class="product__rate">
            ${"<span>*</span>".repeat(cartArray[i].rates)}
          </div>
          <div class="product__price">R <span>${cartArray[i].price}</span></div>
          <button onclick="removecl(${i})">x Remove</button>  
      </div>`;
  }
}

function saveToStorge() {
  let data = JSON.stringify(cartArray)
  localStorage.setItem('cartArray',data)
  
}

function readLocalStorage() {
 let data = JSON.parse(localStorage.getItem('cartArray'))
 cartArray = data 
}

mno();

// CALL THE DISPLAY FUNCTION
homeDisplayProducts();
