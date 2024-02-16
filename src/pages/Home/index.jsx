import { Box, Text, Flex, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import img from "../../img/bg.jpg";
import { Header } from "../../components/Header";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <Box
        bgImage={img}
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
            Explore um universo de fantasia repleto de aventuras épicas,
            criaturas mágicas e heróis lendários. No AdventureRealm, você
            encontrará um vasto catálogo de histórias emocionantes, cenários
            deslumbrantes e personagens fascinantes prontos para serem
            descobertos.
          </Text>
          <Text
            color={"grey.9"}
            textAlign={"center"}
            fontWeight={"bold"}
            fontSize={{ base: "xs", md: "lg" }}
          >
            Use nosso catálogo abrangente para encontrar aventuras sob medida
            para o seu grupo de jogadores. De missões heróicas a encontros
            misteriosos, há algo para todos os tipos de aventureiros.
          </Text>
          <Text
            color={"grey.9"}
            textAlign={"center"}
            fontWeight={"bold"}
            fontSize={{ base: "xs", md: "lg" }}
          >
            Junte-se a nós e mergulhe em um reino de magia, mistério e emoção.
            Sua jornada começa aqui, no AdventureRealm.
          </Text>
          <Text
            color={"grey.9"}
            textAlign={"center"}
            fontWeight={"bold"}
            fontSize={{ base: "xs", md: "lg" }}
          >
            Prepare-se para viver a experiência de RPG definitiva!
          </Text>

          <Button
            border={"1px solid brand.2"}
            bgColor={"transparent"}
            color={"brand.2"}
            _hover={{ textDecoration: "underline" }}
            onClick={() => navigate("/main")}
          >
            Entrar
          </Button>
        </Flex>
      </Box>
    </>
  );
};

export { HomePage };
