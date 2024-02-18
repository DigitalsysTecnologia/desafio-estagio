import React from 'react';
import {ScrollView, Text, TextInput, View} from 'react-native';
import {estilosGeral} from './Style/Geral_Sty';
import Nav_button from '../components/nav_button/Nav_button';
import {estilos} from './Style/Render_Sty';

const TelaJogador = props => {
  const navegar = () => {
    props.navigation.pop();
  };

  let player = props.route.params.item;

  return (
    <View style={estilosGeral.mainContainer}>
      <View style={estilosGeral.header}>
        <Text style={estilosGeral.titulo}>{player.nome}</Text>
      </View>

      <View style={estilosGeral.body}>
        <ScrollView style={estilos.conteudo}>
          <View style={estilos.infos}>
            <Text style={estilos.label}>Nivel:</Text>
            <TextInput
              editable={false}
              style={estilos.input}
              value={player.nivel.toString()}
            />
          </View>
          <View style={estilos.infos}>
            <Text style={estilos.label}>NOME:</Text>
            <TextInput
              editable={false}
              style={estilos.input}
              value={player.nome}
            />
          </View>
          <View style={estilos.infos}>
            <Text style={estilos.label}>RAÇA:</Text>
            <TextInput
              editable={false}
              style={estilos.input}
              value={player.raca}
            />
          </View>
          <View style={estilos.infos}>
            <Text style={estilos.label}>CLASSE:</Text>
            <TextInput
              editable={false}
              style={estilos.input}
              value={player.classe}
            />
          </View>
          <View style={estilos.atributosRow}>
            <View style={estilos.atrContainer}>
              <Text style={estilos.label}>FOR:</Text>
              <TextInput
                editable={false}
                style={estilos.atrInput}
                value={player.atributos.forca.toString()}
              />
            </View>
            <View style={estilos.atrContainer}>
              <Text style={estilos.label}>INT:</Text>
              <TextInput
                editable={false}
                style={estilos.atrInput}
                value={player.atributos.inteligencia.toString()}
              />
            </View>
            <View style={estilos.atrContainer}>
              <Text style={estilos.label}>DEST:</Text>
              <TextInput
                editable={false}
                style={estilos.atrInput}
                value={player.atributos.destreza.toString()}
              />
            </View>
            <View style={estilos.atrContainer}>
              <Text style={estilos.label}>CONS:</Text>
              <TextInput
                editable={false}
                style={estilos.atrInput}
                value={player.atributos.constituicao.toString()}
              />
            </View>
            <View style={estilos.atrContainer}>
              <Text style={estilos.label}>SAB:</Text>
              <TextInput
                editable={false}
                style={estilos.atrInput}
                value={player.atributos.sabedoria.toString()}
              />
            </View>
            <View style={estilos.atrContainer}>
              <Text style={estilos.label}>CAR:</Text>
              <TextInput
                editable={false}
                style={estilos.atrInput}
                value={player.atributos.carisma.toString()}
              />
            </View>
          </View>
          <Text style={estilos.label}>HISTORIA:</Text>
          <TextInput
            multiline={true}
            editable={false}
            style={estilos.input}
            value={player.historia}></TextInput>
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

export default TelaJogador;
