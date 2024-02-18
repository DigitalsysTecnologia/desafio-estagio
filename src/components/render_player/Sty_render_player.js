import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {moderateScale} from 'react-native-size-matters';

const imageSize = Math.min(wp('25%'), hp('15%'));

const estilos = StyleSheet.create({
  container: {
    backgroundColor: '#272727',
    flex: 1,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    width: 450,
  },
  constainerFilho: {
    height: '100%',
    paddingLeft: 10,
    flexDirection: 'column',
    flexShrink: 1,
  },
  texto: {
    fontSize: moderateScale(14.5),
    fontFamily: 'IBMPlexSans-Regular',
    color: 'white',
    flexShrink: 1,
    flexWrap: 'wrap',
  },
  icone: {
    width: imageSize,
    height: imageSize,
  },
});

export {estilos};
