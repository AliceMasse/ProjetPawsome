// Import necessary components and libraries from React Native
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, ImageBackground, View, TouchableOpacity } from 'react-native';
import axios from 'axios'; // Import axios for making HTTP requests

// Import the background image
const backgroundImage = require('./assets/image/background.png');

// Create an axios instance with base URL and timeout
const api = axios.create({
  baseURL: 'http://10.1.5.32:3000',
  timeout: 5000,
});

// Functional component for the Registration screen
const Registration = () => {
  // State variables to store user input
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Function to handle form submission
  const handleSubmit = async () => { // Mark the function as async
    try {
      // Check if all fields are filled
      if (!username || !email || !password || !confirmPassword) {
        alert('All fields are required');
        return;
      }

      // Check if password and confirm password match
      if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
      }

      // Prepare data to be sent in the request
      const data = {
        Username: username,
        Password: password,
        Email: email,
        PhoneNumber: '', // Add the phone number if needed
        Role: 'user', // Set the default role to 'user'
      };

      // Make a POST request to the user registration endpoint
      const response = await api.post('/api/users', data);

      // Check the server response for successful registration
      if (response.data.message === 'User created. Check your email for verification.') {
        alert('Registration successful! Check your email for verification.');
      } else {
        alert('An error occurred during registration');
      }
    } catch (error) {
      // Handle and log errors during registration
      console.error('Error during registration:', error);
      alert('An error occurred during registration');
    }
  };

  // Component for a rounded button
  const RoundedButton = ({ title, onPress }) => (
    <TouchableOpacity style={styles.roundedButton} onPress={onPress}>
      <Text style={{ color: 'white', textAlign: 'center' }}>{title}</Text>
    </TouchableOpacity>
  );

  // JSX structure for the Registration screen UI
  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <View style={styles.container}>
        {/* Input fields for username, email, password, and confirm password */}
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Email Address"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />

        {/* Container for the 'Create Account' button */}
        <View style={styles.signupContainer}>
          <RoundedButton title="Create Account" onPress={handleSubmit} />
        </View>
      </View>
    </ImageBackground>
  );
};

// Styles for the components
const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },

  container: {
    marginTop: 400,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginHorizontal: 10,
    marginBottom: 20,
    width: '90%',
  },

  signupContainer: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },

  roundedButton: {
    backgroundColor: '#992cf1',
    borderRadius: 50,
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: '90%',
    height: 40,
  },
});

// Export the Registration component
export default Registration;




