import { Box, Img } from "@chakra-ui/react";
import img from "../../img/636616.jpg";

const HomePage = () => {
  return (
    <Box
      bgImage={img}
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      w="100%"
      h="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    ></Box>
  );
};

export { HomePage };
