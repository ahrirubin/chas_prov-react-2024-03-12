// Context API för Temahantering (3p)
// Använd Context API för att skapa ett enkelt tema-byte-system.
// Skapa en ThemeContext som innehåller aktuellt tema (t.ex. "light" eller "dark").
// Använd en Provider från ThemeContext i App-komponenten nedanför.
// Skapa två barn-komponenter som använder temat.
// Skapa en tredje barn-komponent som innehåller en knapp som kan växla tema.
// Providern i App-komponenten ska omsluta de tre barn-komponenterna.

import { useState, useContext, createContext } from "react";
import React from "react";

function App() {
  const DarkModeContext = createContext();
  function DarkModeProvider(props) {
    const [darkMode, setDarkMode] = useState(false);
    const toggleDarkMode = () => {
      setDarkMode(!darkMode);
    };
    return (
      <div>
        <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
          {props.children}
        </DarkModeContext.Provider>
      </div>
    );
  }

  function Lightswitch() {
    const { darkMode } = useContext(DarkModeContext);
    return (
      <div
        className={
          darkMode ? `Container Container-dark` : `Container Container-light`
        }
      ></div>
    );
  }

  return (
    <div>
      <div>
        {/* light mode: */}
        <div className=" bg-yellow-100 w-[100px]">Light Mode</div>

        {/* dark mode: */}
        <div className="bg-black text-white w-[100px]">Dark Mode</div>

        <div>
          <button onClick={<Lightswitch></Lightswitch>} className="border-none">
            Lightswitch
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
