import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

//Screens
import HomeScreen from './Pages/HomeScreen.js';
import SearchScreen from './Pages/SearchScreen';
import UserScreen from './Pages/UserScreen';

//Screen Names
const homeName = 'Home';
const searchName = 'Search';
const userName = 'User';

const Tab = createBottomTabNavigator();

const MainContainer = function() {
  return(
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline'
            } else if (rn === searchName) {
              iconName = focused ? 'search' : 'search-outline';
            } else if (rn === userName) {
              iconName = focused ? 'person' : 'person-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />
          },
        })}>

        <Tab.Screen name={homeName} component={HomeScreen} />
        <Tab.Screen name={searchName} component={SearchScreen} />
        <Tab.Screen name={userName} component={UserScreen} />

      </Tab.Navigator>
    </NavigationContainer>
  )
};

const styles = StyleSheet.create({
});


export default MainContainer;