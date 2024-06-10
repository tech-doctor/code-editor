import { Box, Heading } from "@chakra-ui/react";
import { fileStructure } from "@/app/constants";
import useSWR from 'swr'
import { Container } from '@chakra-ui/react';
import Folder from "./folder";



const fetcher = (...args) => fetch(...args).then(res => res.json())

const Sidebar = () => {
  const { data, error, isLoading } = useSWR('https://magento1-demo.inter.scot/agent.php?list', fetcher)
   //console.log(data)
  return(
        <Box 
        overflowY={'auto'}
        h={'100vh'}
        px={5} py={4} pb={'80px'}>
        <Heading size="md" mb={4}>Files Tree</Heading>
        {data? <Container>
           <Folder name="/" nodes={data} />
         </Container>: isLoading? <div>Loading files...</div> : 
         <div>failed to load</div>
         } 
      </Box>
    )
}

export default Sidebar;