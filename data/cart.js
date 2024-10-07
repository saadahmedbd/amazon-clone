export let cart =[{
    //added cart object in default
    //cart object have two elemnt that is product id and quentity
    productId:"e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    quentity:2
},{
    productId:"15b6fc6f-327a-4ec4-896f-486349e85a3d",
    quentity:1
}]; 

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
              quentity :1
          });
      }
   }

export function removefromcart(productId){
    const newCart =[];

    cart.forEach((cartItem) =>{
        if(cartItem.productId !== productId){
            newCart.push(cartItem);
        }
    });
    cart=newCart;
}