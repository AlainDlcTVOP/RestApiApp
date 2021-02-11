import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({ navigation }) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');

    const getResult = async (id) => {
        const respone = await yelp.get(`/${id}`);
        setResult(respone.data);
    };

    useEffect(() => {
        getResult(id);
    }, []);

    if (!result) {
        return null;
    }
    console.log('--------------');
    console.log('--------------');
    console.log("ResultsShowScreen");
    console.log('--------------');
    console.log('--------------');
    console.log(id);
    console.log(result);
    return (
        <View>
            <Text>{result.name}</Text>
            <FlatList
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={({ item }) => {
                    return <Image style={styles.image} source={{ uri: item }} />;
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        height: 200,
        width: 300

    }
});

export default ResultsShowScreen;
