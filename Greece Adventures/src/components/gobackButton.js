import React from "react";
import { View, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const GobackButton = () => {
  const navigation = useNavigation();

  const back = () => {
    navigation.goBack();
  };

  return (
    <View>
      <TouchableOpacity onPress={back}>
        <Image source={require("../../assets/image/goback.png")} />
      </TouchableOpacity>
    </View>
  );
};

export default GobackButton;
