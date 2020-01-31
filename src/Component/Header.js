import React,{Component} from 'react';
// import './style.scss';
import logo from'../images/icon.svg'; 
import Cart from'../images/headercart.svg';
import {Link} from 'react-router-dom';
class Header extends Component{
    render() {
      const{data}=this.props;
      console.log(data);
      let cartcost=0;
      // let count=cartproducts.length,cartcost=0;
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bgcolor">
        <img src={logo} alt="logo" className="algnimg"/> <Link to="/" ><a className="txtclr">R Cart</a></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <Link to="/cart" >
           <li className="nav-item active">
              <div className="hvr">
               <img src={Cart} alt="img" className="hcrtalgn"/>
               <div className="hvr-content">
               <div className="container-fluid">
                       <div className="row mt-2 mb-2">
                         <div className="col-md-12 text-center">
                         <p className="hvrcnt">Tap on the Cart icon to go into Cart Page</p>
                         <hr className="hrcnt"/>
                           </div>
                       
                {data.map((product)=>{
                  return(
                    <>
                         <div className="col-md-3">
                         <img src={"data:image/jpeg;base64," + product.picture} alt="img" className="imgalgnhvr" />
                         </div>
                         <div className="col-md-6  ml-1">
                         <p className="brndalgnhvr">{product.btitle} {product.title}</p>
                         <p className="brndalgndeschvr">{product.description}</p>
                         <p className="brndalgnqtyhvr">Qty: {product.quantity}</p>
                         <hr className="hrhvr"/>
                         </div>
                         <div className="col-md-2 text-left">
                         <i className="fa fa-inr hvrruppee" aria-hidden="true"><span className="brndalgnprcehvr">{(product.price * product.quantity).toLocaleString(navigator.language)}</span></i>
                         </div>
                    </>
                  )
                })}
                <div className="row">
                                <div className=" col-md-12">
                                    <span className="totalamthvr">Total Amount: </span>
                                    {data.map((product) => {
                                        cartcost = Number(cartcost) + (Number(product.price) * Number(product.quantity))
                                    })
                                    }
                                    <i className="fa fa-inr brndalgnprcehvric" aria-hidden="true"><span className="brndalgnprcehvr">   {cartcost.toLocaleString(navigator.language)}</span></i>
                                </div>
                            </div>
                 </div>
                </div>
               </div>
               </div>
            </li></Link>
            <li className="nav-item">
            <span className="badge badge-light hbgealgn">{data.length}</span>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
export default Header;