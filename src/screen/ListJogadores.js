import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {estilosGeral} from './Style/Geral_Sty';
import Nav_button from '../components/nav_button/Nav_button';
import Render_player from '../components/render_player/Render_player';
import personagens from '../controller/controlPlayer';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

const TelaJogadores = props => {
  const calculateNumColumns = () => {
    const screenWidth = wp('100%');
    const itemWidth = 450;
    const minNumColumns = 1;

    const numColumns = Math.floor(screenWidth / itemWidth);

    return Math.max(numColumns, minNumColumns);
  };

  const navegar = () => {
    props.navigation.replace('TelaMissoes');
  };

  const navegarParaTelaJogador = item => {
    props.navigation.push('TelaJogador', {item});
  };

  const renderItem = ({item}) => {
    return (
      <Render_player
        item={item}
        navegarParaTelaJogador={navegarParaTelaJogador}
      />
    );
  };

  return (
    <View style={estilosGeral.mainContainer}>
      <View style={estilosGeral.header}>
        <Text style={estilosGeral.titulo}>JOGADORES</Text>
      </View>

      <View style={estilosGeral.body}>
        <FlatList
          data={personagens}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          numColumns={calculateNumColumns()}
        />
      </View>
      <View style={estilosGeral.footer}>
        <Nav_button
          desligado={true}
          srcImage={require('../assets/image/user.png')}
          texto="Personagens"
        />
        <Nav_button
          action={() => navegar()}
          srcImage={require('../assets/image/scroll.png')}
          texto="Missões"
        />
      </View>
    </View>
  );
};

export default TelaJogadores;
