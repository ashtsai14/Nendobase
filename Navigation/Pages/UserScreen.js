import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const UserScreen = function({navigation}) {
  return(
    <View style={styles.mainContainer}>
      <Text style={styles.homeScreenText}>
        User Screen
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

export default UserScreen;