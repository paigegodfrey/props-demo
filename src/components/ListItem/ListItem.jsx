/* eslint-disable react/prop-types */
import "./ListItem.css";

function ListItem({food, quantity}) {
  return (
    <div className="ListItem">
      <h1>Item: {food}</h1>
      <h2>Quantity: {quantity}</h2>
    </div>
  );
}

export default ListItem;
