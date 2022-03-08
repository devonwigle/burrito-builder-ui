import React, { Component } from 'react';

class OrderForm extends Component {
  constructor(props) {
    super();
    this.props = props;
    this.state = {
      name: '',
      ingredients: [],
      error: ''
    };
  }

  handleNameChange = (event) => {
    this.setState({error: ''})
    this.setState({name: event.target.value})
  }

  handleIngredientChange = (event) => {
    event.preventDefault();
    this.setState({error: ''})
    if (this.state.ingredients.length > 0) {
      this.setState({ ingredients: [ event.target.name, ...this.state.ingredients]})
    } else {
      this.setState({ingredients: [event.target.name]})
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    if (!this.state.name) {
      this.setState({error: 'Please provide a name for the order'})
    } else if (this.state.ingredients.length === 0) {
      this.setState({error: 'Please add ingredients to your order'})
    } else {
      const newOrder = { name: this.state.name, ingredients: this.state.ingredients }
      this.props.createOrder(newOrder)
      this.clearInputs();
    }
    }

  clearInputs = () => {
    this.setState({name: '', ingredients: []});
  }

  createIngredientButtons = () => {
    const possibleIngredients = ['beans', 'steak', 'carnitas', 'sofritas', 'lettuce', 'queso fresco', 'pico de gallo', 'hot sauce', 'guacamole', 'jalapenos', 'cilantro', 'sour cream'];
    const ingredientButtons = possibleIngredients.map(ingredient => {
      return (
        <button key={ingredient} name={ingredient} onClick={e => this.handleIngredientChange(e)}>
          {ingredient}
        </button>
      )
    });
    return ingredientButtons;
  }

  render() {
    return (
      <form>
        <input
          type='text'
          placeholder='Name'
          name='name'
          value={this.state.name}
          onChange={e => this.handleNameChange(e)}
        />

        { this.createIngredientButtons() }

        <p>Order: { this.state.ingredients.join(', ') || 'Nothing selected' }</p>
        {this.state.error && <p>{this.state.error}</p>}

        <button onClick={e => this.handleSubmit(e)}>
          Submit Order
        </button>
      </form>
    )
  }
}

export default OrderForm;
