import { Flex, Img } from "@chakra-ui/react";
import logo from "../../img/logo.svg";

const Header = () => {
  return (
    <Flex
      w={"100%"}
      h={"60px"}
      bgColor={"grey.0.5"}
      position={"absolute"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Flex
        w={"62%"}
        alignItems={"center"}
        justifyContent={{ base: "center", md: "initial" }}
      >
        <Img src={logo} w={"305px"} h={"15px"} />
      </Flex>
    </Flex>
  );
};

export { Header };
