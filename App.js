import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ZipCodeScreen from './screen/ZipCodeScreen';
import WeatherScreen from './screen/WeatherScreen';

const Stack = createStackNavigator();

export default function App() {
   return (
    <NavigationContainer>
       <Stack.Navigator>
       <Stack.Screen name="Home" component={ZipCodeScreen}
          options={{
            headerTitleStyle: { alignSelf: 'center' , fontSize : 25, fontWeight: 'bold'},
            headerStyle: {backgroundColor : '#ADD8E6' } , headerTintColor: 'white' }}
        />
        <Stack.Screen name="Weather" component={WeatherScreen}
          options={{
            headerTitleStyle: { fontSize : 22, fontWeight: 'bold'},
            headerStyle: {backgroundColor : '#ADD8E6'} , headerTintColor: 'white' }}
        />
        </Stack.Navigator>
    </NavigationContainer>
  );
}