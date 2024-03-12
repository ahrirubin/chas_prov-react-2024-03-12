// 3. Custom Hook för counter (3p)
// Skapa en custom hook, useCounter, som hanterar en räknare.
// Denna hook ska tillhandahålla två funktioner: en för att öka
// räknarens värde och en för att minska den. Skriv kod i App-komponenten
// nedanför som använder din custom hook och visar räknarens värde
// samt två knappar för att öka och minska värdet.
import { useState } from "react";

function UseCounter() {
  return <h1>Your counter:</h1>;
}

function App() {
  const [count, setCount] = useState(100);

  // kunde inte få dessa funktioner att fungera utan att lägga dem här
  function AddCount() {
    return <button onClick={() => setCount((count) => count + 1)}>+1</button>;
  }
  function DecreaseCount() {
    return <button onClick={() => setCount((count) => count - 1)}>-1</button>;
  }

  return (
    <div>
      <UseCounter />
      {count}
      <AddCount />
      <DecreaseCount></DecreaseCount>
    </div>
  );
}

export default App;
