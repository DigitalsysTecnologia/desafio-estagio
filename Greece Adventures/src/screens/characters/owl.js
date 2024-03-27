import React from "react";
import { View, ImageBackground } from "react-native";
import Styles from "../../styles/styles";

const Owl = () => {
  return (
    <View>
      <ImageBackground
        source={require("../../../assets/image/owl.gif")}
        style={Styles.characters}
      />
    </View>
  );
};

export default Owl;
