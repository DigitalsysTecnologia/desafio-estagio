import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {estilos} from './Sty_render_player';

const Render_player = ({item, navegarParaTelaJogador}) => {
  return (
    <TouchableOpacity onPress={() => navegarParaTelaJogador(item)}>
      <View style={estilos.container}>
        <Image
          source={require('../../assets/image/placeholder.jpg')}
          style={estilos.icone}
        />
        <View style={estilos.constainerFilho}>
          <Text style={estilos.texto}>Nivel: {item.nivel}</Text>
          <Text style={estilos.texto}>Nome: {item.nome}</Text>
          <Text style={estilos.texto}>Classe: {item.classe}</Text>
          <Text style={estilos.texto}>Raça: {item.raca}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Render_player;
