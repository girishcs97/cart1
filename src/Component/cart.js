import React, { Component } from 'react';
import emptyCart from '../images/emptycart.png';
import toast from 'toasted-notes' 
import 'toasted-notes/src/styles.css';
import {setCart,decrementCart,removeProduct} from '../Action/action'
import {connect} from 'react-redux';
class Cart extends Component {
    increment=(item)=>{
        this.props.setCartItem(item);
      }
      decrement=(item)=>{
        this.props.decrementItem(item);
      }
      removeProduct=(item)=>{
        this.props.removeItem(item);
      }
    render() {
        let {cartProduct}=this.props;
        let productcost=0;
        return (
            <>{(cartProduct.length) ?
                (<>
                    <div className="mainbar">
                        <div className="container ">
                            <div className="row mt-3">
                                {cartProduct.map((product) =>
                                    <>
                                        <div className="col-md-4 text-center mt-4">
                                            <img src={"data:image/jpeg;base64," + product.picture} alt="img" className="imgalgncart" />
                                        </div>
                                        <div className="col-md-4  mt-5">
                                            <p className="brndalgn"> {product.brand_title} {product.title}</p>
                                            <p className="brndalgndesc">{product.description}</p>
                                            <p className="brndalgnqty">Qty:
                                            <button type="button" className="decalgn ml-2" onClick={this.decrement.bind(this,product)}>-</button>
                                            <span className="ml-2 qtysize"> {product.quantity}</span>
                                            <button type="button" className="decalgn ml-2"  onClick={this.increment.bind(this,product)}>+</button>
                                                <i className="fa fa-inr ml-5" aria-hidden="true">
                                                    <span className="brndprce"> {(product.price).toLocaleString(navigator.language)}</span></i></p>
                                            <button type="button" className="remove mt-1" onClick={this.removeProduct.bind(this,product)}><i className="fa fa-trash" aria-hidden="true"></i><span className="delete">  DELETE</span></button>        
                                                    <hr className="hralgn"/>
                                        </div>
                                        
                                        <div className="col-md-4 mt-5">
                                            <i className="fa fa-inr mt-7" aria-hidden="true"><span className="brndalgnprce"> {(product.price * product.quantity).toLocaleString(navigator.language)}</span></i>
                                        </div>
                                    </>)}
                            </div>
                            <div className="col-md-12">
                                <hr className="hralgntl"/>
                            </div>
                            <div className="row">
                                <div className=" col-md-6 offset-md-5">
                                    <span className="totalamt ml-4">Total Amount</span>
                                    {cartProduct.map((product) => {
                                        productcost = Number(productcost) + (Number(product.price) * Number(product.quantity))
                                    })
                                    }
                                    <i className="fa fa-inr ml-10" aria-hidden="true"><span className="brndalgnprce"> {productcost.toLocaleString(navigator.language)}</span></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mt-4">
                    <div className="boxmdltotal">
                    <p className="totalagn ml-2 mt-3 text-center">TOTAL</p>
                     <hr />
                         <p className="subtol ml-2">Sub-Total
                         <i className="fa fa-inr ml-8 coloricon" aria-hidden="true"><span className="prcetl"> {productcost.toLocaleString(navigator.language)}</span></i></p>
                     
                         <p className="subtol ml-2">Delivery
                         <span  className="prcetl ml-11">Free</span></p>
                     <hr/>
                         <p className="tlamt ml-2">TOTAL AMOUNT
                         <i className="fa fa-inr ml-6" aria-hidden="true"><span className="totalcost"> {productcost.toLocaleString(navigator.language)}</span></i></p>
                      <button type="button" className="cartbg1   text-center">
                      <i className="fa fa-shopping-cart checkoutcrt" aria-hidden="true"><span className="cartxt">CHECKOUT</span></i>
                      </button>
                        </div>
                        
                        </div> 
                </>)
                :(<div className="container">
                <div className="row">
                    <div className="col-md-12 mt-5">
                        <div className="text-center emptycartdesc">
                            <p>Hi There, Your shopping cart is empty.</p>
                            <img src={emptyCart} alt="emptyCart" className="emptycartalgn mt-4" />
                        </div>

                    </div>
                </div>
            </div>) }
            </>
        )
    }
}
const mapStateToProps = (state, ownProps) => ({
    cartProduct:state.Cart.cartItems
  })
const mapDispatchToProps = (dispatch) => {
      return {
        setCartItem:(item)=>dispatch(setCart(item)),
        decrementItem:(item)=>dispatch(decrementCart(item)), 
        removeItem:(item)=>dispatch(removeProduct(item))

      }
   }
export default connect(mapStateToProps,mapDispatchToProps)(Cart);