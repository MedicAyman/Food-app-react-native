import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";

const SearchScreen = () => {
  const [term, setTerm] = useState(" ");
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('')

  const searchApi = async () => {
    try {
    const response = await yelp.get('/search', {
          params: {
              location: 'san jose',
              term: term,
              limit: 50
          }
      })
      setResults(response.data.businesses)
    } catch(err) {
      console.log(err)
      setErrorMessage('Something went wrong🤨')
    }
  }
  return (
    <View>
      <SearchBar
        term={term}
        onChangeTerm={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => searchApi()}
      />
      {errorMessage ? <Text style={{color: 'red'}}>{errorMessage}</Text> : null}
      <Text>We have found {results.length} results</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
