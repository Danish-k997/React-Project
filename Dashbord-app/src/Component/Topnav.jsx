import {
  Heading,
  HStack,
  Box,   
} from "@chakra-ui/react";
import React from "react";
import {CgMoreO} from "react-icons/cg"
import { Button, Menu, Portal } from "@chakra-ui/react"


function Topnav({title}) { 
  return (                  
    <HStack height=" 40px" bg="white" maxWidth={{
      base:"400px",
      md:"600px",
      xl:"800px",
      lg:"1184px"
    }} justify="space-between"
    >
      <Heading px="8">{title}</Heading>
        <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" mx="8">  
          <CgMoreO />  
        </Button>    
      </Menu.Trigger>   
      <Portal>            
        <Menu.Positioner>      
          <Menu.Content>                                    
            <Menu.Item value="Logout">Logout</Menu.Item>
            <Menu.Item value="Sing up">Sing up</Menu.Item>   
          </Menu.Content>          
        </Menu.Positioner>      
      </Portal>
    </Menu.Root>
    </HStack>
  );
}

export default Topnav;
