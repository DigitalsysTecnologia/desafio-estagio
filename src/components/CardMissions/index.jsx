import { Flex, Box, Image, Text } from "@chakra-ui/react";

const CardMissions = ({ mission }) => {
  return (
    <Flex
      bgColor={"grey.0.5"}
      width={"80%"}
      height={{ base: "500px", md: "250px", xl: "300px" }}
      borderRadius={"10px"}
      flexDirection={{ base: "column", md: "row" }}
    >
      {(parseInt(mission.id) % 2 !== 0) === false ? (
        <>
          <Box maxW={{ base: "100%", md: "35%" }} borderRightRadius={"10px"}>
            <Image
              src={mission.img}
              maxW={"100%"}
              h={"100%"}
              borderRadius={"8px"}
            />
          </Box>
          <Box w={{ base: "100%", md: "65%" }} borderLeftRadius={"10px"}>
            <Flex
              w={"100%"}
              h={"100%"}
              padding={"30px"}
              flexDirection={"column"}
              justifyContent={"center"}
              gap={"20px"}
            >
              <Text
                fontSize={{ base: "lg", md: "xl" }}
                color={"grey.9"}
                textDecoration={"underline"}
              >
                {mission.title}
              </Text>
              <Text fontSize={{ base: "xs", md: "xl" }} color={"grey.9"}>
                {mission.description}
              </Text>
            </Flex>
          </Box>
        </>
      ) : (
        <>
          <Flex
            w={{ base: "100%", md: "65%" }}
            borderRightRadius={"10px"}
            h={"100%"}
          >
            <Flex
              w={"100%"}
              h={"100%"}
              padding={"30px"}
              flexDirection={"column"}
              justifyContent={"center"}
              gap={"20px"}
            >
              <Text
                fontSize={{ base: "lg", md: "xl" }}
                color={"grey.9"}
                textDecoration={"underline"}
              >
                {mission.title}
              </Text>
              <Text fontSize={{ base: "xs", md: "xl" }} color={"grey.9"}>
                {mission.description}
              </Text>
            </Flex>
          </Flex>
          <Box
            w={{ base: "100%", md: "35%" }}
            borderLeftRadius={"10px"}
            h={"100%"}
          >
            <Image
              src={mission.img}
              maxW={"100%"}
              h={"100%"}
              borderRadius={"8px"}
            />
          </Box>
        </>
      )}
    </Flex>
  );
};

export { CardMissions };
