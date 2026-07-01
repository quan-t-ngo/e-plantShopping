import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./CartSlice";

const plantsData = [
  { id: 1, name: "Aloe Vera", price: 10, category: "Succulents" },
  { id: 2, name: "Snake Plant", price: 15, category: "Succulents" },
  { id: 3, name: "Peace Lily", price: 20, category: "Flowering" },
  { id: 4, name: "Rose", price: 25, category: "Flowering" },
  { id: 5, name: "Bamboo Palm", price: 30, category: "Indoor" },
  { id: 6, name: "Spider Plant", price: 12, category: "Indoor" },
];

const ProductList = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.items);

  const isAdded = (id) => cart.some(item => item.id === id);

  return (
    <div>
      <h1>Plants</h1>

      {["Succulents", "Flowering", "Indoor"].map(category => (
        <div key={category}>
          <h2>{category}</h2>
          <div style={{ display: "flex", gap: "10px" }}>
            {plantsData
              .filter(p => p.category === category)
              .map(plant => (
                <div key={plant.id}>
                  <img src="https://via.placeholder.com/100" alt={plant.name} />
                  <h3>{plant.name}</h3>
                  <p>${plant.price}</p>

                  <button
                    onClick={() => dispatch(addToCart(plant))}
                    disabled={isAdded(plant.id)}
                  >
                    {isAdded(plant.id) ? "Added" : "Add to Cart"}
                  </button>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
