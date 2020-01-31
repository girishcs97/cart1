import React, { Component } from 'react';
class Search extends Component{

  onSearch=(e)=>{
    this.props.onProductSearch(e.target.value);
  }
  render(){
    return(
      <div className="mt-4">
    <input className="form-control customsearch" type="text" placeholder="Search for Products i.e (Galaxy, Pixel)" aria-label="Search" onChange={this.onSearch} />
    </div>
  )
  }
}

export default Search;