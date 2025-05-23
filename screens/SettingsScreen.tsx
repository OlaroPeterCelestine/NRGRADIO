import React from 'react';
import { SafeAreaView, Text, StyleSheet, useWindowDimensions, View, Image, ScrollView } from 'react-native';

const images = [
  'https://ug.nrg.radio/wp-content/uploads/2023/09/03-BREAKFAST-SHOW.webp',
  'https://ug.nrg.radio/wp-content/uploads/2023/09/08-ALL.webp',
  'https://ug.nrg.radio/wp-content/uploads/2023/09/03-TRANSIT-SHOW.webp',
];

export default function SettingsScreen() {
  const { width } = useWindowDimensions();
  const isTablet = width >= 768;

  return (
    <SafeAreaView style={[styles.screen, isTablet && styles.tabletScreen]}>
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
        <Text style={[styles.header, isTablet && styles.tabletHeader]}>⚙️ Settings</Text>
        <Text style={[styles.text, isTablet && styles.tabletText]}>Adjust your preferences here.</Text>

        <View style={[styles.imageContainer, isTablet && styles.tabletImageContainer]}>
          {images.map((uri, index) => (
            <Image
              key={index}
              source={{ uri }}
              style={[styles.image, isTablet && styles.tabletImage]}
              resizeMode="cover"
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
  },
  tabletScreen: {
    padding: 40,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#FF3B30',
    textAlign: 'center',
  },
  tabletHeader: {
    fontSize: 32,
  },
  text: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
  tabletText: {
    fontSize: 20,
  },
  imageContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
  },
  tabletImageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    width: '100%',
    height: 180,
    borderRadius: 12,
    marginBottom: 15,
  },
  tabletImage: {
    width: '30%',
    height: 200,
    marginBottom: 0,
  },
});
