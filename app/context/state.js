import { createContext, useContext, useState } from "react";


const Context = createContext();

export function StateProvider({ children }) {
    const [selectedLanguageId, setSelectedLanguageId] = useState(19);
    const [fileContent, setFileContent] = useState('///Open file and to edit code...');
    const [filePath, setFilePath] = useState('');
    //const [isLoading, setIsloading]
 
    
    return (
      <Context.Provider 
      value={
      {fileState: [fileContent,setFileContent],
      languageIdState: [selectedLanguageId, setSelectedLanguageId],
      pathState: [filePath, setFilePath]
      } 
  }>{children}</Context.Provider>
    );
  }

  export function useStateContext() {
    return useContext(Context);
  }