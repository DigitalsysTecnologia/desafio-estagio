import React, { useState } from "react";
import { View, StyleSheet, Image, useWindowDimensions } from "react-native";
import Carousel from 'react-native-snap-carousel';

import CarouselItem from '../components/carouselItem';
import GoBackButton from "../../components/go-back-button/button";
import DataComponent from "../components/data";

export interface IMap {
    defaultImg: any;
    blackImg: any;
    name: string;
    description: string;
    level: number;
    selected: boolean;
};

const backgroundImage = require('../../../assets/img/background/maps.png');

function MapsScreen(props: any): React.JSX.Element {
    const screenWidth = useWindowDimensions().width;
    const screenHeight = useWindowDimensions().height;

    const [currentIndex, setCurrentIndex] = useState(0);

    const [maps, setMaps] = useState([
        {
            defaultImg: require("../../../assets/img/maps/map-1.png"),
            blackImg: require("../../../assets/img/maps/map-1-black.png"),
            name: "A Busca pela Espada Congelada",
            description: "O cavalheiro e seus leais amigos são convocados pelo rei para recuperar a lendária Espada Sagrada, roubada por um poderoso feiticeiro. Eles viajam por terras perigosas, enfrentando criaturas místicas e desafios mortais, determinados a trazer de volta a espada e restaurar a paz no reino.",
            level: 1,
            selected: false
        },
        {
            defaultImg: require("../../../assets/img/maps/map-2.png"),
            blackImg: require("../../../assets/img/maps/map-2-black.png"),
            name: "A Defesa da Vila dos Inocentes",
            description: " Uma horda de criaturas das trevas ameaça invadir uma vila pacífica nos limites do reino. O cavalheiro e seus amigos se colocam na linha de frente da batalha, liderando os aldeões em uma luta desesperada pela sobrevivência. Com estratégia e bravura, eles defendem a vila dos horrores que se aproximam, determinados a proteger os inocentes a qualquer custo.",
            level: 2,
            selected: false
        },
        {
            defaultImg: require("../../../assets/img/maps/map-3.png"),
            blackImg: require("../../../assets/img/maps/map-3-black.png"),
            name: "A Perseguição ao Ladrão de Relíquias",
            description: "Um ladrão ardiloso rouba uma relíquia antiga, de valor inestimável para a tribo do lagarto. Determinado a recuperar o tesouro perdido, o lagarto assume o papel de detetive, seguindo pistas e rastros pelo deserto escaldante e pelas ruas caóticas da cidade, em uma perseguição emocionante atrás do ladrão antes que ele desapareça para sempre.",
            level: 1,
            selected: false
        },
        {
            defaultImg: require("../../../assets/img/maps/map-4.png"),
            blackImg: require("../../../assets/img/maps/map-4-black.png"),
            name: "O Resgate do Príncipe Cativo",
            description: "O príncipe de um reino vizinho é capturado por uma bruxa malévola que deseja usá-lo para seus próprios fins sombrios. Com o coração tocado pela história do príncipe, a Rainha do Gelo parte em uma missão de resgate ousada, enfrentando feitiços poderosos e monstros congelados enquanto luta para libertar o príncipe e derrotar a bruxa maligna.",
            level: 3,
            selected: false
        },
        {
            defaultImg: require("../../../assets/img/maps/map-5.png"),
            blackImg: require("../../../assets/img/maps/map-5-black.png"),
            name: "A Defesa do Portal Interdimensional",
            description: "Um portal interdimensional se abre, conectando o reino a terras desconhecidas e perigosas. O mago é encarregado de proteger o portal dos horrores que espreitam do outro lado, enfrentando criaturas de pesadelo e entidades místicas enquanto luta para manter a segurança e a estabilidade do reino contra as ameaças de além do véu.",
            level: 3,
            selected: false
        }

    ]);

    const updateSelected = (_currentIndex: number) => {
        let mapsList: IMap[] = maps;
        mapsList.forEach((map, index) => {
            map.selected = _currentIndex == index;
        });

        setMaps(mapsList);
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
                    layoutCardOffset={maps.length}
                    ref={() => {
                        updateSelected(0);
                    }}
                    data={maps}
                    onBeforeSnapToItem={(_index) => {
                        setCurrentIndex(_index);
                        updateSelected(_index);
                    }}
                    renderItem={CarouselItem}
                    sliderWidth={screenWidth}
                    itemWidth={230}
                    activeSlideAlignment="center"
                    inactiveSlideShift={-screenHeight/6.5}
                    loop={true}
                    contentContainerCustomStyle={[styles.carousel, {paddingTop: screenHeight/7}]}
                    slideStyle={styles.carouselSlide}
                />
                <DataComponent mapData={maps[currentIndex]}></DataComponent>
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
        justifyContent: 'center',
    },

    carouselSlide: {
        alignItems: 'center',
        justifyContent: 'center'
    },

    imageBackground: {
        display: 'flex',
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

export default MapsScreen;