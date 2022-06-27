import { Box, Divider, Flex } from "@chakra-ui/react";
import type { NextPage } from "next";
import { Banner, ContinentCarousel, Header, TravelTypes } from "../components";

const Home: NextPage = () => {
  return (
    <Box>
      <Header />
      <Banner />
      <TravelTypes />
      <Flex direction="column" justify="center" align="center">
        <Divider pt="20" w={90} borderBottom="2px solid black" />
        <Box maxW="1160" pt="24">
          <ContinentCarousel />
        </Box>
      </Flex>
    </Box>
  );
};

export default Home;
