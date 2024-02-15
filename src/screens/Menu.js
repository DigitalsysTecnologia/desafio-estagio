import { View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import Video from 'react-native-video'; 

const Menu = ({navigation}) => {
    return(
        <View style={styles.View}>
        <Video source={require('../../assets/image/backg2.mp4')} rate={1.0} resizeMode={"cover"} repeat style={styles.video} />
            <Image source={require('../../assets/image/title.png')}/>
            <TouchableOpacity style={styles.Button} onPress={()=>navigation.navigate('SelectMissao')} >
                <Text style={styles.ButtonTxt} >Começar Aventura</Text>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    video : {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    },
    Button : {
      justifyContent: 'center',
      alignItems: 'center',
    },
    View : {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    ButtonTxt: {
      fontSize: 35,
      marginBottom: 5,
      color: 'black',
      fontFamily: 'PixelifySans-Bold'
    }
});
export default Menu;