import {Box, Button} from '@chakra-ui/react';
import { useState } from 'react';
import { fetcher } from './fetcher';
import { useToast } from '@chakra-ui/react'

const url = 'https://magento1-demo.inter.scot/agent.php?save';


const body = {file:"skin/frontend/base/default/css/widgets.css",
content:"This is a test\nThis is another line here\n"}


  const Save = () => {
    const [data, setData] = useState(null);
    const toast = useToast()
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

  function getToast(){
      if(data) {
        toast({
          title: 'Saved Successfully',
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
      }
      else{
        toast({
          title: 'File could not save. Retry!',
          status: 'error',
          duration: 9000,
          isClosable: true,
      })
    }    
  }

  const handleClick = async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await fetcher(url, { body });
      setData(result);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
      getToast()

    }
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