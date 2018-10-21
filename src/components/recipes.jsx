import React, { Component } from "react";
import RecipeRow from "./recipeRow";
import RecipeModalForm from "./recipeModalForm";
import * as recipeAPI from "../services/fakeRecipeService";

class Recipes extends Component {
  state = {
    isModalVisible: false,
    selectedRecipe: {
      _id: "",
      name: "",
      ingredients: [],
      link: ""
    },
    recipes: []
  };

  componentDidMount() {
    this.setState({ recipes: [...recipeAPI.getRecipes()] });
  }

  handleClick = () => {};

  handleAdd = () => {
    console.log("Add me!");
    this.setState({ selectedRecipe: {}, isModalVisible: true });
  };

  handleDelete = recipeName => {
    const recipes = this.state.recipes.filter(r => r.name !== recipeName);
    this.setState({ recipes });
  };

  handleEdit = recipeName => {
    const index = this.state.recipes.map(r => r.name).indexOf(recipeName);
    const selectedRecipe = { ...this.state.recipes[index] };
    this.setState({ selectedRecipe, isModalVisible: true });
  };

  handleClose = () => {
    this.setState({ isModalVisible: false });
  };

  handleSave = () => {
    if (Object.keys(this.state.selectedRecipe).length > 0) {
      try {
        const recipe = recipeAPI.saveRecipe(this.state.selectedRecipe);
        const recipes = [...this.state.recipes];
        if (this.state.recipes.map(r => r._id).indexOf(recipe._id) === -1) {
          recipes.push(recipe);
        }

        this.setState({
          recipes,
          isModalVisible: false
        });
      } catch (error) {
        console.log("There was an error saving.");
      }
    } else {
      this.setState({ isModalVisible: false });
    }
  };

  handleEditSave = () => {
    console.log("Edit & Save me!");
  };

  handleNameChange = event => {
    const recipe = { ...this.state.selectedRecipe };
    recipe.name = event.target.value;
    this.setState({ selectedRecipe: recipe });
  };

  handleIngredientsChange = event => {
    const recipe = { ...this.state.selectedRecipe };
    recipe.ingredients = event.target.value.split(",");
    this.setState({ selectedRecipe: recipe });
  };

  handleLinkChange = event => {
    const recipe = { ...this.state.selectedRecipe };
    recipe.link = event.target.value;
    this.setState({ selectedRecipe: recipe });
  };

  render() {
    const { name, ingredients, link } = this.state.selectedRecipe;

    return (
      <React.Fragment>
        <div className="container">
          <h3 className="title">Recipe Board</h3>
          <table className="table">
            <tbody>
              {this.state.recipes.map(r => (
                <RecipeRow
                  key={r._id}
                  name={r.name}
                  ingredients={r.ingredients}
                  onAdd={this.handleAdd}
                  onDelete={this.handleDelete}
                  onEdit={this.handleEdit}
                />
              ))}
              <RecipeRow
                key="Add new recipe..."
                isNewRow={true}
                onAdd={this.handleAdd}
              />
            </tbody>
          </table>
        </div>
        <RecipeModalForm
          visible={this.state.isModalVisible}
          name={name}
          ingredients={ingredients}
          link={link}
          onSave={this.handleSave}
          onNameChange={this.handleNameChange}
          onIngredientsChange={this.handleIngredientsChange}
          onLinkChange={this.handleLinkChange}
          onClose={this.handleClose}
        />
      </React.Fragment>
    );
  }
}

export default Recipes;
