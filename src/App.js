import React, { Component } from 'react';
import './App.css';

import Form from "./components/Form";

const API_KEY = "328be60e7eb70a8ed540d78ec7ee736b";

class App extends Component {

state = {
   recipes: []
}

  getRecipe = async (e) => {
    const recipeName = e.target.elements.recipeName.value
    e.preventDefault(); //the default is a whole page refresh and this prevents that
    const api_call = await fetch
    (`https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipeName}`);

    const data = await api_call.json();
    this.setState({ recipes: data.recipes });
    console.log(this.state.recipes);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>
        <Form getRecipe={this.getRecipe}/>
         {this.state.recipes.map((recipe)=> {
           return <p key ={recipe.recipe_id}>{recipe.title }</p>
         })}
      </div>
    );
  }
}

export default App;
