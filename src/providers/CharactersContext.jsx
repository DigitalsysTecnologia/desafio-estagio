import { createContext, useState, useEffect } from "react";
import { characters } from "../services/database";

export const CharacterContext = createContext({});

export const CharacterProvider = ({ children }) => {
  const [pers, setPers] = useState([{}]);

  return (
    <CharacterContext.Provider value={{ pers, setPers }}>
      {children}
    </CharacterContext.Provider>
  );
};
