import React, { Component } from 'react';
import './App.css';

import ItemContainer from './components/ItemContainer.jsx';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };

    this.items = [{image:"./img/default.jpg", model:"LG G3", price:"1.199 kn"},
    {image:"./img/default.jpg", model:"text2", price:"price2"}];

    this.temp = {image:"./img/default.jpg", model:"text2", price:"price2"};
  }

  addItem(item){
    this.items.push({image:item.image, model: item.model, price:item.price});
    console.log("????");
    return;
  }

  render() {
    return (
      <div className="App">
        <div className="site">
        <button onClick={this.addItem(this.temp)} className="item header">Header</button>
        <div className="item navigation">Navigation</div>
        <ItemContainer className="item main" items={this.items} />
        <footer className="item footer">Footer</footer>
    </div>
      </div>
    );
  }
}

export default App;

