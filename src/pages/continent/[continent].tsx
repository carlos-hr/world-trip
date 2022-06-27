import { Box, Flex } from "@chakra-ui/react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import {
  ContinentBanner,
  ContinentCities,
  ContinentInfo,
  Header,
} from "../../components";
import { continentInfo } from "../../continentDb/continentInfo";

const Continent: NextPage = () => {
  const { asPath } = useRouter();

  const continent = continentInfo.find(
    (continent) => continent.pageAddress === asPath
  );

  return (
    <Box>
      <Header />
      {continent && (
        <>
          <ContinentBanner src={continent.banner} title={continent.title} />

          <Box p="12">
            <ContinentInfo continent={continent} />
            <Flex justify="center" mt="12" pb="8">
              <ContinentCities continent={continent} />
            </Flex>
          </Box>
        </>
      )}
    </Box>
  );
};

export default Continent;
