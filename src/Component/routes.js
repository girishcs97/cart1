import React,{Component} from "react";
import {Route,Switch} from "react-router-dom";
// import {connect} from "react-redux";
import {ConnectedRouter} from 'react-router-redux';
import store from '../Store/store.js';
import history from '../history.js';    
import Cart from './cart.js';
import Details from './details.js';
import Home from './home.js';
class Routes extends Component{
    render(){
        return(
            <ConnectedRouter store={store} history={history}>
                <Switch>
                    <Route component={Home} exact={true} path={'/'} />
                    <Route component= {Details}  path={'/products/:id'} />
                    <Route component={Cart} path={'/cart'} />
                </Switch>
            </ConnectedRouter>
        )
    }
}
export default Routes;
