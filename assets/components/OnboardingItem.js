import { React } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image, useWindowDimensions} from 'react-native';
import { ProgressBar} from 'react-native-paper';

export default OnboardingItem = ({item}) => {
    const {width} = useWindowDimensions();

    return(
        <View style={''}>  
                <View style={[styles.container, {width}]}>
                    <Text style={styles.Titulo}>{item.title}</Text>
                    <Image style={[styles.image, {width, resizeMode: 'contain'}]} source={item.img}/>
                    <Text style={styles.TituloDescricao}>Descrição</Text>
                    <Text style={styles.Descricao}>{item.description}</Text>
                    <Text style={styles.TituloDescricao}>Atributos</Text>

                    <View style={styles.Dificuldade}>                    
                      <View>
                        <Text style={styles.BarraDescricao}>PODER</Text>   
                        <Text style={styles.BarraDescricao}>SAÚDE</Text>       
                        <Text style={styles.BarraDescricao}>STAMINA</Text> 
                      </View>
                      <View>
                        <ProgressBar style={styles.Barra} progress={item.power} theme={{ colors: { primary: 'green' } }}/>
                        <ProgressBar style={styles.Barra} progress={item.health} theme={{ colors: { primary: 'red' } }}/>
                        <ProgressBar style={styles.Barra} progress={item.stamina}/>
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
        color: 'white',
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
        color: '#1b2b0d'
      },
      BarraDescricao : {
        paddingRight: 30,
        fontSize: 27,
        fontFamily: 'PixelifySans-Bold',
        color: '#1b2b0d'
      },
      Barra : {
        marginTop: 5,
        marginBottom: 10,
        width: 160,
        height: 20,
      },
    container: {
        marginTop: 30,
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        flex: 2,
        justifyContent: 'center',
        marginBottom: 40,
    },
    Titulo : {
        fontSize: 45,
        textAlign: 'center',
        fontFamily: 'ProtestRevolution-Regular',
        color: 'white'
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