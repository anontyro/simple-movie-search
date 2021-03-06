import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import rootReducer from "./redux";
import HomePage from "./pages/Home";
import FavouritesPage from "./pages/Favourites";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/favourites" component={FavouritesPage} />
    </Provider>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
