import { React } from "react";
import { View, StyleSheet, FlatList, TouchableOpacity, Text, Image} from 'react-native';
import OnboardingQuests from '../../assets/components/OnboardingQuests'
import {Missoes} from '../data/Missoes'



export default SelectMissao = ({navigation}) => {
    return(
        <View style={styles.container}>  
            <Image style={styles.Imagem} source={require('../../assets/image/background.jpg')}/>
            <FlatList  data={Missoes} renderItem={({item}) =>
            <OnboardingQuests item={item}>
            </OnboardingQuests>
            } horizontal pagingEnabled bounces={false} showsHorizontalScrollIndicator={false}/>       
            <View>
                
            <View style={styles.Button}>
                      <TouchableOpacity style={styles.List} onPress={()=>navigation.navigate('SelectHeroi')}>
                      <Text style={styles.ButtonTxt}>Selecionar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        );
}
const styles = StyleSheet.create({
    Imagem : {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
      },
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
      ButtonTxt: {
        fontSize: 30,
        marginBottom: 5,
        fontFamily: 'PixelifySans-Medium',
        color: '#4A0404',
        paddingHorizontal: 20,
      },
    Button: {
        flexDirection: 'row',
        marginBottom: 20,
    },
})