import { useState } from "react";
import PLANTS from "./data";
import Plants from "./components/Plants";
import Items from "./components/Items";
import "./App.css";

export default function App() {
  const [items, setItems] = useState([]);

  const addItems = (plant) => {
    const itemExists = items.find((i) => i.id === plant.id);
    if (itemExists) {
      setItems(
        items.map((item) =>
          item.id === plant.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      const newItem = { ...plant, quantity: 1 };
      setItems([...items, newItem]);
    }
  };

  const removeItems = (itemToRemove) => {
    setItems(
      items
        .map((item) =>
          item.id === itemToRemove.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <>
      <h1>Proper Plants</h1>
      <div className="shop">
        <Plants plants={PLANTS} addItems={addItems} />
        <div className="cart">
          <Items items={items} addItems={addItems} removeItems={removeItems} />
        </div>
      </div>
    </>
  );
}
