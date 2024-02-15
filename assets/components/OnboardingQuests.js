import { React } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image, useWindowDimensions} from 'react-native';
import { ProgressBar} from 'react-native-paper';

export default OnboardingQuests = ({item}) => {
    const {width} = useWindowDimensions();

    return(
        <View style={''}>  
                <View style={[styles.container, {width}]}>
                    <Text style={styles.Titulo}>{item.title}</Text>
                    <Image style={[styles.image, {width, resizeMode: 'contain'}]} source={item.img}/>
                    <Text style={styles.TituloDescricao}>Descrição</Text>
                    <Text style={styles.Descricao}>{item.description}</Text>

                    <View style={styles.Dificuldade}>                    
                      <View>
                        <Text style={styles.BarraDescricao}>DIFICULDADE</Text>   
                      </View>
                      <View>
                        <ProgressBar style={styles.Barra} progress={item.difficulty} theme={{ colors: { primary: 'orange' } }}/>
                      </View>
                    </View>
                </View>
               
        </View>
        );
}

const styles = StyleSheet.create({
    ButtonTxt: {
        fontSize: 30,
        marginBottom: 5,
        fontFamily: 'PixelifySans-Medium',
        color: '#4A0404',
        paddingHorizontal: 20,
      },
    Button: {
        flex: 0.4,
        flexDirection: 'row',
        marginBottom: 20,
    },
    Dificuldade : {
        flex: 2,
        flexDirection: 'row',
      },
    TituloDescricao : {
        fontSize: 27,
        fontFamily: 'PixelifySans-Bold',
        color: '#4A0404',
      },
      BarraDescricao : {
        paddingRight: 30,
        fontSize: 27,
        fontFamily: 'PixelifySans-Bold',
        color: '#4A0404',
      },
      Barra : {
        marginTop: 5,
        marginBottom: 10,
        width: 140,
        height: 20,
      },
    container: {
        marginTop: 50,
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        flex: 3,
        justifyContent: 'center',
        marginBottom: 40,
    },
    Titulo : {
        fontSize: 45,
        textAlign: 'center',
        fontFamily: 'ProtestRevolution-Regular',
        color: '#4A0404',
      },
    Descricao : {
      fontSize: 15,
      paddingHorizontal: 20,
      marginBottom: 20,
      textAlign: 'left',
      fontWeight: 'bold',
      color: '#1b2b0d'
    },
})