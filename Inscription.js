import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, ImageBackground, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import the background image
const backgroundImage = require('./assets/image/background.png');

// Define the Registration component
const Registration = () => {
  // State variables for form inputs
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Handle form submission
  const handleSubmit = () => {
    // Field validation
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      alert('All fields are required');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    // Send data to MySQL database
    const data = {
      firstName,
      lastName,
      email,
      password,
    };

    fetch('http://localhost:3000/api/registration', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((responseData) => {
        if (responseData.success) {
          alert('Registration successful!');
        } else {
          alert('An error occurred during registration');
        }
      })
      .catch((error) => {
        console.error('Error during registration:', error);
        alert('An error occurred during registration');
      });
  };

  const RoundedButton = ({ title, onPress }) => (
    <TouchableOpacity style={styles.roundedButton} onPress={onPress}>
      <Text style={{ color: 'white', textAlign: 'center' }}>{title}</Text>
    </TouchableOpacity>
  );

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="First Name"
          value={firstName}
          onChangeText={setFirstName}
        />
        <TextInput
          style={styles.input}
          placeholder="Last Name"
          value={lastName}
          onChangeText={setLastName}
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
        
        <View style={styles.signupContainer}>
          <RoundedButton title="Create Account" onPress={handleSubmit} />
        </View>
      </View>
    </ImageBackground>
  );
};

// Define the styles for the Registration component
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

export default Registration;
