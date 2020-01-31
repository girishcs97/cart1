import React,{Component} from 'react';
import Brands from './Brands/brands.js'
import {connect} from 'react-redux';
import Products from "./Products/products.js"
import GetData from  '../services.js';
import Search from './Common/search.js';
import Pagination from './pagination.js';
import loader from '../images/loader.gif'
import {setCart} from '../Action/action.js'
class Home extends Component{
    state={
        pageNumberPrds:1,
        pageNumberBrnds:1,
        pageSizePrds:6,
        pageSizeBrnds:4,    
        products:[],
        brands:[],
        searchValue:"",
        selectedBrands:[],
        isLoading:true

    }
    componentDidMount(){
        this.fetchAllProducts();
        this.fetchAllBrands();
    }
    fetchAllProducts=()=>{
        const {pageNumberPrds,pageSizePrds,searchValue,selectedBrands}=this.state;
        const params={
            page:pageNumberPrds,
            pageSize:pageSizePrds,
        }
        if(searchValue.length){
          params.search=searchValue
        }
        if(selectedBrands.length){
          params.brands=selectedBrands.join(",");
        }
        GetData('Products',params).then((response)=>{
           this.setState({
               products:response.data.d,
               isLoading:false
           })
        }).catch(()=>{
        });
    } 
    fetchAllBrands=()=>{
        const {pageNumberBrnds,pageSizeBrnds}=this.state;
        const params={
            page:pageNumberBrnds,
            pageSize:pageSizeBrnds
        }
        GetData('brands',params).then((response)=>{
            this.setState({
                brands:response.data.d
            })
         }).catch(()=>{
         });
    } 
   onBrandSelected=(brandId,ischeck)=>{
    console.log(brandId)
    let SelectedBrands = this.state.selectedBrands;
    if (ischeck) {
      SelectedBrands.push(brandId)
    } else {
      SelectedBrands = SelectedBrands.filter((item) => item !== brandId)
    }
    this.setState({
      selectedBrands: SelectedBrands,
      pageNumberPrds:1
    },()=>{
        this.fetchAllProducts();
    })
   }
   onProductSearch=(value)=>{
     console.log(value);
     this.setState({
       searchValue:value,
       pageNumberPrds:1
     },()=>{
       this.fetchAllProducts()
     })
   }
   onClickAddToCart=(item)=>{
     this.props.setCartItem(item);
   }
   handleClick = (event) => {
     this.setState({isLoading:true})
    const {pageSizePrds}=this.state;
    const current = Number(event.target.id);
    this.setState({pageNumberPrds:current});
    debugger;
    const params={
        page:Number(event.target.id),
        pageSize:pageSizePrds
    }
    GetData('Products',params).then((response)=>{
        this.setState({
            products:response.data.d,
            isLoading:false
        })
    }).catch(()=>{
    });
   }
    render(){
        const {brands,products}=this.state
        return(
            <>
            <div className="container-fluid">
            {this.state.isLoading ? <img src={loader} className="loader" alt="loader" />:
                <div className="row">
                    <div className="sidebar mt-4 sidebarlyt">
                        <Brands data={brands} onBrandSelected={this.onBrandSelected}/>
                    </div>
                    <div className="mainbar">
                        <div className="container">
                        <Search onProductSearch={this.onProductSearch}/>
                            <div className="row">
                                <Products data={products} addItemClick={this.onClickAddToCart}/>
                            </div>
                            <Pagination onClick={this.handleClick} pageNum={this.state.pageNumberPrds}/>
                        </div>
                    </div>
                </div>}
            </div>
            </>
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
export default connect(mapStateToProps,mapDispatchToProps)(Home);