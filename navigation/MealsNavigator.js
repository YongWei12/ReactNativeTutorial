import { Platform, Text } from 'react-native';
import Color from '../constant/Color'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createDrawerNavigator } from 'react-navigation-drawer'
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavouritesScreen from '../screens/FavouritesScreen'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import FilterScreen from '../screens/FilterScreen'




const defaultStackNavOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Color.primary : ''
    },
    headerTitleStyle:{
        fontFamily:'open-sans-bold'
    },
    //for back text for ios
    headerBackTitleStyle:{
        fontFamily:'open-sans'
    },
    headerTintColor: 'white',

}

const MealsNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    CategoryMeals: {
        screen: CategoryMealsScreen
    },
    MealDetail: MealDetailScreen

}, {
    defaultNavigationOptions: defaultStackNavOptions
});

const FavNavigator = createStackNavigator({
    FavouritesScreen: FavouritesScreen,
    MealDetail: MealDetailScreen
}, {
    defaultNavigationOptions: defaultStackNavOptions
});

const FiltersNavigator = createStackNavigator({
    Filters: FilterScreen
},
    {
        defaultNavigationOptions: defaultStackNavOptions
    })

const tabScreenConfig = {
    // create stack for the 2 different tabs 
    Meals: {
        screen: MealsNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return (<Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor} />)
            },
            tabBarColor: Color.primary,
            tabBarLabel: Platform.OS==='android'? <Text style={{fontFamily: "open-sans-bold"}}>Meals</Text>: "Meals"
        },
    },
    Facourites: {
        screen: FavNavigator,
        navigationOptions: {
            tabBarLabel: "Favourites!!!",
            tabBarIcon: (tabInfo) => {
                return (
                    < Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />
                )
            },
            tabBarColor: Color.accent,
            tabBarLabel: Platform.OS==='android'? <Text style={{fontFamily: "open-sans-bold"}}>Favourites</Text>: "Meals"
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
            labelStyle:{
                fontFamily:'open-sans-bold'
            },
            activeTintColor: Color.accent
        }
    }
    );

const MainNavigator = createDrawerNavigator({
    MealsFavs: {
        screen: MealsFavTabnavigator,
        navigationOptions:{
            drawerLabel: 'Meals '
        }
    },
    Filter: FiltersNavigator
},{
    contentOptions:{
        activeTintColor: Color.accent,
        labelStyle:{
            fontFamily: 'open-sans'
        }
    }
});


//cos meals is nested-> it shows the main navigator 
export default createAppContainer(MainNavigator);