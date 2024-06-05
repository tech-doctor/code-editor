import { Box, Select } from '@chakra-ui/react'
import config from '../config';
import { useStateContext } from '../context/state';


  const Languages = () => {
    const [selectedLanguageId, setSelectedLanguageId] = useStateContext();


    function handleLanguageChange(e) {
        setSelectedLanguageId(e.target.value);
         console.log( e.target.value)
      }

    
    return (

        <Box
        position="fixed"
        bottom={0}
        left={0}
        right={0}
        display="flex"
        justifyContent="center"
      
        bg="white"
        zIndex={100}
        width={'100%'}
        boxShadow="0 -2px 8px rgba(0, 0, 0, 0.1)"
      >
        <Select
          onChange={handleLanguageChange}
          color="black"
          borderColor="blue.400"
          backgroundColor="blue.400"
          rounded={0}
          size="md"
          defaultValue={19}
          //width="auto" // Adjust width as needed
        >
          {config.supportedLanguages.map(language => (
            <option key={language.id} value={language.id}>
              {language.name}
            </option>
          ))}
        </Select>
      </Box>
    )
  }

  export default Languages;