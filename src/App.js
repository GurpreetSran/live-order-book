import React from 'react';
import OrderBook from './OrderBook';
import uuid from 'uuid';

import './App.css';

class App extends React.Component {

  state = {
    quantity: 0,
    price: 0,
    type: 'sell',
    cancel: 2,
    orderBook: [
      {
        'userId': 1,
        'orderQuantity': 3.5,
        'price': 303,
        'type': 'buy'
      },
      {
        'userId': 2,
        'orderQuantity': 4.5,
        'price': 403,
        'type': 'buy'
      },
      {
        'userId': 3,
        'orderQuantity': 1.5,
        'price': 303,
        'type': 'sell'
      },
      {
        'userId': 4,
        'orderQuantity': 0.5,
        'price': 301,
        'type': 'buy'
      }
    ]
}

  addOrder(){
    const order =  {
      userId: uuid(),
      orderQuantity: this.state.quantity,
      price: this.state.price,
      type: this.state.type
    }

    this.setState((state) => {
      return {orderBook: [...state.orderBook, order]}
    });
  }
  
  cancelOrder(){
    const removedOrder = this.state.orderBook.filter(order => order.userId !== Number(this.state.cancel));
    this.setState((state) => {
      return { orderBook: [...removedOrder] }
    })
  }

  setValue(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  render(){
    return (
      <div className="App">
        <div> 
          Place New Order: 
          <br />
          Quantity
          <input name="quantity" onChange={(e) => this.setValue(e)} type="number" value={this.state.quantity}/>
          <br />
          Price
          <input name="price" onChange={(e) => this.setValue(e)} type="number" value={this.state.price}/>
          <br />
          Type
          <input name="type" onChange={(e) => this.setValue(e)} type="text" value={this.state.type}/>
          <br />
          <button onClick={() => this.addOrder()}>Add Order</button>  
          <br />
          <br />
          Cancel Order: 
          <input name="cancel" onChange={(e) => this.setValue(e)} type="number" value={this.state.cancel}/>
          <button onClick={() => this.cancelOrder()}>Cancel Order</button>  
        </div>
        <header className="App-header">
            <OrderBook orderBook={this.state.orderBook} />
        </header>
      </div>
    );
  }
}

export default App;
