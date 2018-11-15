import React, { Component } from "react";
// import logo from "./logo.svg";
// import "./App.css";
import AppNavBar from "./components/AppNavBar";
import ShoppingList from "./components/ShoppingList";
import CustomerItems from "./components/CustomerItems";
import { Provider } from "react-redux";
import store from "./store";

class App extends Component {
  state = {
    items: []
  };
  handleAddItem = item => {
    console.log(item);
    const items = [...this.state.items, item];
    this.setState({ items });
  };
  handleRemoveItem = item => {
    const items = this.state.items.filter(c => c.id !== item.id);
    console.log(items);
    this.setState({ items: items });
  };
  handleAddShoppingListItem = item => {
    // console.log(item);
    this.onAddShoppingListItem.addNewShoppingListItems(item);
  };
  render() {
    return (
      <Provider store={store}>
        <div>
          <AppNavBar onAddShoppingListItem={this.handleAddShoppingListItem} />
          <CustomerItems
            items={this.state.items}
            onRemoveItem={this.handleRemoveItem}
          />
          <ShoppingList
            ref={onAddNewShoppingItem => {
              this.onAddShoppingListItem = onAddNewShoppingItem;
            }}
            onAddItem={this.handleAddItem}
          />
        </div>
      </Provider>
    );
  }
  componentDidMount() {}
}

export default App;
