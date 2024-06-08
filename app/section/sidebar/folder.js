// components/Folder.js
import { useState } from 'react';
import { VStack, Text, Icon, Box } from '@chakra-ui/react';
import { FaFolder, FaFolderOpen } from 'react-icons/fa';

import File from './files';

const Folder = ({ name, nodes }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);
  //console.log(nodes)

  return (
    <VStack align="start" spacing={2}>
      <Box
       onClick={handleToggle} cursor="pointer"
       display="flex" // Use flexbox
       alignItems="center"
       px={4}
       w={'100%'}
       _hover={{ 
        backgroundColor: 'gray.900',
        color: 'white'
       }}
       >
        <Icon as={isOpen ? FaFolderOpen : FaFolder} mr={2}
        color={isOpen? 'green.800': 'yellow.500'}
        /> 
        <Text 
         _hover={{ 
          backgroundColor: 'gray.900',
          color: 'white'
         }}
        fontWeight={isOpen ? 'bold' : 'normal'}>{name}</Text>
      </Box>
      {isOpen && (
        <VStack 
        
        pl={4} align="start" spacing={2}>
          {nodes?.map((node, index) => (
            <FolderOrFile key={index} node={node} />
          ))}
        </VStack>
      )}
    </VStack>
  );
};

const FolderOrFile = ({ node }) => {
  if (node.type === 'dir') {
    return <Folder {...node} />;
  } else {
    return <File {...node} />;
  }
};

export default Folder;

// components/File.js

