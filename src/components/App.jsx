import React from "react";
import Header from "./Header";
import Card from "./Card";
import emojipedia from "../emojipedia";

function cardReader(emojipedia) {
  return (
    <Card
      key={emojipedia.key}
      emoji={emojipedia.emoji}
      name={emojipedia.name}
      meaning={emojipedia.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <Header />

      <dl className="dictionary">{emojipedia.map(cardReader)};</dl>
    </div>
  );
}

export default App;
