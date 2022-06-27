import { InfoOutlineIcon } from "@chakra-ui/icons";
import { Box, Flex, SimpleGrid, Text, Tooltip } from "@chakra-ui/react";
import { textCities, textCountries, textInfo, textLanguages } from "./locales";

interface ContinentInfoProps {
  continent: {
    info: string;
    countries: number;
    languages: number;
    cities: number;
  };
}

const ContinentInfo = ({ continent }: ContinentInfoProps) => {
  return (
    <>
      {continent && (
        <div>
          <Flex mt="24" justify="space-around" align="center">
            <Text
              maxW="600px"
              fontWeight={400}
              fontSize="lg"
              textAlign="justify"
            >
              {continent.info}
            </Text>

            <SimpleGrid columns={3} w="40%">
              <Flex
                direction="column"
                maxH="100px"
                justify="center"
                align="center"
              >
                <Text fontWeight={600} color="yellow.500" fontSize="4xl">
                  {continent.countries}
                </Text>
                <Text fontSize="lg" fontWeight={600}>
                  {textCountries}
                </Text>
              </Flex>
              <Flex
                direction="column"
                maxH="100px"
                justify="center"
                align="center"
              >
                <Text fontWeight={600} color="yellow.500" fontSize="4xl">
                  {continent.languages}
                </Text>
                <Text fontSize="lg" fontWeight={600}>
                  {textLanguages}
                </Text>
              </Flex>
              <Flex
                direction="column"
                maxH="100px"
                justify="center"
                align="center"
              >
                <Text fontWeight={600} color="yellow.500" fontSize="4xl">
                  {continent.cities}
                </Text>
                <Flex>
                  <Text fontSize="lg" fontWeight={600}>
                    {textCities}
                  </Text>
                  <Tooltip label={textInfo}>
                    <InfoOutlineIcon
                      ml="2"
                      color="gray.500"
                      fontSize="sm"
                      alignSelf="center"
                    />
                  </Tooltip>
                </Flex>
              </Flex>
            </SimpleGrid>
          </Flex>
        </div>
      )}
    </>
  );
};

export default ContinentInfo;
