import { Button, HStack, Icon, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { MdOutlineInfo } from "react-icons/md";
import { Tag } from "@chakra-ui/react"
import { TbArrowBigUpLine } from "react-icons/tb";
const Portfilo = () => {
  return (
    <>
      <HStack bg="white" p="6" borderRadius="10px" spaceX={12} flexDir={{
        base:"column",
        lg:"row"
      }} 
      align={{
        base:"flex-start",
        lg:"flex-end"
      }}
      overflowX={{
        base:"hidden"
      }}
      >
        <Stack >
          <HStack color="#535D66" 
        
          >
            <Text fontSize="14px"> Total Portfolio Value</Text>
            <Icon>
              <MdOutlineInfo />
            </Icon>
          </HStack>
          <Text fontSize="24px" fontWeight="500"   >
            ₹ 112,312.24
          </Text>
        </Stack>
        <Stack >
          <HStack color="#535D66">
            <Text fontSize="14px"> Wallet Balances </Text>
          </HStack>
          <HStack spaceX={3} 
          flexDir={{
        base:"column",
        lg:"row"
      }} 
      align={{
        base:"flex-start",
        lg:"flex-end"
      }}
          >
            <HStack>
              <Text fontSize="24px" fontWeight="500">
                22.394010
              </Text>
              <Tag.Root>
                <Tag.Label>BTC</Tag.Label>
              </Tag.Root>
            </HStack>
            <HStack>
              <Text fontSize="24px" fontWeight="500">
                ₹ 1,300.00
              </Text>
              <Tag.Root>
                <Tag.Label>INR</Tag.Label>
              </Tag.Root>
            </HStack>
          </HStack>
        </Stack>
      <HStack spaceX="1" >
          <HStack>
          <Button w="83px" h="18px" fontSize="14px" fontWeight="500" p="12px" bg="#5F00D9" gap="2px"><Icon  as={TbArrowBigUpLine} Size="10px"/>Deposit</Button>
        </HStack>
        <HStack>
          <Button w="88px" h="18px" fontSize="14px" fontWeight="500" bg="#5F00D9" p="12px"  gap="2px">
            <Icon  
            as={TbArrowBigUpLine} 
            boxSize="20px" 
           rotate="178deg"  
            />Withdraw</Button>
            
        </HStack>
      </HStack>
      </HStack>
    </>
  );
};

export default Portfilo;
