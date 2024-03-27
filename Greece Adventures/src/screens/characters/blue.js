import React from "react";
import { View, ImageBackground } from "react-native";
import Styles from "../../styles/styles";

const Blue = () => {
  return (
    <View>
      <ImageBackground
        source={require("../../../assets/image/blue.gif")}
        style={Styles.characters}
      />
    </View>
  );
};

export default Blue;
