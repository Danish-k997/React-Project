import { Box, Button, Flex, Grid, Icon, Stack, Text } from "@chakra-ui/react";
import React, { Fragment } from "react";
import { HiMiniCurrencyDollar } from "react-icons/hi2";
import { SiBitcoinsv } from "react-icons/si";
import { CustomCard } from "../../Chakra/Coustomcard";
const Transition = () => {
  const transactions = [
    {
      id: "1",
      icon: HiMiniCurrencyDollar,
      text: "INR Deposit",
      amount: "+ ₹81,123.10",
      timestamp: "2022-06-09 7:06 PM",
    },
    {
      id: "2",
      icon: SiBitcoinsv,
      text: "BTC  Sell",
      amount: "- 12.48513391 BTC",
      timestamp: "2022-06-09 7:06 PM",
    },
    {
      id: "3",
      icon: HiMiniCurrencyDollar,
      text: "INR Deposit",
      amount: "+ ₹81,123.10",
      timestamp: "2022-06-09 7:06 PM",
    },
  ];

  return (
    <CustomCard mt="4">
      <Stack h="278px" bg="white" px="4" py="4" w="400px" borderRadius="10px">
        <Text>Recent Transactions</Text>
        {transactions.map((transactions, i) => (
          <Fragment key={transactions.id}>
            {i !== 0 && <Box borderBottom="1px solid #E2E8F0"></Box>}
            <Flex>
              <Grid
                bg={"#bcbcf3"}
                boxSize="10"
                placeItems="Center"
                borderRadius="full"
              >
                <Icon boxSize="25px" as={transactions.icon} />
              </Grid>
              <Flex justify="space-between" w="full">
                <Stack px="4" gap="0px">
                  <Text>{transactions.text}</Text>
                  <Text>{transactions.timestamp}</Text>
                </Stack>
                <Text>{transactions.amount}</Text>
              </Flex>
            </Flex>
          </Fragment>
        ))}

        <Button h="38px" w="380px" bg="#EEEEF4" color="black">
          View all
        </Button>
      </Stack>
    </CustomCard>
  );
};

export default Transition;
