import React, { useState } from "react";
import "./index.css";
import data from "./components/data";
import Title from "./Title";
import BirthdayList from "./components/BirthdayList";

function App() {
  const [birthdays, setBirthdays] = useState(data);
  const [showButton, setShowButton] = useState(true);

  function handleDelete() {
    setBirthdays([]);
  }
  function restore() {
    setBirthdays(data);
  }
  function deleteItem(id) {
    setBirthdays((prev) => {
      return prev.filter((item) => {
        return item.id !== id;
      });
    });
  }

  return (
    <div className="App">
      <Title count={birthdays.length} />
      <BirthdayList birthdays={birthdays} deleteItem={deleteItem} />
      {birthdays.length > 0 && (
        <button className="btn" onClick={handleDelete}>
          Clear All
        </button>
      )}
      {birthdays.length === 0 && (
        <button className="btn" onClick={restore}>
          Reset
        </button>
      )}
      
    </div>
  );
}

export default App;
