import {StyleSheet, Dimensions} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

const estilosGeral = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#212121',
    flexDirection: 'column',
  },
  header: {
    flex: 7,
    borderBottomColor: 'red',
    borderBottomWidth: 0.6,
    justifyContent: 'center',
    alignContent: 'center',
    paddingHorizontal: 10,
  },
  titulo: {
    fontFamily: 'IBMPlexSans-Regular',
    fontSize: moderateScale(18),
    color: 'white',
    fontWeight: 'bold',
    alignItems: 'center',
  },
  body: {
    overflow: 'scroll',
    flex: 84,
    borderBottomColor: 'red',
    borderBottomWidth: 0.6,
    alignItems: 'center',
  },
  footer: {
    flex: 9,
    flexDirection: 'row',
  },
});

export {estilosGeral};
