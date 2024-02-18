import {Text, View, FlatList} from 'react-native';
import {estilosGeral} from './Style/Geral_Sty';
import Nav_button from '../components/nav_button/Nav_button';
import missoes from '../controller/controlMissao';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Render_missao from '../components/render_missao/Render_missao';

const TelaMissoes = props => {
  const calculateNumColumns = () => {
    const screenWidth = wp('100%');
    const itemWidth = 360;
    const minNumColumns = 1;
    const numColunas = Math.floor(screenWidth / itemWidth);

    return Math.max(numColunas, minNumColumns);
  };

  const navegarMissao = item => {
    props.navigation.push('TelaMissao', {item});
  };

  const navegar = () => {
    props.navigation.replace('TelaPlayers');
  };

  const renderItem = ({item}) => {
    return <Render_missao item={item} navegarMissao={navegarMissao} />;
  };

  return (
    <View style={estilosGeral.mainContainer}>
      <View style={estilosGeral.header}>
        <Text style={estilosGeral.titulo}>MISSÕES</Text>
      </View>

      <View style={estilosGeral.body}>
        <FlatList
          data={missoes}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          numColumns={calculateNumColumns()}
        />
      </View>

      <View style={estilosGeral.footer}>
        <Nav_button
          action={() => navegar()}
          srcImage={require('../assets/image/user.png')}
          texto="Personagens"
        />
        <Nav_button
          action={() => navegar()}
          srcImage={require('../assets/image/scroll.png')}
          texto="Missões"
          desligado={true}
        />
      </View>
    </View>
  );
};

export default TelaMissoes;
