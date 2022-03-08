import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import "./App.css";
import { createStore } from "redux";
import { Provider } from "react-redux";
import userReducer from "./store/reducers/user";
import "./App.css";

const store = createStore(userReducer);

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
