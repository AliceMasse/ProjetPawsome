import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RegistrationScreen from './Registration';
import Onboarding1Screen from './Onboarding1';
import Onboarding2Screen from './Onboarding2';
import Onboarding3Screen from './Onboarding3';
import Onboarding4Screen from './Onboarding4';
import Onboarding5Screen from './Onboarding5';
import LoginScreen from './login';
import HomeScreen from './Home';
import axios from 'axios';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login">
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="Registration" component={RegistrationScreen} />
        <Stack.Screen name="Onboarding1" component={Onboarding1Screen} />
        <Stack.Screen name="Onboarding2" component={Onboarding2Screen} />
        <Stack.Screen name="Onboarding3" component={Onboarding3Screen} />
        <Stack.Screen name="Onboarding4" component={Onboarding4Screen} />
        <Stack.Screen name="Onboarding5" component={Onboarding5Screen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
