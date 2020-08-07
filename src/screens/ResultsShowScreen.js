import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, FlatList, Image } from "react-native";
import yelp from "../api/yelp";

const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  });
  const id = navigation.getParam("id");

  if (!result) {
    return null;
  }
  return (
    <>
      <Text>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={photo => photo}
        renderItem={({item}) => {
          return <Image  style={styles.imageStyle} source={{uri: item}} />
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    width: 300,
    height: 200
  }
});

export default ResultsShowScreen;
