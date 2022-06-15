import { Box, Flex, SimpleGrid, Text, Image } from "@chakra-ui/react";
import { travelTypes } from "./travelTypes";

const TravelTypes = () => {
  const gridItensLength = travelTypes.length;

  return (
    <Box maxW="1160px" m="auto" mt="20">
      <SimpleGrid columns={gridItensLength}>
        {travelTypes.map((travel, i) => {
          return (
            <Flex
              key={i}
              direction="column"
              justify="center"
              align="center"
              _hover={{
                cursor: "pointer",
                transform: "scale(1.1)",
                transition: "0.3s ease",
              }}
            >
              <Image src={travel.iconSrc} alt={travel.title} />
              <Text color="gray.500" fontWeight="600" fontSize="xl">
                {travel.title}
              </Text>
            </Flex>
          );
        })}
      </SimpleGrid>
    </Box>
  );
};

export default TravelTypes;
