import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import MealList from '../components/MealList'
import { MEALS } from '../data/dummy-data'

const FavouriteScreen = props => {

const favMeals = MEALS.filter(meal => {return(meal.id ==='m1' || meal.id ==='m2')});

    return (
        <MealList listData={favMeals} navigation={props.navigation}/>
    ) 
}

FavouriteScreen.navigationOptions = {
    headerTitle: 'Your Favourite'
}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default FavouriteScreen;