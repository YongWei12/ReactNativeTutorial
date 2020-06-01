import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Platform } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import Color from '../constant/Color';
import CategoryGridTile from '../components/CategoryGridTile';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';



const CategoriesScreen = props => {

    const renderGridItem = (itemData) => {
        return (<CategoryGridTile itemData={itemData} onPress={() => {
            props.navigation.navigate("CategoryMeals", { categoryId: itemData.item.id })
        }} />)
    }

    return (

        <FlatList numColumns={2}
            data={CATEGORIES}
            renderItem={renderGridItem}
            keyExtractor={(item, index) => item.id}
        />

    )
};

CategoriesScreen.navigationOptions = (navData) => {
    return {
        headerTitle: "Categories Meals",
        headerLeft: () => {
            return (
                <HeaderButtons HeaderButtonComponent={HeaderButton} >
                    <Item title='Menu' iconName='ios-menu' onPress={() => { 
                        navData.navigation.toggleDrawer();
                     }} />
                </HeaderButtons>
            )
        }
    }
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
})

export default CategoriesScreen;