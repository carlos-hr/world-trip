import { Box, Flex } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <Flex as="header" h="100" justify="center" align="center">
      <Link href="/">
        <Box _hover={{ cursor: "pointer" }}>
          <Image width="180px" height="45px" src="/logo.svg" alt="logo" />
        </Box>
      </Link>
    </Flex>
  );
};

export default Header;
