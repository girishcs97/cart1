import React, { Component } from 'react'
import GetData from '../services.js'
import cart from '../images/cart.svg'
import {connect} from 'react-redux';
import {setCart} from '../Action/action.js'
import loader from '../images/loader.gif'
class Display extends Component {
    state={
        data:{},
        isLoading:true
    }
    componentDidMount() {
        let pid=window.location.href.lastIndexOf("/") + 1;
        let prdtid=window.location.href.substr(pid);
        const params={
            product_id:prdtid
        }
        GetData('Products',params).then((response) => {
            this.setState({ 
                data: response.data.d,
                isLoading:false
             },()=>{
               
            });
          })
        
        }
        addItemClick=(item)=>{
            this.props.setCartItem(item);
        }
    render() {
        const {data}=this.state;
        const {picture,brand_title,title,price,description} =data;
        return (
                <div className="container">
                     {this.state.isLoading ? <img src={loader} className="loader" alt="loader" />:
                    <div className="row mt-9">
                        <div className="col-md-5 text-center">
                            <img src={"data:image/jpeg;base64," + picture} alt="img" className="displayimage"/>
                        </div>
                        <div className="col-md-6 mt-4">
                            <p className="displaybrand">{brand_title} {title}</p>
                            <p className="displaydesc">{description}</p>
                            <p className="detaildesc text-justify">Presenting you the {brand_title} {title}.  
                            It features a battery that charges fast and lasts all day long. 
                            It also comes with three years of security and OS updates included. It’s everything you love about {brand_title} – in a phone.</p>
                            <p className="displayprice"> <i className="fa fa-inr" aria-hidden="true" />{price}</p>
                            <button className="cartbgdisplay text-center mt-3"  onClick={this.addItemClick.bind(this,data)}>
                                <img src={cart} alt="logo" className="cartimg" /> <span className="cartxt">ADD TO CART</span>           </button>
                        </div>
                    </div>}
                </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => ({
    cartProduct:state.Cart.cartItems
  })
  const mapDispatchToProps = (dispatch) => {
      return {
        setCartItem:(item)=>dispatch(setCart(item))
      }
   }
  export default connect(mapStateToProps,mapDispatchToProps)(Display);