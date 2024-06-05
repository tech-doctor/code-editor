// app/providers.tsx
'use client'

import { ChakraProvider } from '@chakra-ui/react'
import { StateProvider } from './context/state';

export function Providers({ children }) {

  return (
    <StateProvider>
     <ChakraProvider>
    {children}
    </ChakraProvider>
    </StateProvider>
   
  )
}