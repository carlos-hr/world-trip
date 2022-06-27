import { Flex, Image, Text } from "@chakra-ui/react";

interface BannerProps {
  src: string;
  title: string;
}
const Banner = ({ src, title }: BannerProps) => {
  return (
    <Flex w="100%" position="relative">
      <Image w="100%" src={src} alt={title} />
      <Text
        color="white"
        fontWeight="600"
        fontSize="4xl"
        position="absolute"
        bottom="140px"
        left="140px"
      >
        {title}
      </Text>
    </Flex>
  );
};

export default Banner;
