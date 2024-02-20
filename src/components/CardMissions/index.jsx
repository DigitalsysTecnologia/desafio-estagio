import { Flex, Box, Image, Text } from "@chakra-ui/react";

const CardMissions = ({ mission }) => {
  return (
    <Flex
      bgColor={"grey.0.5"}
      width={"80%"}
      height={{ base: "520px", md: "250px", lg: "350px" }}
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
              justifyContent={"center"}
              alignItems={"center"}
              gap={"10px"}
            >
              <Flex
                w={"70%"}
                flexDirection={"column"}
                h={"100%"}
                justifyContent={"center"}
                alignItems={"center"}
                gap={"10px"}
              >
                <Text
                  fontSize={{ base: "lg", lg: "xl" }}
                  color={"grey.9"}
                  textDecoration={"underline"}
                >
                  {mission.title}
                </Text>
                <Text fontSize={{ base: "xs", lg: "xl" }} color={"grey.9"}>
                  {mission.description}
                </Text>
              </Flex>
              <Flex
                flexDirection={"column"}
                h={"100%"}
                w={"30%"}
                justifyContent={"center"}
                alignItems={"center"}
                gap={"10px"}
              >
                <Text
                  fontSize={{ base: "lg", lg: "xl" }}
                  color={"grey.9"}
                  textDecoration={"underline"}
                >
                  Nível
                </Text>
                <Text fontSize={{ base: "xs", lg: "xl" }} color={"grey.9"}>
                  {mission.level}
                </Text>
                <Text
                  fontSize={{ base: "lg", lg: "xl" }}
                  color={"grey.9"}
                  textDecoration={"underline"}
                >
                  Status
                </Text>
                <Text fontSize={{ base: "xs", lg: "xl" }} color={"grey.9"}>
                  {mission.status}
                </Text>
              </Flex>
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
              justifyContent={"center"}
              gap={"10px"}
            >
              <Flex
                w={"70%"}
                flexDirection={"column"}
                h={"100%"}
                justifyContent={"center"}
                alignItems={"center"}
                gap={"10px"}
              >
                <Text
                  fontSize={{ base: "lg", lg: "xl" }}
                  color={"grey.9"}
                  textDecoration={"underline"}
                >
                  {mission.title}
                </Text>
                <Text fontSize={{ base: "xs", lg: "xl" }} color={"grey.9"}>
                  {mission.description}
                </Text>
              </Flex>
              <Flex
                flexDirection={"column"}
                h={"100%"}
                w={"30%"}
                justifyContent={"center"}
                alignItems={"center"}
                gap={"10px"}
              >
                <Text
                  fontSize={{ base: "lg", lg: "xl" }}
                  color={"grey.9"}
                  textDecoration={"underline"}
                >
                  Nível
                </Text>
                <Text fontSize={{ base: "xs", lg: "xl" }} color={"grey.9"}>
                  {mission.level}
                </Text>
                <Text
                  fontSize={{ base: "lg", lg: "xl" }}
                  color={"grey.9"}
                  textDecoration={"underline"}
                >
                  Status
                </Text>
                <Text fontSize={{ base: "xs", lg: "xl" }} color={"grey.9"}>
                  {mission.status}
                </Text>
              </Flex>
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
