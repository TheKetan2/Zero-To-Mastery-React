import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component.jsx";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header-component/header-component";
import SignInSignUpPages from "./pages/sign-in-sign-up-pages/sign-in-sign-up-pages";
import { auth } from "./firebase/firebase.utils";

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

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillMount() {
    //this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInSignUpPages} />
        </Switch>
      </div>
    );
  }
}

export default App;
