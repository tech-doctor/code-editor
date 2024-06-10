'use client'
import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import { Link } from '@chakra-ui/next-js';

import Editor, { useMonaco} from '@monaco-editor/react';
import  files  from "./files";
import Languages from "./languages";
import examples from "./config/examples";

import { Box, HStack } from '@chakra-ui/react'
import config from "./config";
import { useStateContext } from "./context/state";
import Sidebar from "./section/sidebar";
import Heading from "./section/heading";
import Save from "./section/save";

export default function Home() {
  const editorRef = useRef();
  const monaco = useMonaco();
  //const [selectedLanguageId, setSelectedLanguageId] = useStateContext();
  
  const { fileState, pathState } =  useStateContext();

  const [fileContent, setFileContent] = fileState;
  //const [selectedLanguageId, setSelectedLanguageId] = languageIdState;
  const [filePath, setFilePath] = pathState;

  //console.log(fileContent)
  //console.log(filePath)

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  }

  //const [fileName, setFileName] = useState("script.js");

  // const file = files[fileName];
  // useEffect(() => {
  //   editorRef.current?.focus();
  // }, [file.name]);
  

  useEffect(() => {
    if (monaco) {
      //console.log('here is the monaco instance:', monaco);
    }
  }, [monaco]);

  //console.log(selectedLanguageId)
  //const supportedLanguages = config.supportedLanguages
  //const language = supportedLanguages?.find(({ id }) => id === selectedLanguageId)?.name;

  //const path =  supportedLanguages?.find(({ id }) => id === selectedLanguageId)?.path;
   //const language = supportedLanguages.find(lang => lang.id === selectedLanguageId)?.name || 'Unknown';
   //console.log(examples[selectedLanguageId])


   const handleClick = (event) => {
      setFileContent(event)
      //console.log(fileContent)
   }

   //console.log(fileContent)
  return (
    <main >
      <Box >
       <Heading/>
       <hr/>
       <Save/>
      <HStack >
        <Box 
        w={"auto"}   
        bg={'black'} 
        color={'gray.500'}
         >
          <Sidebar/>
        </Box>
        <Box
         w={'100%'}>
          <Editor
            onChange={handleClick}
            height="100vh"
            width={'100%'}
            theme="vs-dark"
            path={filePath}
           //value={examples[selectedLanguageId] || ''}
            value={fileContent}
            onMount={onMount}
            />
        </Box>
      </HStack>
          {/* <Languages /> */}
        
      </Box>
    </main>
  );
}




//////FTP credentials:
// Hostname: dev.inter.scot
// Username: coding-oluka
// Password: 4a17kz7A$