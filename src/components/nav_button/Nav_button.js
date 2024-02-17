import {TouchableOpacity, Image, Text, View} from 'react-native';
import {estilos} from './Sty_nav_button';

const Nav_button = props => {
  let color = '#2e2e2e';
  if (props.desligado) {
    color = '#1c1c1c';
  }

  return (
    <TouchableOpacity
      style={estilos('50%', color).base}
      onPress={props.action}
      disabled={props.desligado}>
      <View style={estilos().conteudos}>
        <Image source={props.srcImage} style={estilos().image} />
        <Text style={estilos().texto}>{props.texto}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Nav_button;
