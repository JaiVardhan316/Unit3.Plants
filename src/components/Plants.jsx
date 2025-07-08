import Plant from "./Plant";

function Plants({ plants, addItems }) {
  return (
    <>
      <h2>Plants</h2>
      <>
        {plants.map((plant) => (
          <Plant key={plant.id} plant={plant} addItems={addItems} />
        ))}
      </>
    </>
  );
}

export default Plants;
