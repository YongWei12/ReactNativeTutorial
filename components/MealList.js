import React from 'react';
import { View,FlatList, StyleSheet } from 'react-native';
import MealItem from'./MealItem'

const MealList = props => {

    //there is no navigation

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
        <View style={styles.list}>
            <FlatList
                data={props.listData}
                keyExtractor={(item, index) => item.id}
                renderItem={renderMealItem}
                style={{ width: '100%' }}
            />
        </View>)

}

const styles = StyleSheet.create({
    list: {
        flex: 1,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }

})


export default MealList;