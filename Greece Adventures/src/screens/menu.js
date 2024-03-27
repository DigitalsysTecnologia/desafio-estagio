import React from "react";
import { Image, View, TouchableOpacity, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Styles from "../styles/styles";

const Menu = () => {
  const navigation = useNavigation();

  const navigateC = () => {
    navigation.navigate("catalogC");
  };

  const navigateM = () => {
    navigation.navigate("catalogM");
  };

  const navigateT = () => {
    navigation.navigate("txtUniverse");
  };

  return (
    <ImageBackground
      source={require("../../assets/image/backGround.png")}
      style={Styles.menuContainer}
    >
      <View>
        <Image
          style={Styles.logo}
          source={require("../../assets/image/logo.png")}
        />
        <View style={Styles.buttonContainer}>
          <TouchableOpacity style={Styles.buttonMenu} onPress={navigateC}>
            <Image
              style={Styles.buttonImage}
              source={require("../../assets/image/btCharacters.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity style={Styles.buttonMenu} onPress={navigateM}>
            <Image
              style={Styles.buttonImage}
              source={require("../../assets/image/btMissions.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity style={Styles.buttonMenu} onPress={navigateT}>
            <Image
              style={Styles.buttonImage}
              source={require("../../assets/image/btUniverse.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Menu;
