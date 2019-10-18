import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component.jsx";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header-component/header-component";
import SignInSignUpPages from "./pages/sign-in-sign-up-pages/sign-in-sign-up-pages";
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
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInSignUpPages} />
      </Switch>
    </div>
  );
}

export default App;
