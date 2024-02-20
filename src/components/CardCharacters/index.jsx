import { CharacterContext } from "../../providers/CharactersContext";
import React, { useContext } from "react";
import { Text, Flex, Image } from "@chakra-ui/react";

const CardCharacters = () => {
  const { pers, setPers } = useContext(CharacterContext);

  return (
    <Flex
      w={"80%"}
      justifyContent={"center"}
      alignItems={"center"}
      gap={"50px"}
      flexDirection={{ base: "column", lg: "row" }}
    >
      <Image
        src={pers.img}
        w={{ base: "320px", lg: "400px" }}
        h={{ base: "320px", lg: "400px" }}
        borderRadius={"10px"}
      />
      <Flex
        bgColor={"grey.0.5"}
        h={"100%"}
        w={{ base: "100%", lg: "70%" }}
        borderRadius={"10px"}
        padding={"30px"}
        flexDirection={"column"}
        gap={"10px"}
      >
        <Text
          fontSize={{ base: "lg", md: "xl" }}
          color={"grey.9"}
          textDecoration={"underline"}
        >
          {pers.name}
        </Text>
        <Text fontSize={{ base: "xs", md: "xl" }} color={"grey.9"}>
          {pers.description}
        </Text>
        <Text
          fontSize={{ base: "lg", md: "xl" }}
          color={"grey.9"}
          textDecoration={"underline"}
        >
          Classe
        </Text>
        <Text fontSize={{ base: "xs", md: "xl" }} color={"grey.9"}>
          {pers.class}
        </Text>
        <Text
          fontSize={{ base: "lg", md: "xl" }}
          color={"grey.9"}
          textDecoration={"underline"}
        >
          Atributos
        </Text>
        <Text fontSize={{ base: "xs", md: "xl" }} color={"grey.9"}>
          Forca: {pers.attributes.strength}, Destreza:
          {pers.attributes.dexterity}, Contituicao:
          {pers.attributes.constitution}, Inteligencia:
          {pers.attributes.intelligence}, Sabedoria:
          {pers.attributes.wisdom}, Carisma: {pers.attributes.charisma},
        </Text>
        <Text
          fontSize={{ base: "lg", md: "xl" }}
          color={"grey.9"}
          textDecoration={"underline"}
        >
          Habilidades
        </Text>
        <Text fontSize={{ base: "xs", md: "xl" }} color={"grey.9"}>
          "Furtividade", "Armadilhas", "Persuasão"
        </Text>
      </Flex>
    </Flex>
  );
};

export { CardCharacters };
