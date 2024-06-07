'use client'
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import { Link } from '@chakra-ui/next-js';

import Editor, { DiffEditor, useMonaco, loader } from '@monaco-editor/react';
import  files  from "./files";
import Languages from "./languages";
import examples from "./config/examples";

import { Box, HStack, SimpleGrid } from '@chakra-ui/react'
import config from "./config";
import { useStateContext } from "./context/state";
import Sidebar from "./section/sidebar";
import Heading from "./section/heading";
import Save from "./section/save";

export default function Home() {
  const editorRef = useRef();
  const monaco = useMonaco();
  //const [selectedLanguageId, setSelectedLanguageId] = useStateContext();
  const [fileContent, setFileContent] = useStateContext();


  console.log(fileContent)

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
      console.log('here is the monaco instance:', monaco);
    }
  }, [monaco]);

  //console.log(selectedLanguageId)
   //const supportedLanguages = config.supportedLanguages
  // const language = supportedLanguages?.find(({ id }) => id === selectedLanguageId)?.name;

   //const language = supportedLanguages.find(lang => lang.id === selectedLanguageId)?.name || 'Unknown';
   //console.log(language)


   const handleClick = (event) => {
      setFileContent(event)
      console.log(fileContent)
   }

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
        // overflowY={'hidden'}
         w={'100%'}>
          <Editor
            onChange={handleClick}
            height="100vh"
            width={'100%'}
            theme="vs-dark"
            // path={language}
            path={'javascript'}
           //value={examples[selectedLanguageId] || ''}
            value={fileContent}
            // defaultLanguage={language}
            defaultLanguage={'javascript'}
            onMount={onMount}
            />
        </Box>
      </HStack>

          <Languages />
        
        {/* <Editor height="100vh" defaultLanguage="javascript" defaultValue="// some comment" />; */}
      </Box>
    </main>
  );
}
