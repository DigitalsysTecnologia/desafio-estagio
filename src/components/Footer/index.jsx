import { Box, Flex, Text, Image, HStack, Link } from "@chakra-ui/react";
import logo from "../../img/logo.png";
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <Box
      as={"footer"}
      bg={"grey.0"}
      color={"grey.9"}
      width={"100%"}
      h={"90px"}
      padding={"10px"}
    >
      <Flex
        justify="center"
        flexDirection={"column"}
        alignItems={"center"}
        gap={"20px"}
        w={"100%"}
        h={"100%"}
      >
        <Image src={logo} w={"305px"} h={"15px"} />
        <HStack spacing={4}>
          <Link
            href="https://www.linkedin.com/in/vinicius-ogawa-91311b197/"
            isExternal
          >
            <FaLinkedin size={32} />
          </Link>
          <Link href="https://github.com/ViniciusOgawa" isExternal>
            <FaGithub size={32} />
          </Link>
          <Link href="https://www.instagram.com/" isExternal>
            <FaInstagram size={32} />
          </Link>
          <Link href="https://www.facebook.com/" isExternal>
            <FaFacebook size={32} />
          </Link>
        </HStack>
      </Flex>
    </Box>
  );
};

export { Footer };
