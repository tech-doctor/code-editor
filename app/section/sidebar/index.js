import { Box, Heading } from "@chakra-ui/react";
import FileTree from "./folder";
import { fileStructure } from "@/app/constants";
import DirectoryTree from "./folder";

import { Container } from '@chakra-ui/react';
import Folder from "./folder";



const Sidebar = () => {
    return(
        <Box 
        overflowY={'auto'}
        h={'100vh'}
        px={5} py={4} pb={'80px'}>
        <Heading size="md" mb={4}>Files Tree</Heading>
        <Container>
      <Folder name="List" nodes={fileStructure} />
    </Container>
      </Box>
    )
}

export default Sidebar;