
export let cart = JSON.parse(localStorage.getItem('cart')); //perse convert to string cart value add in local storage

//i face a problem that is 
//when I added a element in cart then cart will be updated but 
//when I click cart cart did not sawing product.problem(1)
// delete button did not work.problem(2) 
if (!cart){
    cart=[{
        //added cart object in default
        //cart object have two elemnt that is product id and quentity
        productId:"e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
        quentity:2,
        delivaryOptionsId :'1'
    },{
        productId:"15b6fc6f-327a-4ec4-896f-486349e85a3d",
        quentity:1,
        delivaryOptionsId :'2'
    }]; 
}


//save local storage
function saveToStorage(){
    localStorage.setItem('cart', JSON.stringify(cart));
}


//function of cartquentity
export function addToCart(productId){
    let metchingItem ;
      cart.forEach((cartItem) =>{
          if(productId === cartItem.productId){
              metchingItem=cartItem;
          }
      });
      if(metchingItem){
          metchingItem.quentity += 1;
      }else{
          cart.push({
              productId :productId,
              quentity :1,
              delivaryOptionsId:'1'
          });
      }
      saveToStorage();
   }
  

   //remove product function
export function removefromcart(productId){
    const newCart =[];

    cart.forEach((cartItem) =>{
        if(cartItem.productId !== productId){
            newCart.push(cartItem);
        }
    });
    cart=newCart;

    saveToStorage();
}

//make delivery option interactive
//update delivery time
export function updateDeliveryOption (productId, delivaryOptinsId){
    let metchingItem;

    cart.forEach((cartItem) =>{
        if(productId === cartItem.productId){
            metchingItem=cartItem;
        }
      });
    metchingItem.delivaryOptinsId=delivaryOptinsId;
    
    saveToStorage();
}