import React from "react";
import { View, FlatList, Image, ImageBackground, Text } from "react-native";
import Styles from "../styles/styles";
import designCapa from "../../assets/image/designCapa.png";
import designLabirinto from "../../assets/image/designLabirinto.png";
import designCerejas from "../../assets/image/designCerejas.png";
import designAlgas from "../../assets/image/designAlgas.png";
import designColinas from "../../assets/image/designColinas.png";
import GobackButton from "../components/gobackButton";
//import copia from "../../assets/image/copia.png";

const CatalogM = () => {
  const charactersData = [
    { id: 1, image: designCapa },
    { id: 2, image: designLabirinto },
    //{id: 3, image: copia},
    { id: 3, image: designCerejas },
    { id: 4, image: designAlgas },
    { id: 5, image: designColinas },
  ];

  const renderCharacterItem = ({ item }) => (
    <View style={Styles.missions}>
      <Image source={item.image} />
    </View>
  );

  return (
    <ImageBackground
      source={require("../../assets/image/backGround.png")}
      style={Styles.container}
    >
     <View style={Styles.viewButton}>
        <GobackButton style={Styles.buttonGoback} />
     </View>
      <Text style={Styles.title}>MISSÕES</Text>

      <View  >
        <ImageBackground
          source={require("../../assets/image/containerDesign.png")} //
          style={Styles.characterContainer}
        >
          <FlatList
            data={charactersData}
            renderItem={renderCharacterItem}
            keyExtractor={(item) => item.id.toString()}
            style={Styles.designList}
          />
        </ImageBackground>
      </View>
    </ImageBackground>
  );
};

export default CatalogM;
