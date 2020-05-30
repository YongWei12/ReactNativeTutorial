import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';


const MealItem = props => {
    return (
        <TouchableOpacity onPress={props.onSelectMeal}>
            <View style={styles.mealItem}>
                <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
                    <ImageBackground source={{ uri: props.itemData.item.imageUrl }} style={styles.bgImage}>
                        <Text numberOfLines={1} style={styles.title}>{props.itemData.item.title}</Text>
                    </ImageBackground>
                </View>
                <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
                    <Text>{props.itemData.item.duration}m</Text>
                    <Text>{props.itemData.item.complexity.toUpperCase()}</Text>
                    <Text>{props.itemData.item.affordability.toUpperCase()}</Text>

                </View>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    mealItem: {
        height: 200,
        width: '100%',
        backgroundColor: 'grey',
        borderRadius: 15,
        overflow: 'hidden'
    },
    mealRow: {
        flexDirection: 'row'
    },
    mealHeader: {
        height: '85%'
    },
    mealDetail: {
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems:'center',
        height:'15%'
    },
    bgImage: {
        width: '100%',
        height: '100%',
        justifyContent:'flex-end'
    },
    title: {
        fontFamily:'open-sans-bold',
        fontSize: 20,
        color: 'white',
        backgroundColor: 'rgba(0,0,0,0.7)',
        paddingVertical:5,
        paddingHorizontal:12,
        textAlign: 'center'
    }
})


export default MealItem;