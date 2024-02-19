import React, { useState } from "react";
import { View, StyleSheet, Image, useWindowDimensions } from "react-native";
import Carousel from 'react-native-snap-carousel';

import CarouselItem, { ITEM_WIDTH } from '../components/carouselItem';
import GoBackButton from "../../components/go-back-button/button";
import DataComponent from "../components/data";

export interface IHero {
    defaultImg: any;
    blackImg: any;
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
    selected: boolean;
};

const backgroundImage = require('../../../assets/img/background/heroes.png');

function HeroesScreen(props: any): React.JSX.Element {
    const screenWidth = useWindowDimensions().width;
    const screenHeight = useWindowDimensions().height;

    const [currentIndex, setCurrentIndex] = useState(0);

    const [heroes, setHeroes] = useState([
        {
            defaultImg: require("../../../assets/img/heroes/knight.png"),
            blackImg: require("../../../assets/img/heroes/knight-black.png"),
            color: "#DAD8CB",
            name: "Sir ALdric",
            title: "o cavalheiro errante",
            strength: 90,
            health: 70,
            shield: 100,
            agility: 70,
            magicPower: 20,
            range: 20,
            stamina: 100,
            selected: false
        },
        {
            defaultImg: require("../../../assets/img/heroes/lizard.png"),
            blackImg: require("../../../assets/img/heroes/lizard-black.png"),
            color: "#6A8462",
            name: "Kallarix",
            title: "o lagarto das Sombras",
            strength: 30,
            health: 50,
            shield: 45,
            agility: 100,
            magicPower: 70,
            range: 30,
            stamina: 50,
            selected: false
        },
        {
            defaultImg: require("../../../assets/img/heroes/queen.png"),
            blackImg: require("../../../assets/img/heroes/queen-black.png"),
            color: "#41A2DB",
            name: "Queen Eira",
            title: "coração de gelo ",
            strength: 30,
            health: 80,
            shield: 80,
            agility: 80,
            magicPower: 100,
            range: 100,
            stamina: 50,
            selected: false
        },
        {
            defaultImg: require("../../../assets/img/heroes/dragon.png"),
            blackImg: require("../../../assets/img/heroes/dragon-black.png"),
            color: "#E96921",
            name: "Drakkar",
            title: "o dragão Redentor",
            strength: 100,
            health: 100,
            shield: 100,
            agility: 30,
            magicPower: 80,
            range: 100,
            stamina: 50,
            selected: false
        },
        {
            defaultImg: require("../../../assets/img/heroes/mage.png"),
            blackImg: require("../../../assets/img/heroes/mage-black.png"),
            color: "#647BAD",
            name: "Aelar",
            title: "o Sábio Arcano",
            strength: 30,
            health: 100,
            shield: 50,
            agility: 80,
            magicPower: 100,
            range: 100,
            stamina: 100,
            selected: false
        }
    ]);

    const updateSelected = (_currentIndex: number) => {
        let heroesList = heroes;
        heroesList.forEach((hero, index) => {
            hero.selected = _currentIndex == index;
        });

        setHeroes(heroesList);
    };

    return (
        <View style={styles.box}>
            <Image source={backgroundImage} style={styles.imageBackground}></Image>
            <View style={styles.backButton}>
                <GoBackButton navigation={props.navigation}></GoBackButton>
            </View>
            <View style={styles.boxScreen}>
                <Carousel
                    layout="default"
                    layoutCardOffset={heroes.length}
                    ref={(c) => {
                        updateSelected(0);
                    }}
                    data={heroes}
                    onBeforeSnapToItem={(_index) => {
                        setCurrentIndex(_index);
                        updateSelected(_index);
                    }}
                    renderItem={CarouselItem}
                    sliderWidth={screenWidth}
                    itemWidth={ITEM_WIDTH - 50}
                    inactiveSlideShift={-screenHeight/4}
                    useScrollView={true}
                    loop={true}
                    contentContainerCustomStyle={[styles.carousel, {paddingTop: screenHeight/3.5}]}
                    slideStyle={styles.carouselSlide}
                />
                <DataComponent heroData={heroes[currentIndex]}></DataComponent>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    box: {
        height: '100%',
    },

    boxScreen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },

    carousel: {
        alignItems: 'center',
    },

    carouselSlide: {
        alignItems: 'center',
        justifyContent: 'center'
    },

    imageBackground: {
        height: '100%',
        position: 'absolute',
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    backButton: {
        position: 'absolute',
        top: 10,
        left: 10,
        zIndex: 1
    }
});

export default HeroesScreen;