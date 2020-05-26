import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';

import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState('false');

  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => {
      return [...currentGoals,
      { key: Math.random().toString(), value: goalTitle }]
    })
    setIsAddMode(false);

  }


  const removeGoalHandler = goalId=>{
    setCourseGoals( currentGoals =>{
      return currentGoals.filter(goal=>{
        return goalId !== goal.key;
      });
    });
  };

  const cancelGoalAdditionHandler = ()=>{
    setIsAddMode(false);
  }

  return (
    <View style={styles.screen}>
      <Button title ="Add New Goal" onPress={ ()=>{ return setIsAddMode(true)}}/>
      <GoalInput onCancel ={cancelGoalAdditionHandler} onAddGoal= {addGoalHandler} visible={isAddMode}/>
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
