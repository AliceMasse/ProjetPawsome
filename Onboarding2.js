import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';

const RoundedButton = ({ title }) => (
  <TouchableOpacity style={styles.button}>
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
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handlePass}>
          <Text style={styles.buttonText}>Pass</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleNext}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
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
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 10,
  },

  button: {
    borderRadius: 50,
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: '35%',
    bottom: 150,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#992cf1",
    flexDirection: 'row',
  },

  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fcf9f7',
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },

  topImage: {
    bottom:300,
    height: '4%',
    width: '60%',
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
    top: 50,
    left: 20,
    width: '70%',
  },

  description: {
    fontSize: 22,
    textAlign: 'right',
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
