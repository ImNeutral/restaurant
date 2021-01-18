import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';
import useSearchResults from '../hooks/useSearchResults';
import ResultsList from "../components/ResultsList";
import { ScrollView } from "react-native-gesture-handler";

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useSearchResults();
    
    const filterResultsByPrice = (price) => {
        // price == ₱₱ || ₱₱₱ || ₱₱₱₱
        return results.filter(result => {
            return result.price === price;
        });
    }

    return (
    <>
        <SearchBar 
            term={term} 
            onTermChange={setTerm}  
            onTermSubmit={() => searchApi(term)}/>
        {errorMessage ? <Text>{errorMessage}</Text> : null}
        <ScrollView>
            <ResultsList results={filterResultsByPrice('₱₱')} title="Big Saver"/>
            <ResultsList results={filterResultsByPrice('₱₱₱')} title="Bit Pricier"/>
            <ResultsList results={filterResultsByPrice('₱₱₱₱')} title="Big Spender"/>
        </ScrollView>
    </>
    );
}

const styles = StyleSheet.create({});

export default SearchScreen;