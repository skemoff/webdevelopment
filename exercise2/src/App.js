import React from "react";
import Title from './components/Title';
import ShoppingList from './components/ShoppingList';
import styles from './App.module.css';
import './App.css';

/* A ES6 class style stateful component for the shopping list application */
class App extends React.Component {
  constructor(props)
  {
    /* You should call super(props) before any other statement. 
       Otherwise, this.props will be undefined in the constructor, which can lead to bugs.
    */
    super(props);

    this.state = {
      items: [
        { id: 1, value: 'Milk', qty: 5, unit: 'ltr' },
        { id: 2, value: 'Bananas', qty: 6, unit: 'pcs' },
        { id: 3, value: 'Bread', qty: 3, unit: 'x' },
        { id: 4, value: 'Eggs', qty: 16, unit: 'x' }
      ]
    };

  }

  //Chocolate = () => {
  //  this.setState({items: [...this.state.items, {id: 5, value: 'Chocolate', qty: 3, unit: 'bar'}]})
 // }
  addItem =(itemName, quantity) =>{
    this.setState({items: [...this.state.items, {id: this.state.items.length + 1, value: itemName, qty: quantity, unit: 'x'}]})
  }

  render()
  {
    const { applicationDescription, applicationName } = this.props;
    return <div className={ styles.shoppingList }>
      <Title 
        applicationDescription={ applicationDescription }
        applicationName={ applicationName }
      />
      <ShoppingList items={ this.state.items } />
      <button onClick={ ()=> this.addItem('Chocolate',this.getRandomInt(10))}>Chocolate</button>   
      <button onClick={ ()=> this.addItem('Potato',this.getRandomInt(10))}>Potato</button>
      <button onClick={ ()=> this.addItem('Bacon',this.getRandomInt(10))}>Bacon</button>
      <button onClick={ ()=> this.addItem('Lollipops',this.getRandomInt(10))}>Lollipops</button>
    </div>
  }
  getRandomInt(max) {
    return Math.floor(Math.random()*max);
  }
}

export default App;