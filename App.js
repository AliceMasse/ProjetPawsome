import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button, ImageBackground, Text, TouchableOpacity } from 'react-native';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (!email || !password) {
      setError("Fields cannot be blank");
    } else if (!isValidEmail(email)) {
      setError("Please check that the email is written correctly");
    } else {
      // Effectuer la logique de connexion ici
      alert('Logging in...');
    }
  };

  const isValidEmail = (email) => {
    // Utilisez une expression régulière pour vérifier la syntaxe de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const RoundedButton = ({ title, onPress }) => (
    <TouchableOpacity style={styles.roundedButton} onPress={onPress}>
      <Text style={{ color: 'white', textAlign: 'center' }}>{title}</Text>
    </TouchableOpacity>
  );

  const backgroundImage = require('./assets/image/background.png');

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <View style={styles.container}>
        <View style={styles.formContainer}>

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

          {error ? <Text style={styles.errorText}>{error}</Text> : null}

          <RoundedButton title="Log In" onPress={handleLogin} />
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </View>

        <View style={styles.socialLoginContainer}>
          <RoundedButton title="Google" onPress={() => {}} />
          <Text style={styles.socialLoginText}>   or   </Text>
          <RoundedButton title="Facebook" onPress={() => {}} />
        </View>

        <View style={styles.signupContainer}>
          <Text style={styles.signupText}>Not registered yet?</Text>
          <RoundedButton title="Create Account" onPress={() => {}} />
        </View>

      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },

  input: {
    width: 300,
    height: 40,
    borderColor: '#332002',
    backgroundColor: '#fcf9f7',
    color: '#332002',
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
    marginBottom: 10,
  },

  formContainer: {
    marginTop: 450,
    justifyContent: 'center',
    alignItems: 'center',
  },

  forgotPasswordText: {
    textAlign: 'right',
    color: '#332002',
    fontSize: 12,
    marginTop: 10,
  },

  socialLoginContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 30,
    alignItems: 'center',
  },

  socialLoginText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#332002',
  },

  signupContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },

  signupText: {
    fontSize: 16,
    color: '#332002',
    fontWeight: 'bold',
    marginBottom: 10,
  },

  roundedButton: {
    backgroundColor: '#992cf1',
    borderRadius: 50,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },

  errorText: {
    color: '#ED2F2F',
    textAlign: 'center',
    marginBottom: 10,
    fontWeight: 'bold',
  },

});



export default LoginScreen;