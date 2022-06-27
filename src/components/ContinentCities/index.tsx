import { Box, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { headingTopCities } from "./locales";

type TopCities = {
  city: string;
  country: string;
  image: string;
  flag: string;
};

interface ContinentCitiesProps {
  continent: {
    topCities: TopCities[];
  };
}

const ContinentCities = ({ continent }: ContinentCitiesProps) => {
  const { topCities } = continent;
  topCities.map((city) => console.log(city.flag));
  return (
    <Flex p="8" w="100%" direction="column">
      <Text fontSize="4xl">{headingTopCities} </Text>
      <SimpleGrid column="4" minChildWidth={320} rowGap="12">
        {topCities.map((city) => (
          <Box
            key={city.city}
            border="1px"
            borderColor="yellow.500"
            maxW="280"
            borderRadius="md"
          >
            <Image src={city.image} alt={city.city} w="100%" />
            <Flex justify="space-between" p="6">
              <Box>
                <Text fontWeight={600} fontSize="md">
                  {city.city}
                </Text>
                <Text fontWeight={400} fontSize="sm">
                  {city.country}{" "}
                </Text>
              </Box>
              <Image src={city.flag} alt={city.city} />
            </Flex>
          </Box>
        ))}
      </SimpleGrid>
    </Flex>
  );
};

export default ContinentCities;
