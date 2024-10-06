//main idea of javascript
//1.save the data
//2.generate the html
//3.make it interactive

// create array with object for product infomation

//that comment for my understanding how to store data in js
/*
products =[{
    image :'images/products/athletic-cotton-socks-6-pairs.jpg',
    name : 'Black and Gray Athletic Cotton Socks - 6 Pairs',
    rating :{
        star :4.5,
        count :87
    },
    priceCents:1090
    
},{
    image:'images/products/intermediate-composite-basketball.jpg',
    name :'Intermediate Size Basketball',
    rating :{
        star:4,
        count:127
    },
    priceCents:2095
},{
    image:'images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg',
    name:'Adult sPlain Cotton T-Shirt - 2 Pack',
    rating :{
        star :4.5,
        count:56
    },
    priceCents :799

}]; 
*/
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
            $${(product.priceCents /100).toFixed(2)}
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

            let metchingItem ;
            cart.forEach((item) =>{
                if(productId === item.productId){
                    metchingItem=item;
                }
            });
            if(metchingItem){
                metchingItem.quentity += 1;
            }else{
                cart.push({
                    productId :productId,
                    quentity :1
                });
            }
            //add total cart quentity number on the cart menu

            let cartQuentity =0;
            cart.forEach((item) =>{
                cartQuentity += item.quentity;
            });

            //dom for cart quentity
            document.querySelector('.js-cart-quantity')
                .innerHTML=cartQuentity;
        
        });
    });