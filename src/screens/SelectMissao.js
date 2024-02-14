import { View, StyleSheet, Text, TouchableOpacity, FlatList, Image} from 'react-native';
import { ProgressBar} from 'react-native-paper';
import {Missoes} from '../data/Missoes';

const SelectMissao = ({navigation}) => {
    return(
      <View style={styles.View}>
        <Image style={styles.Background} source={require('../../assets/image/background.jpg')}/>
          <FlatList data={Missoes} showsHorizontalScrollIndicator={false}
          pagingEnabled
          renderItem={({item})=>{
          return( 
            <View style={styles.List}>
              <View>
                <Text style={styles.Titulo}>{item.title}</Text>
                <Image style={styles.Imagem} source={item.img}/>
                <Text style={styles.TituloDescricao}>Descrição</Text>
                <Text style={styles.Descricao}>{item.description}</Text>
           
                <View style={styles.Dificuldade}>
                        <Text style={styles.TituloDescricao}>DIFICULDADE</Text>   
                        <ProgressBar style={styles.Barra} progress={item.difficulty} theme={{ colors: { primary: 'red' } }}/>
                </View>

                <TouchableOpacity style={styles.Button} >
                  <Text style={styles.ButtonTxt} onPress={()=>navigation.navigate('SelectHeroi')}>Vamos Nessa!</Text>
                </TouchableOpacity>
              </View>

            </View>
          );}} horizontal />
    </View>
    );
}
const styles = StyleSheet.create({
  Background : {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  Dificuldade : {
    flexDirection: 'row',
  },
  TituloDescricao : {
    fontSize: 27,
    fontFamily: 'PixelifySans-Bold',
    color: '#4A0404'
  },
  Button : {
    justifyContent: 'center',
    alignItems: 'center',
  },
  Barra : {
    marginTop: 5,
    marginBottom: 10,
    marginLeft: 10,
    width: 150,
    height: 20,
  },
  Imagem : {
    flex: 1,
    width: 350,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 15,

  },
    Titulo : {
      fontSize: 30,
      marginTop: 20,
      alignSelf: 'center',
      color: '#4A0404',
      fontFamily: 'ProtestRevolution-Regular'
    },
    Descricao : {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#4A0404',
      width: 350,
      textAlign: 'left',
    },
    View : {
      justifyContent: 'center',
      alignItems: 'center',
    },
    List : { 
      justifyContent: 'center',
      alignItems: 'center',
      margin: 30,
    },
    ButtonTxt: {
      fontSize: 35,
      marginTop: 10,
      color: '#4A0404',
      fontFamily: 'PixelifySans-Bold'
    }
  });
export default SelectMissao;