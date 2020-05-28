import React, { useState, useRef, useEffect } from 'react'
import { View, Text, StyleSheet, Button, Alert, ScrollView, FlatList } from 'react-native';

import NumberContainer from '../components/NumberContainer'
import Card from '../components/Card'
import MainButton from '../components/MainButton'
import { Ionicons } from '@expo/vector-icons'

import BodyText from '../components/BodyText'

const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
};

const renderListItem = (listLength, itemData) => {
    return (
        <View style={styles.listItem}>
            <BodyText>#{listLength-itemData.index}</BodyText>
            <BodyText>{itemData.item}</BodyText>
        </View>
    )
}

const GameScreen = props => {
    const initialGuess = generateRandomBetween(1, 99, props.userChoice)
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [pastGuesses, setPastGuesses] = useState([initialGuess.toString()]);

    //state will re- render the component, reference wont
    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    //pulling out items from props
    const { userChoice, onGameOver } = props;

    //run everytime after the gameScreen is rendered
    useEffect(() => {
        if (currentGuess === userChoice) {
            onGameOver(pastGuesses.length)
        }
    }, [currentGuess, userChoice, onGameOver])

    const nextGuessHandler = direction => {
        if ((direction === 'lower' && currentGuess < props.userChoice) ||
            (direction === 'greater' && currentGuess > props.userChoice)) {
            Alert.alert('Dont lie', 'You know it is wrong', [{ text: "sorry!", style: 'cancel' }])
            return;
        }
        if (direction === 'lower') {
            currentHigh.current = currentGuess;
        } else {
            currentLow.current = currentGuess + 1;
        }
        const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess);
        setCurrentGuess(nextNumber);
        // setRounds(currRound => currRound+1);
        setPastGuesses(currPastGuesses => [nextNumber.toString(), ...currPastGuesses])
    }
    return (
        <View style={styles.screen}>
            <Text>Opponent's Guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer} >
                <MainButton onPress={nextGuessHandler.bind('this', 'lower')}><Ionicons name="ios-arrow-down" size={24} color='white' /></MainButton>
                <MainButton onPress={nextGuessHandler.bind('this', 'greater')}><Ionicons name="ios-arrow-up" size={24} color='white' /></MainButton>
            </Card>
            <View style={styles.listContainer}>
                {/* <ScrollView contentContainerStyle={styles.list}>
                    {pastGuesses.map((guess, index) => renderListItem(guess, pastGuesses.length - index))}
                </ScrollView> */}

                <FlatList 
                //for every item in the array
                keyExtractor= {item=> item}
                data={pastGuesses}
                renderItem={renderListItem.bind('this', pastGuesses.length)}
                contentContainerStyle={styles.list}/>
            </View>

        </View>

    );


}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: "center"
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 20,
        width: 400,
        maxWidth: '90%'
    },
    listItem: {
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 15,
        marginVertical: 10,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%'
    },
    listContainer: {
        width: '60%',
        flex: 1
    },
    list: {
        //flex one does not work, should use flexGrow
        flexGrow: 1,
        justifyContent: 'flex-end'
    }
})

export default GameScreen;