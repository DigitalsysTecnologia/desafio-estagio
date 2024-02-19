import React from 'react';
import { View, StyleSheet, Image } from "react-native";

const CarouselItemComponent = (props: any) => {
    const item = props.item;
    const index = props.index;
    const selected: boolean = item.selected;
    const width = 300;

    return (
        <View style={{ width: width }} key={index}>
            <Image
                source={selected ? item.defaultImg : item.blackImg}
                style={[styles.image, { width: width, }]}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        objectFit: 'contain'
    }
})

export default CarouselItemComponent;