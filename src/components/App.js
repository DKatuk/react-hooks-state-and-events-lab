import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

// For, TOGGLE Feature, replaced 'false' in const appClass = false ? "App dark" : "App light"
// (DarkMode) which is a state variable that can be toggled between true and false

  const [darkMode, setDarkMode] = useState(false);
  const appClass = darkMode ? "App dark" : "App light"

  function handleClickDarkMode(){
    setDarkMode(!darkMode);
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClickDarkMode}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
