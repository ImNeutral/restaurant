import React from "react";
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = () => {
    return (
    <View style={styles.backgroundStyle}>
        <Feather name="search" style={styles.searchIconStyle} />
        <TextInput placeholder="Search" style={styles.searchInputStyle}/>
    </View>
    );
}

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#E8E8E8',
        height: 50,
        borderRadius: 5,
        margin: 15,
        flexDirection: "row",
    },
    searchInputStyle: {
        flex: 1,
        fontSize: 18,
    },
    searchIconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 10,
    }
});

export default SearchBar;