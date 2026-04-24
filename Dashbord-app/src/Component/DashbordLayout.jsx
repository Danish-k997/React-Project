import { Box, Container, Flex, } from '@chakra-ui/react' 
import React from 'react'
import Sidebar from './Sidebar'
import Topnav from './Topnav'
import Sidedrop from './Sidedrop'

function DashbordLayout({title, children}) {

  return (
     <Flex>
      <Box display={{
        base: "none",
        lg: "flex"
      }}>
      <Sidebar /> 
      </Box>
      <Sidedrop/>
      <Box flexGrow={1}>  
      < Topnav title={title} />  
      <Container px="4px" w={{
        base:"20rem",
        md:"40rem",
        lg:"52rem"
      }}  mt="6" >{children}</Container>
      </Box>   
    </Flex>
  )
}

export default DashbordLayout