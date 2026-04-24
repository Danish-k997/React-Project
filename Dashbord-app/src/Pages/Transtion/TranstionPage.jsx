import  { Button, Card, Flex, HStack, Icon, Box  } from '@chakra-ui/react'
import DashbordLayout from '../../Component/DashbordLayout'
import React from 'react'
import { IoMdArrowDown } from "react-icons/io"; 
import { Tabs } from "@chakra-ui/react"
import TranstionTable from '../Transtion/Components/TranstionTable'



const Transtion = () => { 
  const tabs = [
    {
      name:"All",
      count:"364",
      value:"All"
    },
    {
      name:" Deposit",
      count:"164",
      value:"Deposit"
    },
    {
      name:" Withdraw",
      count:"456",
      value:"Withdraw"
    },
    {
      name:"Trade",
      count:"755",
      value:"Trade"
    },
  ]
  return (
    <DashbordLayout title="Transtion">
      <Flex px="12" mb="3" justify="flex-end">
      <Button bg="#5F00D9" borderRadius="10px"  ><Icon as={IoMdArrowDown}/>Export CSV</Button>
      </Flex>
       <Card.Root>
         <Tabs.Root defaultValue="All"> 
          <HStack>
          {tabs.map((tab)=>(
            <Tabs.List key={tab.name}>
             <Tabs.Trigger value={tab.value}>
        
          {tab.name}
        </Tabs.Trigger>
      </Tabs.List>
          ))}
       </HStack>
      <Tabs.Content value="All">     
        <TranstionTable/>        
        </Tabs.Content>
      <Tabs.Content value="Deposit">
       <TranstionTable/> 
        </Tabs.Content>
      <Tabs.Content value="Withdraw">
        <TranstionTable/> 
      </Tabs.Content>
      <Tabs.Content value="Trade">
        <TranstionTable/> 
      </Tabs.Content>
    </Tabs.Root>
       </Card.Root>


    </DashbordLayout>
  )
}

export default Transtion
