import { Flex, Text, Box } from "@chakra-ui/react";
import { textLine1, textLine2 } from "./locales";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Slider from "./Slider";

const ContinentCarousel = () => {
  return (
    <Flex direction="column" align="center">
      <Text fontSize="4xl">{textLine1}</Text>
      <Text fontSize="4xl">{textLine2}</Text>

      <Box mt="20">
        <Slider />
      </Box>
    </Flex>
  );
};

export default ContinentCarousel;
