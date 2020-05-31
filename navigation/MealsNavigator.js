import { Platform } from 'react-native';
import Color from '../constant/Color'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs'
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavouritesScreen from '../screens/FavouritesScreen'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'

const MealsNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    CategoryMeals: {
        screen: CategoryMealsScreen
    },
    MealDetail: MealDetailScreen

}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Color.primary : ''
        },
        headerTintColor: 'white',
    }
});

const tabScreenConfig = {
    // create stack for the 2 different tabs 
    Meals: {
        screen: MealsNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return (<Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor} />)
            },
            tabBarColor: Color.primary
        },
    },
    Facourites: {
        screen: FavouritesScreen,
        navigationOptions: {
            tabBarLabel: "Favourites!!!",
            tabBarIcon: (tabInfo) => {
                return (
                    < Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />
                )
            },
            tabBarColor:Color.accent
        }
    }
}

const MealsFavTabnavigator = Platform.OS === 'android' ?
    createMaterialBottomTabNavigator(tabScreenConfig, {
        activeColor: "white",
        shifting: true
    }) :
    createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
            activeTintColor: Color.accent
        }
    }
    );


//cos meals is nested-> it shows the main navigator 
export default createAppContainer(MealsFavTabnavigator);