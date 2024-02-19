import { StyleSheet, View, Text, ImageBackground, TouchableOpacity } from 'react-native';

const image = require('../../../assets/img/background/home.png');
const buttonGradient = require('../../../assets/effects/button-gradient.png');

function HomeScreen(props: any): React.JSX.Element {
    return (
        <View style={styles.box}>
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => props.navigation.push('Heroes')}
                >
                    <ImageBackground style={styles.buttonBackground} source={buttonGradient}>
                        <Text style={styles.text}>Heróis</Text>
                    </ImageBackground>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => props.navigation.push('Maps')}
                >
                    <ImageBackground style={styles.buttonBackground} source={buttonGradient}>
                        <Text style={styles.text}>Aventuras</Text>
                    </ImageBackground>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    box: {
        height: '100%',
    },

    image: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    text: {
        lineHeight: 55,
        fontFamily: 'InknutAntiqua-SemiBold',
        color: 'black',
        fontSize: 25
    },

    button: {
        width: 300,
        height: 60,
        borderColor: 'black',
        borderWidth: 2,
        marginBottom: 20
    },

    buttonBackground: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        objectFit: 'contain'
    }
});

export default HomeScreen;