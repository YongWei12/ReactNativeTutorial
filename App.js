import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';

import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => {
      return [...currentGoals,
      { key: Math.random().toString(), value: goalTitle }]
    })

  }


  const removeGoalHandler = goalId=>{
    setCourseGoals( currentGoals =>{
      return currentGoals.filter(goal=>{
        return goalId !== goal.key;
      });
    });
  };

  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal= {addGoalHandler}/>
      <FlatList
        keyExtractor={(item, index)=> item.key}
        data={courseGoals}
        renderItem={itemData => {
         return <GoalItem id={itemData.item.key} onDelete={removeGoalHandler} title={itemData.item.value}/> 
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10

  }
});
