import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component.jsx";

const HatsPage = () => (
  <div>
    <h1>Hatas</h1>
  </div>
);
const JacketsPage = () => (
  <div>
    <h1>Hatas</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/hats" component={HatsPage} />
        <Route path="/jackets" component={JacketsPage} />
      </Switch>
    </div>
  );
}

export default App;
