import { useStateContext } from '@/app/context/state';
import { Text, Icon, Box } from '@chakra-ui/react';
import { useContext, useState } from 'react';
import { FaFile } from 'react-icons/fa';



const File = ({ name, path }) => {
    const [isClicked, setIsClicked] = useState(false);
    const { fileState, pathState } =  useStateContext();

    const [fileContent, setFileContent] = fileState;
    const [filePath, setFilePath] = pathState;

  const handleToggle = async () => {
    setFileContent('///Loading...: Fetching file content...');

    try {
        if (!isClicked) {
            const response = await fetch(`https://magento1-demo.inter.scot/agent.php?load&file=${encodeURIComponent(path)}`);

            if (!response.ok) {
                throw new Error('Failed to fetch file content');
            }

            const content = await response.text();
            setFileContent(content);
            setFilePath(path);
            setIsClicked(true);
           // console.log(path);
        } else {
            setIsClicked(false);
        }
    } catch (error) {
       // console.error(error);
        setFileContent('*** ERROR!: Failed to fetch file content');
    }
};

  
  return (
    <Box
    display="flex"
    alignItems="center"
    cursor="pointer"
    px={4}
    _hover={{ 
      backgroundColor: 'gray.900',
      color: 'gray.300'
     }}
    color={isClicked ? 'gray.400' : 'gray.500'}
    bg={
      isClicked? 'gray.900' : 'transparent'
    }
    onClick={handleToggle}
    >
      <Icon as={FaFile} mr={2} />
      <Text>{name}</Text>
    </Box>
  );
};

export default File;