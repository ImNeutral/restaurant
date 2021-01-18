import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Touchable } from 'react-native';
import { withNavigation } from 'react-navigation';
import { FlatList } from "react-native-gesture-handler";
import ResultsDetail from "./ResultsDetail";

const ResultsList = ({title, results, navigation}) => {
    if(results.length <= 0) {
        return null;
    }
    return (
    <View style={styles.containerStyle}>
        <Text style={styles.titleStyle}>{title}</Text>
        <FlatList 
            horizontal
            showsHorizontalScrollIndicator={false}
            data={results}
            keyExtractor={(result) => result.id}
            renderItem={({item}) => {
                return (
                    <TouchableOpacity onPress={() => navigation.navigate('ResultsShow', {id: item.id})}>
                        <ResultsDetail result={item}/>
                    </TouchableOpacity>
                );
            }}
        />
    </View>
    );
}

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    },
    containerStyle: {
        marginBottom: 10
    }
});

export default withNavigation(ResultsList);