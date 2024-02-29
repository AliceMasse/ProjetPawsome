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

// //   const handleCreateAccount = () => {
// //     navigation.navigate('Registration');
// //   };

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

// // const Stack = createStackNavigator();

// // const App = () => (
// //   <NavigationContainer>
// //     <Stack.Navigator initialRouteName="Login">
// //       <Stack.Screen
// //         name="Login"
// //         component={LoginScreen}
// //         options={{ headerShown: false }}
// //       />
// //       <Stack.Screen name="Registration" component={Registration} />
// //     </Stack.Navigator>
// //   </NavigationContainer>
// // );




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
    // RoundedButtonSmall: {
    //   borderRadius: 50,
    //   paddingHorizontal: 20,
    //   paddingVertical: 10,
    //   width: '45%',
    //   height: 50,
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   borderWidth: 1,
    //   borderColor: '#271300',
    //   flexDirection: 'row',
    // },
  
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


import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';

const RoundedButton = ({ title }) => (
  <TouchableOpacity style={styles.roundedButton}>
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

const Onboarding2 = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const topImage = require('./assets/image/onboarding2paw.png');
  const catImage = require('./assets/image/onboarding2.png');

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePass = () => {
    // TODO: Implement redirection logic
  };

  const navigationIcons = {
    search: require('./assets/image/purplesearch.png'),
    home: require('./assets/image/home.png'),
    pets: require('./assets/image/pets.png'),
    account: require('./assets/image/account.png'),
  };

  return (
    <View style={styles.container}>
      <View style={styles.roundedButton}>
        <TouchableOpacity title="Pass" onPress={handlePass} />
        <TouchableOpacity title="Next" onPress={handleNext} />
      </View>
  
      <Image source={topImage} style={styles.topImage} />
      <Image source={catImage} style={styles.catImage} />
      <View style={styles.textContainer}>
        <Text style={styles.description}>
          Here you can search for pet-sitters and filter proposals (verified profiles, reviews, location, pet-sitting dates, etc.).
        </Text>
      </View>
  
      <View style={styles.tabs}>
        <TouchableOpacity style={styles.tab}>
          <Image source={navigationIcons.search} style={styles.tabIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab} onPress={() => console.log('Home pressed')}>
          <Image source={navigationIcons.home} style={styles.tabIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Image source={navigationIcons.pets} style={styles.tabIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Image source={navigationIcons.account} style={styles.tabIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fbf8f6',
  },
  
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },

  topImage: {
    width: 100,
    height: 100,
    top: 10,
    marginTop: '5%',
  },

  catImage: {
    position: 'absolute',
    width: 362,
    height: 500,
    right: 0,
    bottom: 50,
    transform: [{ translateY: -50 }],
  },

  textContainer: {
    bottom: -30,
    width: '78%',
  },

  description: {
    fontSize: 22si ,
    textAlign: 'right',
  },

  roundedButton: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '10%',
  },

  tabs: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#eee',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  tab: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  articleContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },

  tabIcon: {
    width: 50,
    height: 50,
    marginBottom: 5,
  },

  tabText: {
    fontSize: 12,
  },
});

export default Onboarding2;
