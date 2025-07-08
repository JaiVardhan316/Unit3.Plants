function Items({items, addItems, removeItems}) {
    return (
    <>
      <h2>Cart</h2>

      {items.length === 0 ? (
        <p>No Items Added Yet</p>
      ) : (
        <>
          {items.map((item) => {
            return (
              <div key={item.id}>
                <button
                  onClick={() => {
                    removeItems(item);
                  }}
                >
                  -
                </button>{" "}
                <span>
                  {item.name}: {item.quantity} in cart
                </span>{" "}
                <button
                  onClick={() => addItems(item)}
                >
                  +
                </button>
              </div>
            );
          })}
        </>
      )}
    </>
  );
}

export default Items;