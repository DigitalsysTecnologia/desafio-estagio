import React, { useContext } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box } from "@chakra-ui/react";
import { useState } from "react";
import { CardCharacters } from "../CardCharacters";
import { CharacterContext } from "../../providers/CharactersContext";
import { characters } from "../../services/database";

const CarouselCharacters = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 900,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 4000,
    draggable: false,
    centerMode: true,
  };

  const [hoveredImage, setHoveredImage] = useState(null);

  const { setPers, pers } = useContext(CharacterContext);

  const handleImageClick = (element) => {
    setPers(element);
    console.log(pers);
  };

  return (
    <>
      {pers.name !== undefined && <CardCharacters />}
      <Box w={{ base: "300px", md: "500px", xl: "700px" }}>
        <Slider {...settings}>
          {characters.map((element, index) => (
            <Box
              key={index}
              position={"relative"}
              w={"90%"}
              h={"90%"}
              borderRadius={"50%"}
              overflow={"hidden"}
              onMouseEnter={() => setHoveredImage(index)}
              onMouseLeave={() => setHoveredImage(null)}
              onClick={() => handleImageClick(element)}
              cursor={"pointer"}
              mr={"20px"}
            >
              <Box
                as={"img"}
                src={element.img}
                alt={`Slide ${index + 1}`}
                w={"100%"}
                h={"100%"}
                objectFit={"cover"}
              />
              {hoveredImage === index && (
                <Box
                  position={"absolute"}
                  top={0}
                  left={0}
                  right={0}
                  bottom={0}
                  borderWidth={"2px"}
                  borderColor={"white"}
                  borderRadius={"50%"}
                  pointerEvents={"none"}
                />
              )}
            </Box>
          ))}
        </Slider>
      </Box>
    </>
  );
};

export { CarouselCharacters };
