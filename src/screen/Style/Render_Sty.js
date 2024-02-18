import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

const estilos = StyleSheet.create({
  conteudo: {
    width: '75%',
    flex: 1,
    marginTop: 20,
  },
  infos: {
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#1f1f1f',
    width: '100%',
    color: 'white',
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    textAlignVertical: 'bottom',
    fontSize: moderateScale(15),
  },
  atributosRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  atrContainer: {
    flex: 1,
    alignItems: 'center',
  },
  atrInput: {
    width: '90%',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    padding: 5,
    textAlign: 'center',
    color: 'white',
  },
  label: {
    fontFamily: 'IBMPlexSans-Regular',
    color: 'white',
    fontSize: moderateScale(12),
  },
  avatar: {
    width: '100%',
    height: '25%',
  },
});

export {estilos};
