import React from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';

import { CATEGORIES, MEALS } from '../data/dummy-data'
import { HeaderTitle } from 'react-navigation-stack';

import MealItem from '../components/MealItem';
const CategoryMealScreen = props => {

    const catId = props.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

    const displayedMeals = MEALS.filter(meal => meal.categoryId.indexOf(catId)>=0)


    const renderMealItem = (itemData) =>{
        return(
            <MealItem itemData={itemData} onSelectMeal={()=>{
                props.navigation.navigate("MealDetail", {
                    mealId: itemData.item.id
                })
            }}/>
        )
    }

    return (
        <View style={styles.screen}>
          <FlatList 
          data={displayedMeals}
          keyExtractor={(item, index) => item.id}
          renderItem={renderMealItem}
          style={{width:'100%'}}
          />
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
        margin:10,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default CategoryMealScreen;