import React, { useState } from "react";
import { View, Text, Image, StyleSheet, Dimensions, Button, FlatList, TouchableOpacity } from "react-native";

const {width, height} = Dimensions.get('window');


const List = ({goBack}) => {
    const [selectedId, setSelectedId] = useState (null);

    const data = [
        {id: "1", title: "Winter", description: "The snow blankets the ground, giving a silent beauty to the landscape."},
        {id: "2", title: "Spring", description: "Blossoms burst forth from the trees, heralding the renewal of life."},
        {id: "3", title: "Summer", description: "The sun blazes high in the sky, warming the sands and calling everyone to the beach."},
        {id: "4", title: "Autumn", description: "Leaves transform into a kaleidoscope of colors, swirling down with each gust of wind."}
    ]

    const renderItem = ({item}) => {
        const backgroundColor = item.id === selectedId ? '#f9c2ff' : '#f0f0f0';

        return (
            <Item 
                item={item}
                onPress={() => setSelectedId(item.id)}
                backgroundColor={{backgroundColor}}
            />
        )
    }

    const Item = ({item, onPress, backgroundColor}) => {
        return (
            <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
                <Text style={styles.title}>{item.title}</Text>
                <Text>{item.description}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
            <FlatList 
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                extraData={selectedId}
            />
            <Button title="Home Page" onPress={goBack} />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
    },
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 24,
    }
})


export default List;