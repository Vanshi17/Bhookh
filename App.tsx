/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import { NavigationContainer, RouteProp } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import type {PropsWithChildren} from 'react';
import axios from 'axios';
import { login } from './auth/userAuth';
import {
    Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Stack = createStackNavigator();

export type RootStackParamList = {
  Login: undefined;
  Home: {
    name: String;
    recipes: [];
  };
  SignUp: undefined;
};

// Define the navigation prop type for LoginScreen
type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

// Define the route prop type for HomeScreen (optional)
type HomeScreenRouteProp = RouteProp<RootStackParamList, 'Home'>;


function App(){
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    </NavigationContainer>
);

}

export default App;
