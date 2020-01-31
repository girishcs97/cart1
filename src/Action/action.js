export const fetchCart=()=>{
     let productList = JSON.parse(localStorage.getItem('productList')) || [];
     return{
        type:'FETCH_CART_PRODUCTS',
        payload:productList
     }  
}
export const setCart=(item)=>{
    return{
        type:'SET_CART_PRODUCT',
        payload:item
    }
}

export const decrementCart=(item)=>{
    return{
        type:'DECREMENT_PRODUCT',
        payload:item
    }
}
export const removeProduct=(item)=>{
    return{
        type:'REMOVE_PRODUCT',
        payload:item
    }
}