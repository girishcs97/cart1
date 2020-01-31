import React,{Component} from 'react';
class Brands extends Component{
    onClickCheckbox=(event)=>{
        const {value,checked }=event.target;   
        this.props.onBrandSelected(value,checked);
      }
    render(){
        const {data}=this.props;
        return(
            <>
             <p className="ml-2 mt-2 brnd">Brands</p>
            {data.map((brand,index)=>
                <div key={index} className="ml-3 mt-3">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id={brand.title} value={brand.brand_id} name="brandtitle" key={index} onClick={this.onClickCheckbox}/>
                    <label className="custom-control-label txtclrb" htmlFor={brand.title}>{brand.title}</label>
                </div>
            </div>
            )}
            </>
        )
    }
}
export default Brands;