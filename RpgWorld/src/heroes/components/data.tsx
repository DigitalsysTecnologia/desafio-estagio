import { StyleSheet, View, Text, Image } from "react-native";
import LinearGradient from "react-native-linear-gradient";

export interface IHeroData {
    color: string;
    name: string;
    title: string;
    strength: number;
    health: number;
    shield: number;
    agility: number;
    magicPower: number;
    range: number;
    stamina: number;
};

const iconStrength = require("../../../assets/icons/dumbbell.png");
const iconHealth = require("../../../assets/icons/heart.png");
const iconShield = require("../../../assets/icons/shield.png");
const iconAgility = require("../../../assets/icons/agility.png");
const iconMagicPower = require("../../../assets/icons/potion.png");
const iconRange = require("../../../assets/icons/range.png");
const iconStamina = require("../../../assets/icons/stamina.png");

function DataComponent(props: any): React.JSX.Element {
    const heroData: IHeroData = props.heroData;

    return (
        <LinearGradient 
        colors={[heroData.color+'00', heroData.color]}
        locations={[0, 0.3]}
        style={styles.boxAll}>
            <View>
                <Text style={[styles.text, styles.nameText]}>{heroData.name}</Text>
                <Text style={[styles.text, styles.titleText]}>{heroData.title}</Text>
            </View>
            <View style={styles.boxAllStatus}>
                <View>
                    <View style={styles.boxStatus}>
                        <Image source={iconStrength} style={styles.imgIcon}></Image>
                        <Text style={[styles.text, styles.statusText]}>Força: {heroData.strength}</Text>
                    </View>
                    <View style={styles.boxStatus}>
                        <Image source={iconHealth} style={styles.imgIcon}></Image>
                        <Text style={[styles.text, styles.statusText]}>Vida: {heroData.health}</Text>
                    </View>
                    <View style={styles.boxStatus}>
                        <Image source={iconShield} style={styles.imgIcon}></Image>
                        <Text style={[styles.text, styles.statusText]}>Defesa: {heroData.shield}</Text>
                    </View>
                    <View style={styles.boxStatus}>
                        <Image source={iconAgility} style={styles.imgIcon}></Image>
                        <Text style={[styles.text, styles.statusText]}>Agilidade: {heroData.agility}</Text>
                    </View>
                </View>
                <View>
                    <View style={styles.boxStatus}>
                        <Image source={iconMagicPower} style={styles.imgIcon}></Image>
                        <Text style={[styles.text, styles.statusText]}>Magia: {heroData.magicPower}</Text>
                    </View>
                    <View style={styles.boxStatus}>
                        <Image source={iconRange} style={styles.imgIcon}></Image>
                        <Text style={[styles.text, styles.statusText]}>Alcance: {heroData.range}</Text>
                    </View>
                    <View style={styles.boxStatus}>
                        <Image source={iconStamina} style={styles.imgIcon}></Image>
                        <Text style={[styles.text, styles.statusText]}>Estamina: {heroData.stamina}</Text>
                    </View>
                </View>
            </View>
        </LinearGradient>

    );
}

const styles = StyleSheet.create({
    boxAll: {
        width: '100%',
        paddingHorizontal: 15,
        paddingTop: 30,
        paddingBottom: 15
    },

    boxAllStatus: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center',
        gap: 30
    },

    boxStatus: {
        padding: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 10,
        width: 130
    },

    text: {
        fontFamily: 'InknutAntiqua-SemiBold',
        color: 'black',
    },

    nameText: {
        lineHeight: 40,
        fontSize: 20
    },

    titleText: {
        lineHeight: 25,
        fontSize: 13
    },

    statusText: {
        lineHeight: 34,
        fontSize: 15
    },

    imgIcon: {
        alignItems: 'center',
        objectFit: 'contain',
        width: 20,
        height: 20
    }
});

export default DataComponent;