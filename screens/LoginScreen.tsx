/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import type {PropsWithChildren} from 'react';
import { login } from '../auth/userAuth';
import {
  Alert,
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

import { fetchData } from '../controllers/recipeController';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';


const styles = StyleSheet.create({
    container: {
      padding: 32,
      flex: 1,
      alignSelf: 'center',
      width: '100%'
    },
    image: {
      height: 100,
      width: 100,
      backgroundColor: "#4c4c4c4c",
      borderRadius: 10,
      alignSelf: 'center',
      marginTop: 50
    },
    title: {
      fontSize: 24,
      fontWeight: '600',
      color: "#303030",
      alignSelf: 'center',
      marginTop: 30
    },
    subtitle: {
      fontSize: 15,
      color: "#4c4c4c",
      alignSelf: 'center',
      marginTop: 5,
      marginBottom: 20
    },
    input: {
      backgroundColor : "#ffffff",
      color: "#cecece",
      borderRadius: 7,
      paddingVertical: 20,
      paddingHorizontal: 20,
      marginBottom: 20,
      verticalAlign: 'middle'
    },
    button: {
      marginHorizontal: 100,
      // fontSize: 24,
      // paddingTop: 10
    },
    oneliner: {
      fontSize: 15,
      color: "#4c4c4c",
      alignSelf: 'center',
      marginTop: 40,
      marginBottom: 20
    },
    social: {
      width: '80%',
      alignSelf: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    signup: {
      marginTop: 30,
      alignSelf: 'center'
    }
  });


export default function LoginScreen() {

    const backgroundStyle = {
    backgroundColor: "#f6d6d6",
    Colors: "Black"
    };

  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [recipes, setRecipes] = React.useState([]);

  const navigation = useNavigation()

  const auth = async(user: String, pass : String) =>{
    if(login(user, pass)){
      const data = await fetchData();
      setRecipes(data.recipes)
      console.log(recipes);
      // navigation.navigate('Home', { name: user, recipes: data.recipes})
    }
    else{
      Alert.alert('Error', 'Invalid Credentials!');
    }
  }

  return (
    <SafeAreaView style={{flex:1, backgroundColor: "#e8e8e8"}}>
      <View style={styles.container}>
        <View style={styles.image}>
          
        </View>
        <Text style={styles.title}>
        Welcome Back!
        </Text>
        <Text style={styles.subtitle}>
        Log in to your existant account
        </Text>
              
        <TextInput
          style={styles.input}
          onChangeText={setUsername}
          value={username}
          placeholder="Username"
        />
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          placeholder="Password"
        />
        <View style={styles.button}>
          <Button
            onPress={()=>{
              auth(username, password)
            }}
            disabled={ !username || !password}
            title="LOG IN"
            color="#000"
          />
        </View>
        <Text style={styles.oneliner}>
          or connect using
        </Text>
        <View style={styles.social}>
        <Button
            // onPress={onPressFn}
            title="Google"
            color="#000"
          />
          <Button
            // onPress={onPressLearnMore}
            title="Facebook"
            color="#000"
          />
        </View>
        <Text style={styles.signup}>
          Don't have a account? <Text style={{fontWeight: 600}}>Sign Up</Text>
        </Text>
      </View>
          
    </SafeAreaView>
  );
}