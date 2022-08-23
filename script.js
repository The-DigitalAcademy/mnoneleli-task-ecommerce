// PRODUCTS VARIABLE
var productsState = [
    {
      id: 1,
      name: 'Macbook Pro',
      price: 28000,
      rates: 5,
      image:
        'https://www.istore.co.za/media/catalog/product/m/a/macbook_pro_space_grey-1_2.png?format=jpeg',
    },
    {
      id: 2,
      name: 'Iphone 13 Pro',
      price: 23000,
      rates: 3,
      image:
        'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
    },
    {
      id: 1,
      name: 'Iphone 6 C',
      price: 7000,
      rates: 2,
      image:
        'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80',
    },
    {
      id: 1,
      name: 'HP Laptop',
      price: 8000,
      rates: 1,
      image:
        'https://images.unsplash.com/photo-1589561084283-930aa7b1ce50?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80',
    },
    {
      id: 1,
      name: 'Dell Laptop',
      price: 4000,
      rates: 1,
      image:
        'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    },
    {
      id: 1,
      name: 'Macbook Pro',
      price: 15000,
      rates: 5,
      image:
        'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    },
    {
      id: 1,
      name: 'Playstation 5',
      price: 20000,
      rates: 4,
      image:
        'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    },
    {
      id: 1,
      name: 'PS 4 Joystick',
      price: 1200,
      rates: 3,
      image:
        'https://images.unsplash.com/photo-1592840496694-26d035b52b48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=825&q=80',
    },
  ]
  
  
  // LINK JS TO HTML ELEMENT
  const products = document.getElementById('products')
  
  
  // DISPLAY PRODUCTS IN HOME PAGE
  function homeDisplayProducts() {
      products.innerHTML = ""
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
                  ${'<span>*</span>'.repeat(productsState[i].rates)}
                </div>
                <div class="product__price">R <span>${productsState[i].price}</span></div> 
                  <button>+ ADD TO CART</button> 
            </div>
      
      `
      
    }
  }
  
  
  // CALL THE DISPLAY FUNCTION
  homeDisplayProducts()