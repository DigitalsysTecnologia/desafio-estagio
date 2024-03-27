import React from "react";
import { View, ImageBackground } from "react-native";
import Styles from "../../styles/styles";

const Lily = () => {
  return (
    <View>
      <ImageBackground
        source={require("../../../assets/image/lily.gif")}
        style={Styles.characters}
      />
    </View>
  );
};

export default Lily;
