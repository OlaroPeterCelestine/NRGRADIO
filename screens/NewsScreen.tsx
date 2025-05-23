
import React from 'react';
import { SafeAreaView, Text, StyleSheet, useWindowDimensions } from 'react-native';

export default function NewsScreen() {
  const { width } = useWindowDimensions();
  const isTablet = width >= 768;

  return (
    <SafeAreaView style={[styles.screen, isTablet && styles.tabletScreen]}>
      <Text style={[styles.header, isTablet && styles.tabletHeader]}>📰 News</Text>
      <Text style={[styles.text, isTablet && styles.tabletText]}>Stay updated with the latest news.</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#000',
  },
  tabletScreen: {
    padding: 40,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#FF3B30',
  },
  tabletHeader: {
    fontSize: 32,
  },
  text: {
    fontSize: 16,
    color: '#fff',
  },
  tabletText: {
    fontSize: 20,
  },
});
