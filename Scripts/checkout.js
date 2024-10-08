import { cart,removefromcart} from "../data/cart.js"; 
//accese to full product detils 
import { products } from "../data/products.js";
import { formatCurrency } from "./utilis/money.js";

let cartSummaryHTML ='';
cart.forEach((cartItem) =>{
    const productId=cartItem.productId;
    //generate all product information to productdata 

    let metchingProduct;
    products.forEach((product) =>{
        if(product.id === productId){
            metchingProduct=product;
        }
    });
    cartSummaryHTML +=`<div class="cart-item-container">
            <div class="delivery-date">
              Delivery date: Tuesday, June 21
            </div>

            <div class="cart-item-details-grid">
              <img class="product-image"
                src="${metchingProduct.image}">

              <div class="cart-item-details">
                <div class="product-name">
                  ${metchingProduct.name}
                </div>
                <div class="product-price">
                    $${formatCurrency(metchingProduct.priceCents)}
                </div>
                <div class="product-quantity"> 
                  <span>
                    Quantity: <span class="quantity-label">${cartItem.quentity}</span>
                  </span>
                  <span class="update-quantity-link link-primary">
                    Update
                  </span>
                  <span class="delete-quantity-link link-primary js-delete-link">
                    Delete
                  </span>
                </div>
              </div>

              <div class="delivery-options">
                <div class="delivery-options-title">
                  Choose a delivery option:
                </div>
                <div class="delivery-option">
                  <input type="radio" checked
                    class="delivery-option-input"
                    name="delivery-option-${metchingProduct.id}">
                  <div>
                    <div class="delivery-option-date">
                      Tuesday, June 21
                    </div>
                    <div class="delivery-option-price">
                      FREE Shipping
                    </div>
                  </div>
                </div>
                <div class="delivery-option">
                  <input type="radio"
                    class="delivery-option-input"
                    name="delivery-option-${metchingProduct.id}">
                  <div>
                    <div class="delivery-option-date">
                      Wednesday, June 15
                    </div>
                    <div class="delivery-option-price">
                      $4.99 - Shipping
                    </div>
                  </div>
                </div>
                <div class="delivery-option">
                  <input type="radio"
                    class="delivery-option-input"
                    name="delivery-option-${metchingProduct.id}">
                  <div>
                    <div class="delivery-option-date">
                      Monday, June 13
                    </div>
                    <div class="delivery-option-price">
                      $9.99 - Shipping
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>`;
});
document.querySelector('.js-order-summary')
    .innerHTML=cartSummaryHTML;

//delete quentity dom
document.querySelectorAll('.js-delete-link')
    .forEach((link) =>{
        link.addEventListener('click', () =>{
            const productId =link.dataset.productId;
            removefromcart(productId);
            console.log(cart);
        });
    });