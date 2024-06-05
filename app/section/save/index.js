import {Box, Button, ButtonGroup } from '@chakra-ui/react'

  const Save = () => {
    return(
    <Box bg={'gray.900'} p={3} display="flex" justifyContent="flex-end">
    <Button rounded="sm" px={5} py={4} colorScheme="teal" size="sm">
      Save
    </Button>
    </Box>
    )
  }

  export default Save;