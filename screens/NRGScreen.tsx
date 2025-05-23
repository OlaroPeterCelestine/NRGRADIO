import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  useWindowDimensions,
  View,
  Image,
  Platform,
  Text,
  TouchableOpacity,
} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { Ionicons } from '@expo/vector-icons';

const images = [
  'https://ug.nrg.radio/wp-content/uploads/2023/09/03-BREAKFAST-SHOW.webp',
  'https://ug.nrg.radio/wp-content/uploads/2023/09/08-ALL.webp',
  'https://ug.nrg.radio/wp-content/uploads/2023/09/03-TRANSIT-SHOW.webp',
];

export default function NRGScreen() {
  const { width } = useWindowDimensions();

  const isTablet = width >= 768;
  const carouselWidth = isTablet ? width * 0.7 : width * 0.9;
  const carouselHeight = isTablet ? 280 : 180;

  return (
    <SafeAreaView style={styles.screen}>
      <View
        style={[
          styles.carouselWrapper,
          { width: carouselWidth, height: carouselHeight },
        ]}
      >
        <Carousel
          loop
          autoPlay
          autoPlayInterval={2000}
          width={carouselWidth}
          height={carouselHeight}
          scrollAnimationDuration={500}
          snapEnabled
          data={images}
          renderItem={({ item }) => (
            <Image
              source={{ uri: item }}
              style={[
                styles.image,
                { width: carouselWidth, height: carouselHeight },
              ]}
              resizeMode="cover"
            />
          )}
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.buttonSpacing]}>
          <Ionicons name="play" size={20} color="#fff" style={styles.icon} />
          <Text style={styles.buttonText}>WATCH</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Ionicons name="headset" size={20} color="#fff" style={styles.icon} />
          <Text style={styles.buttonText}>LISTEN</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#000',
    paddingTop: Platform.OS === 'android' ? 30 : 20,
    alignItems: 'center',
  },
  carouselWrapper: {
    alignSelf: 'center',
  },
  image: {
    borderRadius: 12,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '60%',
    marginTop: 30,
  },
  button: {
    flexDirection: 'row',
    backgroundColor: '#FF3B30',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 15,
    alignItems: 'center',
  },
  buttonSpacing: {
    marginRight: 20,
  },
  icon: {
    marginRight: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
});
