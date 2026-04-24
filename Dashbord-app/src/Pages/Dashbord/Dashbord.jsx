import React from "react";
import DashbordLayout from "../../Component/DashbordLayout";
import Portfilo from "./Portfilo";
import Pricing from "./Pricing";
import { Grid, GridItem, Stack, } from "@chakra-ui/react";
import Transition from "./Transition";

const Dashbord = () => {
  return (
    <>
      <DashbordLayout title="Dashbord">
        <Grid
          gridTemplateColumns={{
            base: "repeat(1, 1fr)",
            lg: "repeat(2,1fr)",
          }}
        >
          <GridItem
            colSpan={{
              base: 1,
              lg: 2,
            }}
          >
            <Portfilo />
          </GridItem>
          <Stack
            direction={{ base: "column", lg: "row" }}
            spacing="14px"
            w="full"
            gap="14px"
          >
            <GridItem colSpan={1}>
              <Pricing />
            </GridItem>
            <GridItem colSpan={1}>
              <Transition />
            </GridItem>
          </Stack>
        </Grid>
      </DashbordLayout>
    </>
  );
};

export default Dashbord;
