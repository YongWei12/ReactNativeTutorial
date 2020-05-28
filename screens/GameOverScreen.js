import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import BodyText from '../components/BodyText'
import TitleText from '../components/TitleText'

import Colors from '../constants/Colors'
import MainButton from '../components/MainButton'


const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <TitleText>The Game is Over</TitleText>
            <View style={styles.imageContainer}>
                <Image style={styles.image}
                    source={require('../assets/success.png')}
                    // source={{ uri: 'https://www.scitecheuropa.eu/wp-content/uploads/2020/01/Mount-Everest-696x392.jpg' }}
                    resizeMode="stretch" />
            </View>
            <View style={styles.resultContainer}>
                <BodyText style={styles.resultText}>Your phone needed <Text style={styles.hilight}>{props.roundNumber}</Text> rounds to guess the number <Text style={styles.hilight}>{props.userNumber}</Text></BodyText>
            </View>
            <MainButton onPress={props.onRestart}>New Game</MainButton>
            </View>
    )
}

const styles = StyleSheet.create({
                screen: {
                flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    imageContainer: {
                borderRadius: 150,
        borderWidth: 3,
        borderColor: 'black',
        width: 300,
        height: 300,
        overflow: 'hidden',
        marginVertical: 30
    },
    image: {
                width: '100%',
        height: '100%'
    },
    hilight: {
                color: Colors.primary,
        fontFamily: 'open-sans-bold'
    },
    resultContainer:{
                marginHorizontal:30,
        marginVertical:15
    },
    resultText:{
                textAlign: 'center',
        fontSize:20
    }
})

export default GameOverScreen;