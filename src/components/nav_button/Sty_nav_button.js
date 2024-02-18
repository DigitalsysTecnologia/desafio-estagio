import {StyleSheet,} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {moderateScale} from 'react-native-size-matters';

const imageSize = Math.min(wp('7%'), hp('7%'));

const estilos = (width, color) =>
  StyleSheet.create({
    image: {
      width: imageSize,
      height: imageSize,
      marginEnd: 10,
    },
    base: {
      width: width,
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: color,
      paddingHorizontal: wp('5%'),
    },
    conteudos: {
      flexDirection: 'row',
      height: '100%',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    texto: {
      fontSize: moderateScale(15),
      color: 'white',
      fontFamily: 'IBMPlexSans-Regular',
    },
  });

export {estilos};
