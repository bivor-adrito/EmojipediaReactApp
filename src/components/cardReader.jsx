import React from "react";
import Card from "./Card";

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

export default cardReader;
