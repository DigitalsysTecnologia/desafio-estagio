import React from "react";
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  ImageBackground,
} from "react-native";
import Owl from "./characters/owl";
import Lily from "./characters/lily";
import Cerberus from "./characters/cerberus";
import Blue from "./characters/blue";
import Styles from "../styles/styles";
import GobackButton from "../components/gobackButton";

const CatalogC = () => {
  const charactersData = [
    { id: 1, component: <Owl /> },
    { id: 2, component: <Cerberus /> },
    { id: 3, component: <Lily /> },
    { id: 4, component: <Blue /> },
  ];

  const renderCharacterItem = ({ item }) => (
    <View style={Styles.characters}>{item.component}</View>
  );

  return (
    <ImageBackground
      source={require("../../assets/image/backGround.png")}
      style={Styles.container}
    >
      <View style={Styles.viewButton}>
        <GobackButton style={Styles.buttonGoback} />
      </View>
      <Text style={Styles.title}>PERSONAGENS</Text>
      <View>
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

export default CatalogC;
