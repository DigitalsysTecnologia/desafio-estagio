import { StyleSheet, View, Text, Image } from "react-native";
import { IMap } from "../screen/maps";

const iconSkull = require("../../../assets/icons/skull.png");

function DataComponent(props: any): React.JSX.Element {
    const mapData: IMap = props.mapData;

    let levelIcons: React.JSX.Element[] = [];

    for (let i: number = 0; i < (mapData.level ?? 1); i++) {
        levelIcons.push(
            <Image key={i} style={styles.imgIcon} source={iconSkull}></Image>
        );
    }

    return (
        <View style={styles.boxAll}>
            <View style={styles.boxTop}>
                <Text style={[styles.text, styles.nameText]}>{mapData.name}</Text>
                <View style={styles.boxLevel}>
                    <Text style={[styles.text, styles.levelText]}>Dificuldade</Text>
                    <View style={styles.boxIcons}>
                        {levelIcons}
                    </View>
                </View>
            </View>
            <View>
                <Text style={[styles.text, styles.descriptionText]}>
                    {mapData.description}
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    boxAll: {
        width: '100%',
        paddingHorizontal: 15,
        paddingVertical: 20,
        gap: 20,
        backgroundColor: '#d9d9d980',
        height: 305
    },

    boxTop: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        gap: 10
    },

    boxLevel: {
        flex: 1,
        gap: 5
    },

    boxIcons: {
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },

    text: {
        fontFamily: 'InknutAntiqua-SemiBold',
        color: 'black',
    },

    nameText: {
        flex: 2,
        fontFamily: 'InknutAntiqua-Bold',
        lineHeight: 33,
        fontSize: 18
    },

    descriptionText: {
        textAlign: 'center',
        lineHeight: 25,
        fontSize: 13
    },

    levelText: {
        lineHeight: 17,
        fontSize: 9
    },

    imgIcon: {
        alignItems: 'center',
        objectFit: 'contain',
        width: 20,
        height: 20
    }
});

export default DataComponent;