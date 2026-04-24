import {
  HStack,
  Stack,
  Text,
  Icon,
  Button,
  Image,
  Flex,
} from "@chakra-ui/react";
import React from "react";
import { Tabs } from "@chakra-ui/react"
import { IoIosArrowRoundUp } from "react-icons/io";

import { FaCirclePlus } from "react-icons/fa6";
import { FaCircleMinus } from "react-icons/fa6";
const Pricing = () => {
  const timearray = ["7:55", "8:55", "9:55", "10:55", "11:55"];
  return (
    <Flex justify="space-between" mt="8px">
      <Stack bg="white" borderRadius="10px" p="16px">
        <HStack>
          <Stack justify="space-between" position="relative" top="-12px">
            <Text color="#535D66" fontSize="14px">
              Current Price
            </Text>
            <HStack>
              <Text fontSize="24px" fontWeight="500">
                ₹26,670.25 
              </Text>
                <Icon rotate="{45deg}" as={IoIosArrowRoundUp} />
              <Text fontSize="sm" >
                0.04%
              </Text>
            </HStack>
          </Stack>

          <HStack spaceX="1">
            <HStack>
              <Button
                w="83px"
                h="18px"
                fontSize="14px"
                fontWeight="500"
                p="12px"
                bg="#5F00D9"
                gap="2px"
              >
                <Icon as={FaCirclePlus} Size="10px" />
                buy
              </Button>
            </HStack>
            <HStack>
              <Button
                w="88px"
                h="18px"
                fontSize="14px"
                fontWeight="500"
                bg="#5F00D9"
                p="12px"
                gap="2px"
              >
                <Icon as={FaCircleMinus} boxSize="20px" rotate="178deg" />
                Sell
              </Button>
            </HStack>
          </HStack>
        </HStack>
        <HStack justify="flex-end">
          <Tabs.Root variant="enclosed" w="159px" h="27px" position="relative" top="-21px" fitted defaultValue={"1H"}>
            <Tabs.List>
              <Tabs.Trigger value="1H" fontSize="12px" p="4px 8px" >1H</Tabs.Trigger>
              <Tabs.Trigger value="1D" fontSize="12px" p="4px 8px" >1D</Tabs.Trigger>
              <Tabs.Trigger value="1W" fontSize="12px" p="4px 8px" >1W</Tabs.Trigger>
              <Tabs.Trigger value="1M" fontSize="12px" p="4px 8px" >1M</Tabs.Trigger>
            </Tabs.List>
          </Tabs.Root>
        </HStack>
        <HStack>
          <Image src="graph.svg" />
        </HStack>
        <HStack justify="space-around">
          {timearray.map((time) => (
            <HStack key={time} >{time}</HStack>
          ))}
        </HStack>
      </Stack>
    </Flex>
  );
};

export default Pricing;
