import React, { Component } from "react";
import Recipes from "./components/recipes";
import Calendar from "./components/calendar";
import CheckList from "./components/checkList";
import NavBar from "./components/navBar";
import { Route, Redirect, Switch } from "react-router";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <main className="container">
          <Switch>
            {/* <Route path="/login" component={LoginForm} />
            <Route path="/register" component={RegisterForm} /> */}
            <Route path="/recipes" component={Recipes} />
            <Route path="/calendar" component={Calendar} />
            <Route path="/checklist" component={CheckList} />
            {/* <Route path="/not-found" component={NotFound} /> */}
            <Redirect from="/" exact to="/recipes" />
            {/* <Redirect to="/not-found" /> */}
          </Switch>
        </main>

        {/* <RecipeBoard />
        <CheckList title="Grocery List" /> */}
      </div>
    );
  }
}

export default App;
