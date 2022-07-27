import React from "react";
import emojipedia from "./emojipedia";
import Entry from "./Entry";

function listEntry(emoji) {
  return (
    <Entry
      key={emoji.id}
      name={emoji.name}
      emoji={emoji.emoji}
      desc={emoji.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(listEntry)}</dl>
    </div>
  );
}

export default App;
