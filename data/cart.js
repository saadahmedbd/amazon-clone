export const cart =[]; 

//function of cartquentity
export function addToCart(productId){
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
   }