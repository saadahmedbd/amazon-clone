import { cart,removefromcart, updateDeliveryOption} from "../data/cart.js"; 
//accese to full product detils 
import { products } from "../data/products.js";
import { formatCurrency } from "./utilis/money.js";
import { delivaryOptions } from "../data/deliveryOption.js";

import dayjs  from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
// dayjs is default export
//- another way of exporting,
//-we can use it when we only want to export 1 thing



//import external liberay from internet.
//external libarya means , someOne already create some essential element for our project.
//that code we cart do we can import this code in our code
//today we can import dayjs that help to create day format
// every external libary have documentation


 //we use esm code bcz we can export code in our project.
//if we use only code then we can use script tag that give us name comflict
//every external do not have esm version

const today =dayjs();
const deliveryDate =today. add(7, "days")//dayjs have add method that need two parameter
 console.log(deliveryDate.format('dddd, MMMM D ')); //format method check documentation
;


function renderordersummary(){
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

        //deliverydate heading 
        const delivaryOptinsId =cartItem.delivaryOptionsId;

        let delivaryOption;
        delivaryOptions.forEach((option) =>{
          if(option.id ===delivaryOptinsId){
            delivaryOption=option;
          }
        });

        const today =dayjs();
        const delivaryDate =today.add(
          delivaryOption.delivaryDays,
          'days'
        );
        const dateString =delivaryDate.format(
          'dddd, MMMM D'
        );

      

        cartSummaryHTML +=`
        <div class="cart-item-container 
          js-cart-item-container-${metchingProduct.id}">
                <div class="delivery-date">
                  Delivery date: ${dateString}
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
                  ${delivaryOptionsHTML(metchingProduct, cartItem)}
                    
                  
                  </div>
                </div>
              </div>`;
    });
    document.querySelector('.js-order-summary')
        .innerHTML=cartSummaryHTML;

    //delete product dom
    document.querySelectorAll('.js-delete-link')
        .forEach((link) =>{
            link.addEventListener('click', () =>{
                const productId =link.dataset.productId;
                removefromcart(productId);
                
                const container =document.querySelector(
                    `.js-cart-item-container-${productId}`
                );
                container.remove();
                //this not working sometime .solution?
                //solution is go to inspect on checkout then console
                //then type localStorage.clear()
            });
        });

    //main idea of JS
    //1.save the data
    //2.generate the html
    //3.Make it interactive



    //delivary option function
    //step
    //1.loop through deliveryOption
    //2.for each option generate some html
    //3.combined the html together

    function delivaryOptionsHTML(metchingProduct, cartItem){
      let html ='';
      
      delivaryOptions.forEach((deliveryOption) => {
        const today =dayjs();
        const delivaryDate =today.add(
          deliveryOption.delivaryDays,
          'days'
        );
        const dateString =delivaryDate.format(
          'dddd, MMMM D'
        );

        const priceString =deliveryOption.priceCents===0
          ? 'FREE'
          : `$${formatCurrency(deliveryOption.priceCents)} -`;

          const isChecked = deliveryOption.id ===
          cartItem.delivaryOptionsId;
        
        html +=` 
        <div class="delivery-option js-delivary-option"
        data-product-id="${metchingProduct.id}"
        data-delivary-option-id="${deliveryOption.id}">
            <input type="radio"
            ${isChecked ? 'checked' :''}
                class="delivery-option-input"
                name="delivery-option-${metchingProduct.id}">
              <div>
              <div class="delivery-option-date">
                ${dateString}
              </div>
              <div class="delivery-option-price">
                ${priceString} Shipping
              </div>
              </div>
        </div>`
      });
      return html;
    }

    document.querySelectorAll('.js-delivary-option')
    .forEach((element) =>{
        element.addEventListener('click', () =>{
          const{productId, delivaryOptinsId} =element.dataset;
          updateDeliveryOption(productId, delivaryOptinsId);
          renderordersummary();
        });
      });

}
renderordersummary();