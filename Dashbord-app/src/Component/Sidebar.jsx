
import { Box, Flex, HStack, Icon, Stack, Text } from '@chakra-ui/react'
import React from 'react' 
import {BiGridAlt} from 'react-icons/bi'
import {GrTransaction} from 'react-icons/gr'
import { BiSupport } from "react-icons/bi"; 
import { Link } from 'react-router-dom';
import Support from '../Pages/Support/Support';

const Sidebar = () => {
 const buttons=[
    {
      Icon:BiGridAlt ,
      text: "Dashbord" ,
      Link:"/",
    },
    {
      Icon:GrTransaction,
      text: "Transtions",
      Link:"/TransitionPage",
    },
    
  ]
  return (
    <>
    <Stack height="100vh" width={{
      base:"full",
      lg:"220px"
    }} shadow="lg" justify="space-between"  bg="white">
      <Text ml="40px" fontSize="20px">@DANISH KHAN</Text>
      <Box position="relative" top="-173px">

         {buttons.map((nav)=> (
        <Link to={nav.Link}  key={nav.text} >
           <HStack
           justify="center"
           align="center" 
           fontSize="17px"
           fontWeight="bold"
           py="1"
           px="2"
           _hover={{
             bg:"#EEEEF4",
             borderRadius:"lg"
            }}
            >
           
            <Icon as={nav.Icon}/>
            <Text>{nav.text}</Text>
          </HStack>
         </Link>      
         ))}
         </Box>  
         <Link to="/Support">
          <HStack    
          justify="center"
          align="center" 
          fontSize="17px"
          fontWeight="bold"
          py="1"
          px="2"
          _hover={{
            bg:"#EEEEF4",
            borderRadius:"lg"
          }}
          >          
            <Icon as={BiSupport}/>
            <Text>Support</Text>      
          
          </HStack>  
         </Link>
         </Stack>
         
    </>
  )
}

export default Sidebar
