import React from 'react';

const API_KEY = "328be60e7eb70a8ed540d78ec7ee736b";

class Recipe extends React.Component {
  state = {
    activeRecipe: []
  }
  componentDidMount = async () => {
    const title = this.props.location.state.recipe;
    const req = await fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=${title}`);

    const res = await req.json();
    console.log(res.recipes[0]);
  }
  render() {
      console.log(this.props);
    return (
      <div> Recipe Component </div>
    );
  }
};

export default Recipe;
