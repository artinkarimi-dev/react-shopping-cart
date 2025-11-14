import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shop from "./Shop/shop";
import Purchased from "./Shop/purchased";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Specifications: [],
    };
  }

  handleAddProduct = (product) => {
    this.setState((prev) => ({
      Specifications: [...prev.Specifications, product],
    }));
  };

  handleRemoveProduct = (id) => {
    this.setState((prev) => ({
      Specifications: prev.Specifications.filter((p) => p.id !== id),
    }));
  };

  render() {
    return (
      <Router>
        <Routes>

          <Route
            path="/"
            element={
              <Shop
                addToPurchased={this.handleAddProduct}
                Specifications={this.state.Specifications}
              />
            }
          />

          <Route
            path="/purchased"
            element={
              <Purchased
                Specifications={this.state.Specifications}
                sendTrash={this.handleRemoveProduct}
              />
            }
          />

        </Routes>
      </Router>
    );
  }
}
