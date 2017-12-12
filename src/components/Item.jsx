import React from 'react';
import '../css/Item.css';

class Item extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: null,
      };
    }
  
    render() {
      return (
        <div className="element">
            <img src={this.props.image} />
            <div>Model: {this.props.model}</div>
            <div>Cijena: {this.props.price}</div>
        </div>
      );
    }
  }
  
  export default Item;