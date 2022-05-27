import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import sampleSearchData from '../../SampleData/SearchData';

const HomeScreen = function({navigation}) {
  return(
    <View style={styles.mainContainer}>
      <Text style={styles.homeScreenText}>
        Home Screen
      </Text>
    </View>
  )
}


const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  homeScreenText: {
    fontSize: 26,
    fontWeight: 'bold'
  }
});

export default HomeScreen;