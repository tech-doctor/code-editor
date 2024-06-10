import {Box, Button} from '@chakra-ui/react';
import { useState } from 'react';
import { fetcher } from './fetcher';
import { useToast } from '@chakra-ui/react';
import { useStateContext } from '@/app/context/state';

const url = 'https://magento1-demo.inter.scot/agent.php?save';

  const Save = () => {
    const toast = useToast()
    const [loading, setLoading] = useState(false);
    const { fileState, pathState } =  useStateContext();

    const [fileContent, setFileContent] = fileState;
    const [filePath, setFilePath] = pathState;

  //console.log(fileContent)
  //console.log(filePath)

const saveFile = async (fileName, fileContent) => {
  const formData = new FormData();
  formData.append('file', fileName);
  formData.append('content', fileContent);

  try {
      const response = await fetch(url, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
          throw new Error('Network response was not ok');
      }

      const data = await response.json();
     // console.log('File saved successfully:', data);
      //setData(data);
      toast({
        title: 'Saved Successfully',
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
      return data;
  } catch (error) {
     // console.error('Error saving file:', error);
      //setError(error);
      toast({
        title: 'File could not save. Retry!',
        status: 'error',
        duration: 9000,
        isClosable: true,
    })
      throw error;
    
  }
  finally {
    setLoading(false);
  }
};

// Example usage of the saveFile function

  
  const handleClick = async () => {
    setLoading(true);
    saveFile(filePath, fileContent);
 };

  

    return(
    <Box bg={'gray.900'} p={3} display="flex" justifyContent="flex-end">
      <Button 
      onClick={handleClick}
      isLoading = {loading}
      loadingText='Saving...'
      spinnerPlacement='end'
      rounded="md" px={5} py={4} 
      colorScheme="teal" size="sm">
        Save
      </Button>
    </Box>
    )
  }

  export default Save;