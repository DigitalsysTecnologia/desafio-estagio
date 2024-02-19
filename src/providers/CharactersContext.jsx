import { createContext, useState } from "react";

export const CharacterContext = createContext({});

export const CharacterProvider = ({ children }) => {
  return (
    <CharacterContext.Provider value={{}}>{children}</CharacterContext.Provider>
  );
};
