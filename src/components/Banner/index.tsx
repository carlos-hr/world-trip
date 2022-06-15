import { Flex, Image, Stack, Text, useBreakpointValue } from "@chakra-ui/react";
import { textBanner, titleBanner } from "./locales";

const Banner = () => {
  const isMobile = useBreakpointValue({
    base: true,
    lg: false,
  });

  return (
    <Flex
      bgImage="/images/Background.svg"
      h="335"
      bgRepeat="no-repeat"
      bgSize="cover"
      justify="space-around"
      align="center"
    >
      <Stack color="white" maxW="480" spacing="8">
        <Text fontWeight="500" fontSize="4xl">
          {titleBanner}
        </Text>
        <Text fontWeight="400" fontSize="xl" lineHeight="8">
          {textBanner}
        </Text>
      </Stack>

      {!isMobile && (
        <Image
          mb="-6"
          alignSelf="flex-end"
          src="/icons/Airplane.svg"
          alt="airplane"
        />
      )}
    </Flex>
  );
};

export default Banner;
