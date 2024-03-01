// Import necessary components and libraries from React Native
import React, { useState } from 'react';
import { View, Image, StyleSheet, TextInput, ImageBackground, Text, TouchableOpacity } from 'react-native';
import axios from 'axios'; // Axios for making HTTP requests
import * as AuthSession from 'expo-auth-session'; // AuthSession for handling authentication sessions
import { hashPassword } from './yourPasswordHashingLibrary'; // Import your password hashing library

// Importing background and social media icons
const backgroundImage = require('./assets/image/background.png');
const googleIcon = require('./assets/image/google.png');
const facebookIcon = require('./assets/image/facebook.png');

// Functional component for the Login screen
const LoginScreen = ({ navigation }) => {
  // State variables to store user input and error messages
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Function to handle the login process
  const handleLogin = async () => {
    try {
      // Hash the password before sending it to the server
      const hashedPassword = hashPassword(password);

      // Make a POST request to the login API endpoint with hashed user credentials
      const response = await axios.post('http://10.1.5.32:3000/api/login', {
        email,
        password: hashedPassword,
      });

      // Check if the response status is 200 (OK)
      if (response.status === 200) {
        // Redirect to the 'Onboarding1' screen on successful login
        navigation.navigate('Onboarding1');
      } else {
        // Set an error message for unexpected errors during login
        setError('Unexpected error during login.');
      }
    } catch (error) {
      // Handle errors, log them, and set an error message
      if (error.response) {
        console.error(error.response.data.message);
        setError(error.response.data.message);
      } else {
        console.error(error.message);
        setError('Unexpected error during login.');
      }
    }
  };

  // ... (rest of the code remains unchanged)

  // JSX structure for the Login screen UI
  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <View style={styles.container}>
        <View style={styles.formContainer}>
          {/* Input fields for email and password */}
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            autoCorrect={false}
          />

          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            autoCapitalize="none"
            autoCorrect={false}
          />

          {/* Display error message if exists */}
          {error ? <Text style={styles.errorText}>{error}</Text> : null}

          {/* Button to trigger the login process */}
          <TouchableOpacity style={styles.RoundedButtonFull} onPress={handleLogin}>
            <Text style={{ color: 'white', textAlign: 'center' }}>Log In</Text>
          </TouchableOpacity>
        </View>

        {/* Container for social media login options */}
        {/* ... (rest of the code remains unchanged) */}
      </View>
    </ImageBackground>
  );
};


// Styles for the components
const styles = StyleSheet.create({
  // background..
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },

  // Input Container
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 480,
  },

  // Email & Mdp
  input: {
    width: 360,
    height: 40,
    borderColor: '#332002',
    color: '#332002',
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },

  //Forgot Password ?
  forgotPasswordText: {
    textAlign: 'right',
    color: '#332002',
    fontSize: 12,
    marginTop: 10,
    marginLeft: '67%',
  },

  // Log In & Create Account Buttons
  RoundedButtonFull: {
    backgroundColor: '#992cf1',
    borderRadius: 50,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 10,
    textAlignVertical: 'center',
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },

  // Google & Fb Container
  socialLoginContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 60,
    alignItems: 'center',
    justifyContent: 'left',
    width: '90%',
  },

  // Or
  socialLoginText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#271300',
  },

    // Google & Fb Buttons
    RoundedButtonSmall: {
      borderRadius: 50,
      paddingHorizontal: 20,
      paddingVertical: 10,
      width: '45%',
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: '#271300',
      flexDirection: 'row',
    },
  
    // Google & Fb Icon
    socialLoginIcon: {
      width: 20,
      height: 20,
      marginRight: 10,
    },

  //Big Container
  signupContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },

  //Create Account
  signupText: {
    fontSize: 16,
    color: '#332002',
    fontWeight: 'bold',
    marginBottom: 2,
  },

  // Error message
  errorText: {
    color: '#ED2F2F',
    textAlign: 'center',
    marginBottom: 10,
    fontWeight: 'bold',
  },
});

// Export the LoginScreen component
export default LoginScreen;
