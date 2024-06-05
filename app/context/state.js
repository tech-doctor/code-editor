import { createContext, useContext, useState } from "react";


const Context = createContext();

export function StateProvider({ children }) {
    const [selectedLanguageId, setSelectedLanguageId] = useState(19);
 
    
    return (
      <Context.Provider value={[selectedLanguageId, setSelectedLanguageId]}>{children}</Context.Provider>
    );
  }

  export function useStateContext() {
    return useContext(Context);
  }