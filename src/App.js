import React,{Component} from 'react';
import {HashRouter as Router} from 'react-router-dom';
import Routes from './Component/routes.js';
import {connect} from 'react-redux';


import Header from './Component/Header';
import {fetchCart} from './Action/action';
class App extends Component{
  componentDidMount(){
    this.props.fetchAllCart();

}
  render(){
    return(
      <Router basename={"/"}>       
        <Header data={this.props.cartProduct}/>
        <Routes />       
      </Router>
     
    )
  }
}
const mapStateToProps = (state, ownProps) => ({
  cartProduct:state.Cart.cartItems
})
const mapDispatchToProps = (dispatch) => {
    return {
      fetchAllCart:()=>dispatch(fetchCart()),
    }
 }
export default connect(mapStateToProps,mapDispatchToProps)(App);
