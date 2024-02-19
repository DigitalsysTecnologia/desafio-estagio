import { createContext, useState } from "react";

export const MissionContext = createContext({});

export const MissionProvider = ({ children }) => {
  return (
    <MissionContext.Provider value={{}}>{children}</MissionContext.Provider>
  );
};
