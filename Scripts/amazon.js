//main idea of javascript
//1.save the data
//2.generate the html
//3.make it interactive



//get a variable out of a file
//1.add type ="module" attribute
//2.export
//3.import
//benefit of module
//1.avoid naming conflict
//2.modules=better way to organize our code
import {cart,addToCart} from '../data/cart.js'; //.. mean it;s outside of javascripts amazon project
import { products } from '../data/products.js';
import { formatCurrency } from './utilis/money.js';
let productHTML =''; 
products.forEach((product) => {
    productHTML +=` <div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${product.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${product.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${product.rating.stars *10}.png">
            <div class="product-rating-count link-primary">
              87
            </div>
          </div>

          <div class="product-price">
            $${formatCurrency(product.priceCents)}
          </div>

          <div class="product-quantity-container">
            <select>
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary js-add-to-cart"
          data-product-id =" ${product.id}"> 
            Add to Cart
          </button>
        </div>`

});


 //function of cartquentity increase
 function cartquentity(){
    
  let cartQuentity =0;
    cart.forEach((item) =>{
        cartQuentity += item.quentity;
    });

    //dom for cart quentity
    document.querySelector('.js-cart-quantity')
        .innerHTML=cartQuentity;
 }
//data attribute syntex data-anyname="product.anyObject" 
// CREATE RESPONSIBLE TO HTML

document.querySelector(".js-product-grid").
    innerHTML=productHTML

// create a interactive cart dom
//when we add any product on the cart then how we understand which product
//we want to add
//solution id data attribute
//-is jsut another html attribute
// ALLOW us to attach any information to an element
document.querySelectorAll('.js-add-to-cart')
    .forEach((button) =>{  //iterate thorugh the cart button
        button.addEventListener('click',() =>{
            //dataset property do all the data atrribute that is attach to the button 
            const productId=button.dataset.productId; //product-id attribute  convert to  productName
            
            //if product already exit in cart then increase in product quentity
            addToCart(productId);

       
            //add total cart quentity number on the cart menu
            cartquentity();

        
        });
    });