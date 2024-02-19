import { Box, Text, Flex } from "@chakra-ui/react";
import bg1 from "../../img/bg.jpg";
import bg2 from "../../img/bg2.jpg";
import { Header } from "../../components/Header";
import Carousel from "../../components/Carousel";

const HomePage = () => {
  return (
    <>
      <Header />
      <Box
        bgImage={bg1}
        bgSize={"cover"}
        bgPosition={"center"}
        bgRepeat={"no-repeat"}
        w={"100%"}
        h={"100vh"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Flex
          bgColor={"grey.0.5"}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"column"}
          gap={"20px"}
          w={"60%"}
          h={{ base: "70%", md: "67%" }}
          borderRadius={"8px"}
          padding={"30px"}
        >
          <Flex alignItems={"center"} justifyContent={"center"} w={"100%"}>
            <Box
              bgColor={"brand.2"}
              w={"50px"}
              h={"2px"}
              marginRight={"10px"}
            />
            <Text
              color={"brand.2"}
              textAlign={"center"}
              fontSize={{ base: "xl", md: "2xl" }}
              fontWeight={"bold"}
            >
              BEM VINDO
            </Text>
            <Box bgColor={"brand.2"} w={"50px"} h={"2px"} marginLeft={"10px"} />
          </Flex>
          <Text
            color={"grey.9"}
            textAlign={"center"}
            fontWeight={"bold"}
            fontSize={{ base: "xs", md: "lg" }}
          >
            Em um mundo mergulhado na era dos vikings e dos cavaleiros
            templários, duas culturas distintas se chocam em uma batalha épica
            por território e poder. No entanto, uma ameaça muito maior surge das
            sombras, obrigando vikings e templários a unirem forças para
            enfrentar uma força ancestral que ameaça destruir o mundo conhecido.
          </Text>
          <Text
            color={"grey.9"}
            textAlign={"center"}
            fontWeight={"bold"}
            fontSize={{ base: "xs", md: "lg" }}
          >
            Prepare-se para embarcar em uma jornada épica onde os destemidos
            vikings e os nobres cavaleiros templários unem suas forças diante de
            uma ameaça ancestral.
          </Text>
        </Flex>
      </Box>
      <Box
        bgGradient={
          "linear-gradient(to bottom, #15171a, #262329, #3b2f33, #4d3e3a, #594f42)"
        }
        bgSize={"cover"}
        bgPosition={"center"}
        bgRepeat={"no-repeat"}
        w={"100%"}
        h={"100vh"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
        gap={"60px"}
      >
        <Flex alignItems={"center"} justifyContent={"center"} w={"100%"}>
          <Box bgColor={"brand.2"} w={"50px"} h={"2px"} marginRight={"10px"} />
          <Text
            color={"brand.2"}
            textAlign={"center"}
            fontSize={{ base: "xl", md: "2xl" }}
            fontWeight={"bold"}
          >
            EXPLORE O MUNDO DE ADVENTUREREALM
          </Text>
          <Box bgColor={"brand.2"} w={"50px"} h={"2px"} marginLeft={"10px"} />
        </Flex>
        <Carousel />
      </Box>
      <Box
        bgImage={bg2}
        bgSize={"cover"}
        bgPosition={"center"}
        bgRepeat={"no-repeat"}
        w={"100%"}
        h={"100vh"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      ></Box>
    </>
  );
};

export { HomePage };
