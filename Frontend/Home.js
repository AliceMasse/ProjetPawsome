import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Text, Image, TouchableOpacity, ScrollView } from 'react-native';

const Home = () => {
  const [search, setSearch] = useState('');

  const articles = [
    {
      title: "What are the UK's favourite dogs?",
      image: 'https://th.bing.com/th/id/OIG4.d420coMpnUwIJ7Fq7Z92?pid=ImgGn',
      summary: 'Discover the most popular dog breeds in England.',
      date: 'February 14, 2024'
    },
    {
      title: 'How do you adapt your cat to a new environment?',
      image: 'https://th.bing.com/th/id/OIG2.2z1wTREcPBB.EdmfvUOp?pid=ImgGn',
      summary: "Tips to help your cat feel at home in a new place.",
      date: 'February 26, 2024'
    },
    {
      title: "What are horses' basic needs?",
      image: 'https://th.bing.com/th/id/OIG2.OTSgTuYU0Rz4fcojLn9R?w=1024&h=1024&rs=1&pid=ImgDetMain',
      summary: "Feed, water, shelter, care and exercise: the essentials for your horse's well-being.",
      date: 'March 1, 2024'
    }
  ];

  const chunkArray = (array, size) => {
    return array.reduce((acc, _, i) => (i % size ? acc : [...acc, array.slice(i, i + size)]), []);
  };

  const themes = [
    {
      title: 'Pet food',
      icon: 'https://th.bing.com/th/id/OIG2.jTXi7h4X7B5WBX3ATy.n?w=1024&h=1024&rs=1&pid=ImgDetMain'
    },
    {
      title: 'Vet care',
      icon: 'https://th.bing.com/th/id/OIG3.V.sXXmtfBHFex.fvEiba?pid=ImgGn'
    },
    {
      title: 'Fees & insurance',
      icon: 'https://th.bing.com/th/id/OIG2.iQVSeJ4a9OROxuiqehdI?pid=ImgGn'
    },
    {
      title: 'Métiers',
      icon: 'https://th.bing.com/th/id/OIG4.JUpAHUcqqr6SF_ntLAa.?w=1024&h=1024&rs=1&pid=ImgDetMain'
    },
    {
      title: 'Loisirs',
      icon: 'https://th.bing.com/th/id/OIG3.NMc0uQZG_WTfKdfASJg6?w=1024&h=1024&rs=1&pid=ImgDetMain'
    },
    {
      title: 'Baby animals',
      icon: 'https://th.bing.com/th/id/OIG4.l5AOgMl9c7JHDMPz7L1F?pid=ImgGn'
    }
  ];

  const navigationIcons = {
    search: require('./assets/image/search.png'),
    home: require('./assets/image/purplehome.png'),
    pets: require('./assets/image/pets.png'),
    account: require('./assets/image/account.png'),
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.searchBar}>
          <TextInput
            placeholder="Search..."
            style={styles.searchInput}
            value={search}
            onChangeText={(text) => setSearch(text)}
          />
          <TouchableOpacity
            style={styles.searchButton}
            onPress={() => console.log('Search Pressed: ', search)}
          >
            {/* Search icon */}
            <Text>🔍</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Section Articles */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Discover our articles</Text>
        <ScrollView showsHorizontalScrollIndicator={false}>
          {/* Articles in a vertical scroll */}
          {articles
            .filter((article) =>
              article.title.toLowerCase().includes(search.toLowerCase())
            )
            .map((article, index) => (
              <View key={index} style={styles.articleContainer}>
                <Image source={{ uri: article.image }} style={styles.articleImage} />
                <View style={styles.articleTextContainer}>
                  <Text style={styles.articleTitle}>{article.title}</Text>
                  <Text style={styles.articleExcerpt}>{article.summary}</Text>
                  <Text style={styles.articleDate}>{article.date}</Text>
                </View>
              </View>
            ))}
        </ScrollView>
      </View>

      {/* Section Themes */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>By topic</Text>
        <View style={styles.themeGrid}>
          {/* Grid of themes (3 per row) */}
          {chunkArray(themes, 3).map((row, rowIndex) => (
            <View key={rowIndex} style={styles.themeRow}>
              {row.map((theme, index) => (
                <TouchableOpacity key={index} style={styles.themeItem}>
                  <Image source={{ uri: theme.icon }} style={styles.themeImage} />
                  <Text>{theme.title}</Text>
                </TouchableOpacity>
              ))}
            </View>
          ))}
        </View>
      </View>

      {/* Navigation tabs */}
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
    backgroundColor: '#fcf8f2',
  },

  header: {
    padding: 15,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#eee',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  searchBar: {
    marginTop: '5%',
    flexDirection: 'row',
    alignItems: 'center',
  },

  searchInput: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5',
    borderRadius: 5,
    marginRight: 10,
  },

  searchButton: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9609ed',
    borderRadius: 5,
  },

  section: {
    padding: 20,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  }, 

  articleTextContainer: {
    flex: 1,
  },

  articleExcerpt: {
    fontSize: 14,
    color: '#736D6D',
  },
  
  articleDate: {
    fontSize: 12,
    color: '#999',
  },

  articlePreview: {
    marginRight: 15,
  },

  articleImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
  },

  articleTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },

  themeGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    justifyContent: 'center',
    alignItems: 'center',
  },

  themeItem: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: '2.3%',
    marginVertical: '2.3%',
  },

  themeRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  themeImage: {
    width: 80,
    height: 80,    
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


export default Home;
