import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import cart from '../../images/cart.svg';
class Products extends Component{    
    addItemClick=(item)=>{
        this.props.addItemClick(item);
    }
    render(){
        const {data}=this.props;
        return(
            <>
            {data.map((product,index)=>
                    <div className="col-md-4 mt-4" key={index}>
                        <div className=" boxmdl">
                            <div className="text-center">
                                <div className="imgtrns"><Link to={`/products/${product.product_id}`}><img src={"data:image/jpeg;base64," + product.picture} className="imgalgn" alt="img" id={product.product_id} /></Link></div>
                                <p className="my-2">{product.brand_title}  <span>{product.title}</span></p>
                                </div>
                                <p className="descalgn mx-3">{product.description}</p>
                                <p className="prcalgn mx-3"> <i className="fa fa-inr iconalgn" aria-hidden="true"></i>{" " + product.price.toLocaleString(navigator.language)}</p>
                                <button type="button" className="cartbg text-center" onClick={this.addItemClick.bind(this,product)}>
                                    <img src={cart} alt="logo" className="cartimg" /> <span className="cartxt">ADD TO CART</span>
                                </button>
                            </div>
                        </div>
                        )}
                        </>
        )
    }
}
export default Products;