import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const ChoiceCard = ({ player, choice: { uri, name } }) => {
    const title = name && name.charAt(0).toUpperCase() + name.slice(1);
    return (
      <View style={styles.choiceContainer}>
        <Text style={styles.choiceDescription}>{player}</Text>
        <View style={styles.choiceImageContainer}>
            <Image source={uri || require('../assets/splash.png')} resizeMode='contain' style={styles.choiceImage} />
        </View>
        <Text style={styles.choiceCardTitle}>{title || '...'}</Text>
      </View>
    );
};

const styles = StyleSheet.create({
    choiceContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    choiceDescription: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#006355'
    },
    choiceImageContainer:{
        width: '100%',
        aspectRatio: 1
    },
    choiceImage: {
        flex: 1
    },
    choiceCardTitle: {
        fontSize: 20,
        fontWeight: 'bold'
    }
});

export default ChoiceCard
