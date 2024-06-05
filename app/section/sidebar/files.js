import { Text, Icon, Box } from '@chakra-ui/react';
import { useState } from 'react';
import { FaFile } from 'react-icons/fa';



const File = ({ name }) => {

    const [isHovered, setIsHovered] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
  
    const handleToggle = () => {
      setIsClicked(!isClicked);
    };
  
    const handleMouseEnter = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };

  return (
    <Box
    display="flex"
    alignItems="center"
    cursor="pointer"
    px={4}
    bg={isClicked ||isHovered ? 'gray.900' : 'transparent'}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    onClick={handleToggle}

    >
      <Icon as={FaFile} mr={2} color={isClicked ? 'gray.600' : 'gray.500'}/>
      <Text>{name}</Text>
    </Box>
  );
};

export default File;