import { TouchableOpacity, StyleSheet, Text, Image } from "react-native";

const chevronLeft = require("../../../assets/icons/chevron-left.png");

function GoBackButton(props: any): React.JSX.Element {

    return (
        <TouchableOpacity
            style={styles.box}
            onPress={() => props.navigation.pop()}
        >
            <Image source={chevronLeft} style={styles.image}></Image>
            <Text style={styles.text}>Voltar</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    box: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#ffffff4d',
        paddingVertical: 2,
        paddingLeft: 10,
        paddingRight: 20,
        borderRadius: 20,
        gap: 5
    },

    image: {
        objectFit: 'contain',
        width: 30,
        height: 30
    },

    text: {
        fontFamily: 'InknutAntiqua-SemiBold',
        color: 'black',
        fontSize: 20
    },
});

export default GoBackButton;