import {
  Flex,
  Img,
  ButtonGroup,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useMediaQuery,
  Box,
} from "@chakra-ui/react";
import logo from "../../img/logo.png";
import { useEffect, useState } from "react";
import { HamburgerIcon } from "@chakra-ui/icons";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isLargerScreen] = useMediaQuery("(min-width: 992px)");
  const [activeButton, setActiveButton] = useState("Início");

  useEffect(() => {
    setIsMobile(!isLargerScreen);
  }, [isLargerScreen]);

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <Flex
      w={"100%"}
      h={{ base: "110px", md: "60px" }}
      bgColor={"grey.0.5"}
      alignItems={"center"}
      justifyContent={"center"}
      flexDirection={"column"}
      position={"absolute"}
    >
      <Flex
        w={"62%"}
        alignItems={"center"}
        justifyContent={{ base: "space-between", lg: "initial" }}
        flexDirection={{ base: "column", md: "row" }}
        gap={{ base: "10px", md: "40px" }}
        position={"relative"}
        zIndex={1}
      >
        <Img src={logo} w={"305px"} h={"15px"} />
        <>
          {isMobile ? (
            <Menu>
              <MenuButton
                as={Button}
                backgroundColor={"transparent"}
                _hover={{ color: "brand.2" }}
              >
                <HamburgerIcon color={"grey.9"} />
              </MenuButton>
              <MenuList bgColor={"grey.1"} border={"none"}>
                <MenuItem
                  onClick={() => handleButtonClick("Personagens")}
                  style={{
                    color:
                      activeButton === "Personagens" ? "brand.2" : "grey.9",
                  }}
                  bgColor={"grey.1"}
                >
                  Personagens
                </MenuItem>
                <MenuItem
                  onClick={() => handleButtonClick("Missões")}
                  style={{
                    color: activeButton === "Missões" ? "brand.2" : "grey.9",
                  }}
                  bgColor={"grey.1"}
                >
                  Missões
                </MenuItem>
                <MenuItem
                  onClick={() => handleButtonClick("Início")}
                  style={{
                    color: activeButton === "Início" ? "brand.2" : "grey.9",
                  }}
                  bgColor={"grey.1"}
                >
                  Início
                </MenuItem>
              </MenuList>
            </Menu>
          ) : (
            <ButtonGroup gap={"30px"}>
              <Button
                bgColor={"transparent"}
                color={activeButton === "Início" ? "brand.2" : "grey.9"}
                fontWeight={"medium"}
                fontSize={"sm"}
                _hover={{ color: "brand.2" }}
                onClick={() => handleButtonClick("Início")}
              >
                Início
                {activeButton === "Início" && (
                  <Box
                    bg={"brand.2"}
                    w={"100%"}
                    h={"4px"}
                    position={"absolute"}
                    top={"-4px"}
                    left={"0"}
                  />
                )}
              </Button>
              <Button
                bgColor={"transparent"}
                color={activeButton === "Personagens" ? "brand.2" : "grey.9"}
                fontWeight={"medium"}
                fontSize={"sm"}
                _hover={{ color: "brand.2" }}
                onClick={() => handleButtonClick("Personagens")}
              >
                Personagens
                {activeButton === "Personagens" && (
                  <Box
                    bg={"brand.2"}
                    w={"100%"}
                    h={"4px"}
                    position={"absolute"}
                    top={"-4px"}
                    left={"0"}
                  />
                )}
              </Button>
              <Button
                bgColor={"transparent"}
                color={activeButton === "Missões" ? "brand.2" : "grey.9"}
                fontWeight={"medium"}
                fontSize={"sm"}
                _hover={{ color: "brand.2" }}
                onClick={() => handleButtonClick("Missões")}
              >
                Missões
                {activeButton === "Missões" && (
                  <Box
                    bg={"brand.2"}
                    w={"100%"}
                    h={"4px"}
                    position={"absolute"}
                    top={"-4px"}
                    left={"0"}
                  />
                )}
              </Button>
            </ButtonGroup>
          )}
        </>
      </Flex>
    </Flex>
  );
};

export { Header };
