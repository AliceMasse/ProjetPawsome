// import React, { useState } from 'react';
// import { View, Image, Button, StyleSheet, TextInput, ImageBackground, Text, TouchableOpacity } from 'react-native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { NavigationContainer } from '@react-navigation/native';

// const backgroundImage = require('./assets/image/background.png');
// const googleIcon = require('./assets/image/google.png');
// const facebookIcon = require('./assets/image/facebook.png');

// const LoginScreen = ({ navigation }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleLogin = () => {
//     if (!email || !password) {
//       setError("Fields cannot be blank");
//     } else if (!isValidEmail(email)) {
//       setError("Please check that the email is written correctly");
//     } else {
//       // Perform login logic here
//       alert('Logging in...');
//     }
//   };

//   const handleCreateAccount = () => {
//     navigation.navigate('Registration');
//   };

//   const isValidEmail = (email) => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   };

//   const RoundedButtonSmall = ({ title, onPress, icon }) => (
//     <TouchableOpacity style={styles.RoundedButtonSmall} onPress={onPress}>
//       <Image source={icon} style={styles.socialLoginIcon} />
//       <Text style={{ color: '#271300', textAlign: 'center' }}>{title}</Text>
//     </TouchableOpacity>
//   );

//   const RoundedButtonFull = ({ title, onPress }) => (
//     <TouchableOpacity style={styles.RoundedButtonFull} onPress={onPress}>
//       <Text style={{ color: 'white', textAlign: 'center' }}>{title}</Text>
//     </TouchableOpacity>
//   );

//   return (
//     <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
//       <View style={styles.container}>
//         <View style={styles.formContainer}>
//           <TextInput
//             style={styles.input}
//             placeholder="Email"
//             value={email}
//             onChangeText={setEmail}
//             autoCapitalize="none"
//             autoCorrect={false}
//           />

//           <TextInput
//             style={styles.input}
//             placeholder="Password"
//             value={password}
//             onChangeText={setPassword}
//             secureTextEntry
//             autoCapitalize="none"
//             autoCorrect={false}
//           />

//           {error ? <Text style={styles.errorText}>{error}</Text> : null}

//           <Text style={[styles.forgotPasswordText, { textAlign: 'right' }]}>Forgot Password?</Text>
//           <RoundedButtonFull title="Log In" onPress={handleLogin} />
//         </View>

//         <View style={styles.socialLoginContainer}>
//           <RoundedButtonSmall title="Google" icon={googleIcon} onPress={() => {}} />
//           <Text style={styles.socialLoginText}>  or  </Text>
//           <RoundedButtonSmall title="Facebook" icon={facebookIcon} onPress={() => {}} />
//         </View>

//         <View style={styles.signupContainer}>
//           <Text style={styles.signupText}>Not registered yet?</Text>
//           <RoundedButtonFull title="Create Account" onPress={handleCreateAccount} />
//         </View>
//       </View>
//     </ImageBackground>
//   );
// };

// const Registration = () => (
//   <View>
//     <Text>Registration Screen</Text>
//   </View>
// );

// const Stack = createStackNavigator();

// const App = () => (
//   <NavigationContainer>
//     <Stack.Navigator initialRouteName="Login">
//       <Stack.Screen
//         name="Login"
//         component={LoginScreen}
//         options={{ headerShown: false }}
//       />
//       <Stack.Screen name="Registration" component={Registration} />
//     </Stack.Navigator>
//   </NavigationContainer>
// );




// //////////////////////////////////////////////////////////////////////////////
// // STYLE // STYLE // STYLE //// STYLE // STYLE // STYLE //// STYLE // STYLE //
// //////////////////////////////////////////////////////////////////////////////




// const styles = StyleSheet.create({
//   //Background
//   backgroundImage: {
//     flex: 1,
//     resizeMode: 'cover',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },

//   // Input Container
//   formContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 480,
//   },

//   // Email & Mdp
//   input: {
//     width: 360,
//     height: 40,
//     borderColor: '#332002',
//     color: '#332002',
//     borderWidth: 1,
//     padding: 10,
//     borderRadius: 10,
//     marginBottom: 10,
//   },

//   //Forgot Password ?
//   forgotPasswordText: {
//     textAlign: 'right',
//     color: '#332002',
//     fontSize: 12,
//     marginTop: 10,
//     marginLeft: '67%',
//   },

//   // Log In & Create Account Buttons
//   RoundedButtonFull: {
//     backgroundColor: '#992cf1',
//     borderRadius: 50,
//     paddingHorizontal: 20,
//     paddingVertical: 10,
//     marginTop: 10,
//     textAlignVertical: 'center',
//     width: '100%',
//     height: 50,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },

//   // Google & Fb Container
//   socialLoginContainer: {
//     flex: 1,
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     marginTop: 60,
//     alignItems: 'center',
//     justifyContent: 'left',
//     width: '90%',
//   },

//   // Or
//   socialLoginText: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#271300',
//   },

//     // Google & Fb Buttons
//     RoundedButtonSmall: {
//       borderRadius: 50,
//       paddingHorizontal: 20,
//       paddingVertical: 10,
//       width: '45%',
//       height: 50,
//       justifyContent: 'center',
//       alignItems: 'center',
//       borderWidth: 1,
//       borderColor: '#271300',
//       flexDirection: 'row',
//     },
  
//     // Google & Fb Icon
//     socialLoginIcon: {
//       width: 20,
//       height: 20,
//       marginRight: 10,
//     },

//   //Big Container
//   signupContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 10,
//   },

//   //Create Account
//   signupText: {
//     fontSize: 16,
//     color: '#332002',
//     fontWeight: 'bold',
//     marginBottom: 2,
//   },

//   // Error message
//   errorText: {
//     color: '#ED2F2F',
//     textAlign: 'center',
//     marginBottom: 10,
//     fontWeight: 'bold',
//   },
// });

// export default App;



