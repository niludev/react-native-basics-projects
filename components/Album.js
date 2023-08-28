import React, { useState } from "react";
import { View, Text, Image, StyleSheet, Dimensions, Button } from "react-native";


const {width, height} = Dimensions.get('window');


const Card = ({imageSource, title}) => {
    return (
        <View style={styles.card}>
        <Image source={imageSource} style={styles.cardImage}/>
        <Text style={styles.cardText}>{title}</Text>
    </View>
    )
}

const Album = ({goBack}) => {
    return (
        <View style={styles.container}>
            <View style={styles.cardsContainer}>
                <Card imageSource={require('../assets/pic1.jpg')} title="Beach 1" />
                <Card imageSource={require('../assets/pic2.jpg')} title="Beach 2" />
                <Card imageSource={require('../assets/pic3.jpg')} title="Beach 3" />
            </View>
            <Button style={styles.homePageButton} title="Home Page" onPress={goBack} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    cardsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },

    card: {
        flex: 1,
        margin: width * 0.025,
        alignItems: 'center',
        
    },

    cardImage: {
        height: width * 0.25,
        width: width * 0.25,
        marginBottom: height * 0.01,
    },

    cardText: {
        fontSize: width * 0.04,
    },

    homePageButton: {
        // marginBottom: height * 0.02,
        marginTop: height * 0.02,
    }
})

/* const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    card: {
        flex: 1,
        margin: 10,
        alignItems: 'center',
         
    },

    cardImage: {
        height: 100,
        width: 100,
        marginBottom: 10,
    },

    cardText: {
        fontSize: 16,
    }
}) */

export default Album;