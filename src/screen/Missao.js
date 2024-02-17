import React from 'react';
import {ScrollView, Text, TextInput, View} from 'react-native';
import {estilosGeral} from './Style/Geral_Sty';
import Nav_button from '../components/nav_button/Nav_button';
import {estilos} from './Style/Render_Sty';

const TelaMissao = props => {
  const navegar = () => {
    props.navigation.pop();
  };

  let missao = props.route.params.item;

  return (
    <View style={estilosGeral.mainContainer}>
      <View style={estilosGeral.header}>
        <Text style={estilosGeral.titulo}>{missao.titulo}</Text>
      </View>

      <View style={estilosGeral.body}>
        <ScrollView style={estilos.conteudo}>
          <View style={estilos.infos}>
            <Text style={estilos.label}>Descrição:</Text>
            <TextInput
              multiline={true}
              editable={false}
              style={estilos.input}
              value={missao.descricao}
            />
          </View>

          <View style={estilos.infos}>
            <Text style={estilos.label}>Dificuldade:</Text>
            <TextInput
              editable={false}
              style={estilos.input}
              value={missao.dificuldade}
            />
          </View>

          <View style={estilos.infos}>
            <Text style={estilos.label}>Status:</Text>
            <TextInput
              editable={false}
              style={estilos.input}
              value={missao.status}
            />
          </View>

          <View style={estilos.infos}>
            <Text style={estilos.label}>Recompensa:</Text>
            <TextInput
              editable={false}
              style={estilos.input}
              value={missao.recompensa}
            />
          </View>
          <View style={estilos.infos}>
            <Text style={estilos.label}>Localização:</Text>
            <TextInput
              editable={false}
              style={estilos.input}
              value={missao.localizacao}
            />
          </View>
        </ScrollView>
      </View>

      <View style={estilosGeral.footer}>
        <Nav_button
          action={() => navegar()}
          srcImage={require('../assets/image/return.png')}
          texto="Retornar"
        />
      </View>
    </View>
  );
};

export default TelaMissao;
