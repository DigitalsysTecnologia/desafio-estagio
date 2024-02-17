import { StyleSheet, PixelRatio } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { moderateScale } from 'react-native-size-matters';


const fontScale = PixelRatio.getFontScale();
const getFontSize = size => size / fontScale;

const imageSize = Math.min(wp("25%"), hp("15%"));



const estilos = StyleSheet.create({
    container: {
        backgroundColor: "#272727",
        flex: 1,
        margin: 5,
        alignItems: "center",
        flexDirection: "collumn",
        width: 360      
    },
    titulo: {
        fontSize: moderateScale(19),  
        fontWeight: "900", 
        fontFamily: "IBMPlexSans-Regular",
        color: "white",
    },

    constainerFilho:{
        flexDirection: "row", 
        justifyContent: "space-between",
        width: "100%",
    },
    texto: {
        fontSize: moderateScale(14.5),   
        fontFamily: "IBMPlexSans-Regular",
        color: "white",        
    },
    icone: {
        width: imageSize,
        height: imageSize
    }

});

export { estilos };
