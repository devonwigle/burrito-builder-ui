import React, { Component } from 'react';
import './App.css';
import {getOrders, postOrder} from '../../apiCalls';
import Orders from '../../components/Orders/Orders';
import OrderForm from '../../components/OrderForm/OrderForm';

class App extends Component {
  constructor(props) {
    super()
    this.state = {
      orders: [],
    }
  }

  componentDidMount = () => {
    getOrders()
    .then(data => {this.setState({orders: data.orders})
    })
      .catch(err => console.error('Error fetching:', err));
  }

  createOrder = (newOrder) => {
    postOrder(newOrder)
      .then(() => this.componentDidMount())
      .catch(error => console.log(error))
  }

  render() {
    return (
      <main className="App">
        <header>
          <h1 data-testid="title">Burrito Builder</h1>
          <OrderForm createOrder={this.createOrder} />
        </header>

        <Orders orders={this.state.orders}/>
      </main>
    );
  }
}


export default App;
