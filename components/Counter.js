import React, { useState } from "react";
import { View, Text, Image, StyleSheet, Dimensions, Button } from "react-native";

const {width, height} = Dimensions.get('window');


const Counter = ({goBack}) => {
    const [counter, setCounter] = useState(0);
    const reduceCounter = (counter, setCounter) => {
        if (counter > 0) {
            setCounter(counter - 1)
        }
    }

    return (
        <View>
            <Text>{counter}</Text>
            <Button title="Add" onPress={() => setCounter(counter + 1)} />
            <Button title="Reduce" onPress={() => reduceCounter(counter, setCounter)} />
            <Button title="Go Home" onPress={goBack} />
        </View>
    )
}

export default Counter;