import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Text } from "@chakra-ui/react";
import slide1 from "../../img/slide1.jpg";
import slide2 from "../../img/slide2.jpg";
import slide3 from "../../img/slide3.jpg";
import slide4 from "../../img/slide4.png";
import slide5 from "../../img/slide5.png";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <Box w={{ base: "300px", md: "500px", xl: "1000px" }}>
      <Slider {...settings}>
        <Box textAlign="center">
          <img src={slide1} alt="Slide 1" />
          <Text mt={2} color={"grey.9"}>
            Prepare-se para a batalha épica entre vikings e templários! O
            destino do mundo está em jogo.
          </Text>
        </Box>
        <Box textAlign="center">
          <img src={slide2} alt="Slide 2" />
          <Text mt={2} color={"grey.9"}>
            Junte-se à Ordem dos Templários e proteja os segredos sagrados a
            todo custo. A honra está em jogo.
          </Text>
        </Box>
        <Box textAlign="center">
          <img src={slide3} alt="Slide 3" />
          <Text mt={2} color={"grey.9"}>
            Desvende os mistérios ocultos dos templários e descubra o legado
            perdido dos vikings enquanto você mergulha em uma narrativa
            envolvente e cheia de reviravoltas.
          </Text>
        </Box>
        <Box textAlign="center">
          <img src={slide4} alt="Slide 3" />
          <Text mt={2} color={"grey.9"}>
            Domine habilidades ancestrais e forje alianças estratégicas enquanto
            luta pela supremacia em um mundo de mitos e lendas.
          </Text>
        </Box>
        <Box textAlign="center">
          <img src={slide5} alt="Slide 3" />
          <Text mt={2} color={"grey.9"}>
            Testemunhe a coragem dos guerreiros vikings e a devoção inabalável
            dos templários em confrontos épicos que moldarão o destino da
            humanidade.
          </Text>
        </Box>
      </Slider>
    </Box>
  );
};

export default Carousel;
