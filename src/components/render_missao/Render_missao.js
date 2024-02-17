import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {estilos} from './Sty_render_missao';

const Render_missao = ({item, navegarMissao}) => {
  return (
    <TouchableOpacity onPress={() => navegarMissao(item)}>
      <View style={estilos.container}>
        <Text style={estilos.titulo}>{item.titulo}</Text>
        <View style={estilos.constainerFilho}>
          <Text style={estilos.texto}>{item.dificuldade}</Text>
          <Text style={estilos.texto}>{item.status}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Render_missao;
