import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator  } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import Home from './components/Home'
import Details from './components/Details'
import Liked from './components/Liked'
import Profile from './components/Profile'
import colors from './src/colors/Colors'

const Stack = createNativeStackNavigator ()
const Tab = createBottomTabNavigator()

const TabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style:styles.tabBar,
        activeTintColor: colors.orange,
        inactiveTintColor: colors.gray,
        showLabel: false,
      }}
    >
      <Tab.Screen 
        name="Home" 
        component={ Home } 
        options={{ 
          tabBarIcon: ({color}) => (
          <Entypo name="home" size={28} color={color} />
          ),
          headerShown: false, 
        }} 
      />
      <Tab.Screen 
        name="Liked" 
        component={ Liked } 
        options={{ tabBarIcon: ({color}) => (
          <Entypo name="heart" size={28} color={color} />
          ),
          headerShown: false,
        }} 
      />
      <Tab.Screen 
        name="Profile" 
        component={ Profile } 
        options={{ tabBarIcon: ({color}) => (
          <MaterialCommunityIcons name="account" size={28} color={color} /> 
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Tab Navigator" component={ TabNavigator } options={{ headerShown: false }} />
        <Stack.Screen name="Details" component={ Details } options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  }
})