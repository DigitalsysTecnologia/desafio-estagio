import { React } from "react";
import { View, StyleSheet, FlatList, TouchableOpacity, Text} from 'react-native';
import OnboardingItem from '../../assets/components/OnboardingItem'
import {Herois} from '../data/Herois'
import Video from 'react-native-video'; 



export default SelectHeroi = ({navigation}) => {
    return(
        <View style={styles.container}>  
            <Video style={styles.video} source={require('../../assets/image/herois.mp4')} resizeMode={'cover'}/>
            <FlatList  data={Herois} renderItem={({item}) =>
            <OnboardingItem item={item}>
            </OnboardingItem>
            } horizontal pagingEnabled bounces={false} showsHorizontalScrollIndicator={false}/>       
            <View>
                
            <View style={styles.Button}>
                      <TouchableOpacity style={styles.List} onPress={()=>navigation.navigate('SelectMissao')}>
                      <Text style={styles.ButtonTxt}>Voltar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.List} onPress={()=>navigation.navigate('Menu')}>
                      <Text style={styles.ButtonTxt}>Selecionar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        );
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    video : {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
      },
      ButtonTxt: {
        fontSize: 30,
        marginBottom: 5,
        fontFamily: 'PixelifySans-Medium',
        color: 'white',
        paddingHorizontal: 20,
      },
    Button: {
        flexDirection: 'row',
        marginBottom: 20,
    },
})