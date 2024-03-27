

import React from "react";
import { View, Text, ImageBackground, ScrollView } from "react-native";
import Styles from "../styles/styles";
import GobackButton from "../components/gobackButton";

const TxtUniverse = () => {
  return (
    <ImageBackground
      source={require("../../assets/image/backGround.png")}
      style={Styles.container}
    >
      <View style={Styles.viewButton}>
        <GobackButton style={Styles.buttonGoback} />
      </View>
      <Text style={Styles.title}>UNIVERSO</Text>

      <View style={Styles.containerUniverse}>
        <ScrollView style={Styles.scrollview}>
          <Text style={Styles.text}>
            Desde o triunfo dos deuses gregos sobre seus pais titãs, as
            criaturas mágicas se reunem em um destes dois grandes grupos: os que
            defendem a continuidade da hegemonia olimpiana e os que almejam a
            volta dos titãs. Nossos personagens se encaixam no primeiro grupo,
            enquanto nossas missões visam a neutralizar as investidas do
            segundo. Na chamada Base, uma área segura onde nossos personagens
            vivem, planos para a defesa do Olimpo são discutidos todos os dias e
            heróis são designados para executá-los. E é assim que Owl, Cerberus,
            Blue e Lily embarcam numa série de aventuras recheadas de traições,
            surpresas e perigos.
          </Text>
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

export default TxtUniverse;
