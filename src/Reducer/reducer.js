import toast from 'toasted-notes' 
import 'toasted-notes/src/styles.css';
let initialState={
    cartItems:[]
}
export default function (state=initialState,action){
    switch(action.type){
        case 'FETCH_CART_PRODUCTS':
            {
                return {
                    ...state,
                    cartItems:action.payload
                }
            }
        case 'SET_CART_PRODUCT':
            {
                let cItems=JsonCopy(state.cartItems);
                let isMatch = false;
                for(let i=0;i<cItems.length;i++){
                    if(cItems[i].product_id === action.payload.product_id)
                    {
                        isMatch=true;
                        if(cItems[i].quantity < cItems[i].stock){
                            cItems[i].quantity=cItems[i].quantity + 1;
                            toast.notify("Item Added Succesfully", {
                                position: "top",
                                duration: 2000 
                              });
                        }
                        break;
                    }
                }
                if(!isMatch){
                    action.payload.quantity=1;
                    cItems.push(action.payload)
                    toast.notify("Item Added Succesfully", {
                        position: "top",
                        duration: 2000 
                      });
                }
                localStorage.setItem('productList',JSON.stringify(cItems));
                return {
                    ...state,
                    cartItems:cItems
                }
                
        }
        case 'DECREMENT_PRODUCT':
            {
            let cItems=JsonCopy(state.cartItems);
            for(let i=0;i<cItems.length;i++){
                if(cItems[i].product_id === action.payload.product_id)
                {
                    if(cItems[i].quantity>0){
                        cItems[i].quantity=cItems[i].quantity - 1
                    }
                    break;
                }
            }
            localStorage.setItem('productList',JSON.stringify(cItems));
                return {
                    ...state,
                    cartItems:cItems
                }
        }
        case 'REMOVE_PRODUCT':
            {
            let cItems=JsonCopy(state.cartItems);
            let newItems=cItems.filter((cart)=>cart.product_id !== action.payload.product_id)
            localStorage.setItem('productList',JSON.stringify(newItems));
            toast.notify("Item Deleted Succesfully", {
                position: "top",
                duration: 2000 
              });
                return {
                    ...state,
                    cartItems:newItems
                }
            }
        default:{
            return state;
        }
    }
    
}

function JsonCopy(source){
    return JSON.parse(JSON.stringify(source));
}