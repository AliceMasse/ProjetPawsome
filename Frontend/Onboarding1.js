import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const Onboarding1 = () => {
  const navigation = useNavigation();
  const [isIntroShown, setIsIntroSkip] = useState(true);


  
  const handleIntroSkip = () => {
    // Navigate to the home page
    navigation.navigate('Home');
  };

  const handleIntroNext = () => {
    // Navigate to Onboarding2
    navigation.navigate('Onboarding2');
  };

  const RoundedButton = ({ title,onPress }) => (
    <TouchableOpacity style={styles.roundedButton} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {isIntroShown && (
        <View style={styles.intro}>
          <Image source={require('./assets/image/catshead.png')} style={styles.catImage} />
          <View style={styles.introTextContainer}>
            <Text style={styles.introText}>
              You're in the purrfect place!
            </Text>
            <Text style={[styles.introSubtext, { color: '#736D6D' }]}>
              Before we begin, let us guide you on how to find the paw-fect pet-sitter for your four-legged companion!
            </Text>
            <Text style={[styles.introSubtext, { color: '#736D6D' }]}>Ready to roll?</Text>
          </View>
        </View>
      )}
      <View style={styles.buttonContainer}>
        <RoundedButton title="Pass" onPress={handleIntroSkip} />
        <RoundedButton title="Let's go!" onPress={handleIntroNext} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fcf8f2',
  },

  catImage: {
    width: 400,
    height: 300,
    position: 'absolute',
    top: 0,
    left: 0,
  },

  intro: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'left',
    justifyContent: 'flex-end',
    color: '#736D6D',
  },

  introText: {
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 20,
    marginHorizontal: '5%',
  },

  introSubtext: {
    fontSize: 20,
    textAlign: 'left',
    marginHorizontal: '5%',
    marginVertical: '5%',
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: '5%',
    marginVertical: '10%',
    marginTop: '30%',
  },

  roundedButton: {
    borderRadius: 50,
    width: '35%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9609ed',
  },

  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Onboarding1;
