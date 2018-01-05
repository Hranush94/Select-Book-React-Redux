import React,{ Component } from 'react';
import {connect} from "react-redux";
class BookDetail extends Component{
  render(){
    if(!this.props.book)
    {return <div> select book to get started </div>}
    return (
      
      <div>
<h3>
  details for :
</h3>
    <div>Tittle:
      { this.props.book.title}
    </div>  <div>Pages:
      { this.props.book.pages}
    </div>
  </div>
  
    )
  }
  
}

// below function is a connect between redux and react
function mapSteteToProps(state) {
  return {
    book: state.activeBook
  };
}

export default connect(mapSteteToProps)(BookDetail);