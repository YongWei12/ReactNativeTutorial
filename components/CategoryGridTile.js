import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Platform, TouchableNativeFeedback } from 'react-native';

const CategoryGridTile = props => {
    let TouchableComponent = TouchableOpacity;

    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableComponent = TouchableNativeFeedback;
    }


    return (
        <View style={styles.gridItem}>
            <TouchableComponent
                onPress={props.onPress}>
                <View style={{ ...styles.container, ...{ backgroundColor: props.itemData.item.color } }}>
                    <Text numberOfLines={2} style={styles.title}>{props.itemData.item.title}</Text>
                </View>
            </TouchableComponent>
        </View>
    )
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius: 10,
        overflow: "hidden"

    },
    container: {
        flex: 1,
        elevation: 3,
        padding: 15,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'

    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 20,
        textAlign: "right"
    }
})

export default CategoryGridTile;