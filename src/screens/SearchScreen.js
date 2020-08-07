import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';

import ResultsList from '../components/ResultsList'

const SearchScreen = ({}) => {
  
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();
  
  const filterByPrice = price => {
    // price can be: '$' or '$$' or '$$$'

    return results.filter(result => {
      return result.price === price
    })
  }
  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
     

      <ScrollView showsVerticalScrollIndicator={false}>
        <ResultsList results={filterByPrice('$')} title='Cheap' />
        <ResultsList results={filterByPrice('$$')} title='Bit pricier' />
        <ResultsList results={filterByPrice('$$$')} title='Going All-in!' />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;