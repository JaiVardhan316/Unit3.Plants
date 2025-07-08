

export default function Plant({ plant, addItems }) {
  return (
    <div className="shopItems">
      <h1>{plant.image}</h1>
      <b>{plant.name}</b>
      <button onClick={() => addItems(plant)}>Add to Cart</button>
    </div>
  );
}
