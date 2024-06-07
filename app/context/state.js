import { createContext, useContext, useState } from "react";


const Context = createContext();

export function StateProvider({ children }) {
   // const [selectedLanguageId, setSelectedLanguageId] = useState(19);
    const [fileContent, setFileContent] = useState('hi');
    //const [isLoading, setIsloading]
 
    
    return (
      <Context.Provider 
      value={[fileContent,setFileContent]}>{children}</Context.Provider>
    );
  }

  export function useStateContext() {
    return useContext(Context);
  }