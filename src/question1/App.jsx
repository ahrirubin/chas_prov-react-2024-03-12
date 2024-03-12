// 1. Lista med useState (3p)
// Skapa en komponent som visar en lista med hobbies.
// Användaren ska kunna lägga till en ny hobby via ett
// inputfält och en "Lägg till"-knapp. Varje hobby i listan
// ska ha en "Ta bort"-knapp som tar bort hobbyn från listan.
// Använd useState för att hantera listan.

import { useState } from "react";

let count = 1;

export default function Home() {
  const [hobbies, setHobbies] = useState([]);
  const [input, setInput] = useState("");

  function handleHobby(e) {
    setInput(e.target.value);
  }

  function handleAddHobby() {
    const hobby = {
      id: count++,
      text: input,
    };

    setHobbies([...hobbies, hobby]);
  }

  function handleRemove(id) {
    const filteredHobbies = hobbies.filter((hobby) => hobby.id != id);

    setHobbies(filteredHobbies);
  }

  return (
    <main>
      <h1>Your Hobbies:</h1>
      <p>Skiing</p>
      <p>Shopping</p>
      <p>Birdwatching</p>
      {hobbies.map((hobby) => {
        return (
          <div>
            <p>{hobby.text}</p>
            <button onClick={() => handleRemove(hobby.id)}>Remove</button>
          </div>
        );
      })}
      <input type="text" onChange={handleHobby}></input>
      <button onClick={handleAddHobby}>Add</button>
    </main>
  );
}
