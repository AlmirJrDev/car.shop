import {


  forwardRef,
 
} from 'react'


import { Box, Container,  } from './styles'



export const TextInput = forwardRef(function TextInput(

) {


  return (
    <Box >
      <Container>
        <input
          type="text"
        />

        
      </Container>

 
    </Box>
  )
})
