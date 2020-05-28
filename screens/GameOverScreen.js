import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import BodyText from '../components/BodyText'
import TitleText from '../components/TitleText'


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
            <BodyText>Number of rounds: {props.roundNumber}</BodyText>
            <BodyText>Number was: {props.userNumber}</BodyText>
            <Button title="New Game" onPress={props.onRestart} />
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
    }
})

export default GameOverScreen;