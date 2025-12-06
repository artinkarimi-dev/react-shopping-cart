import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shop from "./Shop/shop";
import Purchased from "./Shop/purchased";

export default function App() {

  const [Specifications, setSpecifications] = useState([])


  const handleAddProduct = (product) => {

    setSpecifications((prev) => (
      [...prev, product]
    ))

  };

  const handleRemoveProduct = (id) => {

    setSpecifications((prev) => prev.filter((p) => p.id !== id))

  };

  return (
    <Router>
      <Routes>

        <Route
          path="/"
          element={
            <Shop
              addToPurchased={handleAddProduct}
              Specifications={Specifications}
            />
          }
        />

        <Route
          path="/purchased"
          element={
            <Purchased
              Specifications={Specifications}
              sendTrash={handleRemoveProduct}
            />
          }
        />

      </Routes>
    </Router>
  )
}
