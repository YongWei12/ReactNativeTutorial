import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import { CATEGORIES } from '../data/dummy-data'
import { HeaderTitle } from 'react-navigation-stack';

const CategoryMealScreen = props => {

    const catId = props.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);


    return (
        <View style={styles.screen}>
            <Text>The CategoryMealScreen Screen</Text>
            <Text>{selectedCategory.title}</Text>
            <Button title="Go to Meal details"
                onPress={() => {
                    props.navigation.navigate("MealDetail")
                }} />

            <Button title="Go Back" onPress={() => props.navigation.goBack()} />
        </View>
    )
}

CategoryMealScreen.navigationOptions = (navigationData) => {
    const catId = navigationData.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

    return ({
        title: selectedCategory.title
    })
};


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default CategoryMealScreen;