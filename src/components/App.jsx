import React from "react";
import Header from "./Header";
import emojipedia from "../emojipedia";
import cardReader from "./cardReader";

function App() {
  return (
    <div>
      <Header />

      <dl className="dictionary">{emojipedia.map(cardReader)};</dl>
    </div>
  );
}

export default App;
