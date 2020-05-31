import React from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';

import { CATEGORIES, MEALS } from '../data/dummy-data'
import { HeaderTitle } from 'react-navigation-stack';
import MealList from '../components/MealList'

import MealItem from '../components/MealItem';
const CategoryMealScreen = props => {

    const catId = props.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

    const displayedMeals = MEALS.filter(meal => meal.categoryId.indexOf(catId)>=0)
    return (<MealList listData={displayedMeals} navigation={props.navigation}/>)
}

CategoryMealScreen.navigationOptions = (navigationData) => {
    const catId = navigationData.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

    return ({
        title: selectedCategory.title
    })
};


export default CategoryMealScreen;