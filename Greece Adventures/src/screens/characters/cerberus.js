import React from "react";
import { View, ImageBackground } from "react-native";
import Styles from "../../styles/styles";

const Cerberus = () => {
  return (
    <View>
      <ImageBackground
        source={require("../../../assets/image/cerberus.gif")}
        style={Styles.characters}
      />
    </View>
  );
};

export default Cerberus;
