import React,{Component} from 'react';
class Pagination extends Component{
    render(){
        const {pageNum}= this.props;
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-4 offset-md-4">
                        <ul className="pagination ml-5 mt-4">
                            <li className="page-item"><a className="page-link curpointer" id="1" onClick={this.props.onClick}>Previous</a></li>
                            <li className="page-item"><a className={`page-link curpointer ${(pageNum===1)? 'bgactive':''}`} id="1" onClick={this.props.onClick}>1</a></li>
                            <li className="page-item"><a className={`page-link curpointer ${(pageNum===2)? 'bgactive':''}`} id="2" onClick={this.props.onClick}>2</a></li>
                            <li className="page-item"><a className="page-link curpointer" id="2" onClick={this.props.onClick}>Next</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
export default Pagination;