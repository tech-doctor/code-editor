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
  const [selectedLanguageId, setSelectedLanguageId] = useStateContext();


  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  }

  const [fileName, setFileName] = useState("script.js");

  const file = files[fileName];
  useEffect(() => {
    editorRef.current?.focus();
  }, [file.name]);
  

  useEffect(() => {
    if (monaco) {
      console.log('here is the monaco instance:', monaco);
    }
  }, [monaco]);

  console.log(selectedLanguageId)

    const supportedLanguages = config.supportedLanguages
   const language = supportedLanguages?.find(({ id }) => id === selectedLanguageId)?.name;

   console.log(language)


  return (
    <main >
      <Box
      overflow={'hidden'}
     
      >
      

{/* <button
        disabled={fileName === "script.js"}
        onClick={() => setFileName("script.js")}
      >
        script.js
      </button>
      <button
        disabled={fileName === "style.css"}
        onClick={() => setFileName("style.css")}
      >
        style.css
      </button>
      <button
        disabled={fileName === "index.html"}
        onClick={() => setFileName("index.html")}
      >
        index.html
      </button> */}
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
            height="100vh"
            width={'100%'}
            theme="vs-dark"
            path={language}
            defaultValue={examples[selectedLanguageId] || ''}
            defaultLanguage={language}
            onMount={onMount}
           
            />
             {/* <Editor
        height="95vh"
        theme="vs-dark"
        path={file.name}
        defaultLanguage={file.language}
        defaultValue={file.value}
        onMount={(editor) => (editorRef.current = editor)}
      /> */}
        </Box>
      </HStack>

          <Languages />
        
        {/* <Editor height="100vh" defaultLanguage="javascript" defaultValue="// some comment" />; */}
      </Box>
    </main>
  );
}
