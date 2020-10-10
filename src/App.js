import React from "react";
import "./App.css";
import Header from "./components/Header";
import Recommended from "./components/Recommended";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/search/:searchTerm/">
            <div className="app_page">
              <Sidebar />
              <h1>hello</h1>
            </div>
          </Route>
          <Route path="/">
            <div className="app_page">
              <Sidebar />
              <Recommended />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
