import React, {useState} from "react";

function Item({ name, category }) {
const [isInCart, setIsInCart] = useState(false);

function handleClickAddToCart(){
  setIsInCart(!isInCart);
}

const cartClass= isInCart ? "in-cart" : "";

  return (
    <li className={cartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClickAddToCart} className="add">
        {isInCart ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
