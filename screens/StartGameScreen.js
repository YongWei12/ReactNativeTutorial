import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    Text,
    Button,
    TouchableWithoutFeedback,
    Keyboard,
    Alert
} from 'react-native';

import Card from '../components/Card'
import Colors from '../constants/Colors'
import Input from '../components/Input'
import NumberContainer from '../components/NumberContainer'
import BodyText from '../components/BodyText'
import TitleText from '../components/TitleText'
import DedaultStyles from '../constants/default-styles'

const StartGameScreen = props => {
    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState();

    const numberInputHandler = inputText => {
        //regular expression to replace no number with empty string
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
    };

    const resetInputHandler = () => {
        setEnteredValue('');
        setConfirmed(false);
    };

    const confirmInputHandler = () => {
        //react will only execute this function after the next render cycle
        const chosenNumber = parseInt(enteredValue);
        //additional validation
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert('Invalid number', 'Number need to be between 1 -99', [{ text: 'okay', style: 'destructive', onPress: resetInputHandler }]);
            return;
        }
        setConfirmed(true);
        setEnteredValue('')
        setSelectedNumber(chosenNumber);
        Keyboard.dismiss();


    };

    let confirmedOutput;

    if (confirmed) {
        confirmedOutput =
            <Card style={styles.summaryContainer}>
                <Text>You Selected</Text>
                <NumberContainer>{selectedNumber}</NumberContainer>
                <Button title="START GAME!!!" onPress={() =>props.onStartGame(selectedNumber)}/>
            </Card>
    }

    return (
        <TouchableWithoutFeedback
            onPress={() => {
                Keyboard.dismiss();
            }}>
            <View style={styles.screen}>
                <TitleText style={styles.title}>Start a new game!!</TitleText>
                <Card style={styles.inputContainer}>
                    <BodyText>Select a number</BodyText>
                    <Input style={styles.input}
                        blurOnSubmit={true}
                        autoCapitalize='none'
                        autoCorrect={false}
                        keyboardType="number-pad"
                        maxLength={2}
                        onChangeText={numberInputHandler}
                        value={enteredValue} />
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}><Button title="Reset" color={Colors.accent} onPress={resetInputHandler} /></View>
                        <View style={styles.button}><Button title="Confirm" color={Colors.primary} onPress={confirmInputHandler} /></View>
                    </View>

                </Card>
                {confirmedOutput}
            </View>
        </TouchableWithoutFeedback>
    );

};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: "center"
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    button: {
        width: 100
    },
    input: {
        width: 50,
        textAlign: 'center'
    },
    summaryContainer: {
        marginTop: 20,
        alignItems:'center'
    }
})

export default StartGameScreen;