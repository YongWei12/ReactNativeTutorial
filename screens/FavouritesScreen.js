import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import MealList from '../components/MealList';
import { MEALS } from '../data/dummy-data';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';

const FavouriteScreen = props => {

    const favMeals = MEALS.filter(meal => { return (meal.id === 'm1' || meal.id === 'm2') });

    return (
        <MealList listData={favMeals} navigation={props.navigation} />
    )
}

FavouriteScreen.navigationOptions = (navData) => {
    return {
        headerTitle: 'Your Favourite',
        headerLeft: () => {
            return (
                <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item title="Menu" iconName="ios-menu" onPress={() => {
                        navData.navigation.toggleDrawer();
                    }} />
                </HeaderButtons>
            )
        }
    }
}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default FavouriteScreen;