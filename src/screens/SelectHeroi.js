import { View, StyleSheet, Text, TouchableOpacity, FlatList, Image, ScrollView} from 'react-native';
import { ProgressBar} from 'react-native-paper';
import Video from 'react-native-video'; 
import {Herois} from '../data/Herois';

const SelectHeroi = ({navigation}) => {

    return(
        <View style={styles.View}>
        <Video source={require('../../assets/image/herois.mp4')} rate={1.0} resizeMode={"cover"} repeat style={styles.video} />
            <FlatList data={Herois} showsHorizontalScrollIndicator={false} pagingEnabled renderItem={({item})=>{     
              return(
                <View style={styles.List}>
                  <View>
                    <Text style={styles.Titulo}>{item.title}</Text>
                    <Image style={styles.Imagem} source={item.img}/>
                    <Text style={styles.TituloDescricao}>Descrição</Text>

                    <ScrollView style={styles.ScrollView}>
                    <View>
                    <Text style={styles.Descricao}>{item.description}</Text>
                    </View>
                    </ScrollView>

                    <View style={styles.Dificuldade}>
                      <View>
                        <Text style={styles.TituloDescricao}>PODER</Text>   
                        <Text style={styles.TituloDescricao}>SAÚDE</Text>       
                        <Text style={styles.TituloDescricao}>STAMINA</Text> 
                      </View>
                      <View>
                        <ProgressBar style={styles.Barra} progress={item.power} theme={{ colors: { primary: 'green' } }}/>
                        <ProgressBar style={styles.Barra} progress={item.health} theme={{ colors: { primary: 'red' } }}/>
                        <ProgressBar style={styles.Barra} progress={item.stamina}/>
                      </View>
                    </View>

                    <View style={styles.Button}>
                      <TouchableOpacity style={styles.List} onPress={()=>navigation.navigate('SelectMissao')}>
                      <Text style={styles.ButtonTxt}>Voltar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.List}>
                      <Text style={styles.ButtonTxt}>Selecionar</Text>
                    </TouchableOpacity>
                      </View>

                  </View>
    
                </View> );}} horizontal />
        </View>
    );
}

const styles = StyleSheet.create({
  Loading : {
    flex: 1,
  },
  video : {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  Barra : {
    marginTop: 5,
    marginBottom: 10,
    marginLeft: 10,
    width: 200,
    height: 20,
  },
  Dificuldade : {
    marginTop:10,
    flexDirection: 'row',
  },
  ScrollView : {
    flex: 1,
    height: 50,
  },
  Button : {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

  },
  Imagem : {
    flex: 3,
    width: 200,
    alignSelf: 'center',
    marginTop: 15,
    marginBottom: 15,
  },
    Titulo : {
      fontSize: 45,
      textAlign: 'center',
      fontFamily: 'ProtestRevolution-Regular',
      color: 'white'
    },
    Descricao : {
      fontSize: 20,
      width: 360,
      textAlign: 'left',
      alignSelf: 'center',
      fontWeight: 'bold',
      color: '#1b2b0d'
    },
    TituloDescricao : {
      fontSize: 27,
      fontFamily: 'PixelifySans-Bold',
      color: '#1b2b0d'
    },
    View : {
      paddingTop: 35,
      justifyContent: 'center',
      alignItems: 'center',
    },
    List : { 
      justifyContent: 'center',
      alignItems: 'center',
      margin: 25,
      marginTop: 0,
      marginBottom: 10,
    },
    ButtonTxt: {
      flex: 1,
      fontSize: 30,
      marginBottom: 5,
      marginTop: 20,
      fontFamily: 'PixelifySans-Medium',
      color: 'white'
    }
  });
export default SelectHeroi;