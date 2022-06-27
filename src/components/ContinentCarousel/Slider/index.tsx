import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Text, Flex } from "@chakra-ui/react";
import { continentInfo } from "../../../continentDb/continentInfo";
import Link from "next/link";

const Slider = () => {
  return (
    <Box overflow="hidden" maxW="1160" mb="20" cursor="pointer">
      <Swiper
        slidesPerView={1}
        spaceBetween={1}
        navigation
        pagination
        autoplay
        loop={true}
        cssMode
        className="swiper"
      >
        {continentInfo.map((slide, i) => {
          return (
            <SwiperSlide key={i}>
              <Link href={slide.pageAddress}>
                <Flex
                  h="520px"
                  w="1160"
                  bg={`linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${slide.src})`}
                  bgSize="cover"
                  bgRepeat="no-repeat"
                  direction="column"
                  justify="center"
                  align="center"
                  opacity="0.7"
                >
                  <Text color="white" fontSize="4xl" fontWeight="700">
                    {slide.title}
                  </Text>
                  <Text color="white" fontSize="2xl" fontWeight="700">
                    {slide.subtitle}
                  </Text>
                </Flex>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Box>
  );
};

export default Slider;
