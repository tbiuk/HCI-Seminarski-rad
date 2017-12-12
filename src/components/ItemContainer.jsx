import React from 'react';
import '../css/ItemContainer.css';

import Item from './Item';

class ItemContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };

    this.items = props.items;
  }


  render() {
    return (
      <div className="item-container main">
         {this.items.map(function(item){
                    return <Item image={item.image} model={item.model} price={item.price} />;
                  })}         
         });
      </div>
      
    );
  }
}

export default ItemContainer;