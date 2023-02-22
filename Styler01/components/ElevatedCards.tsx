import {ScrollView, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

export default function Elevated() {
  return (
    <View>
      <Text style={styles.headingText}>La Albiceleste</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Image
            source={{
              uri: 'https://images.pexels.com/photos/14846793/pexels-photo-14846793.jpeg?auto=compress&cs=tinysrgb&w=600',
            }}
            style={styles.cardImage}
          />
        </View>
        <View style={[styles.card, styles.cardOne]}>
          <Image
            source={{
              uri: 'https://images.pexels.com/photos/14980615/pexels-photo-14980615.jpeg?auto=compress&cs=tinysrgb&w=600',
            }}
            style={styles.cardImage}
          />
        </View>
        <View style={[styles.card, styles.cardOne]}>
          <Image
            source={{
              uri: 'https://images.pexels.com/photos/14846778/pexels-photo-14846778.jpeg?auto=compress&cs=tinysrgb&w=600',
            }}
            style={styles.cardImage}
          />
        </View>
        <View style={[styles.card, styles.cardOne]}>
          <Image
            source={{
              uri: 'https://images.pexels.com/photos/14980647/pexels-photo-14980647.jpeg?auto=compress&cs=tinysrgb&w=600',
            }}
            style={styles.cardImage}
          />
        </View>
        <View style={[styles.card, styles.cardOne]}>
          <Image
            source={{
              uri: 'https://images.pexels.com/photos/15207721/pexels-photo-15207721.jpeg?auto=compress&cs=tinysrgb&w=600',
            }}
            style={styles.cardImage}
          />
        </View>
        <View style={[styles.card, styles.cardOne]}>
          <Image
            source={{
              uri: 'https://images.pexels.com/photos/14818678/pexels-photo-14818678.jpeg?auto=compress&cs=tinysrgb&w=600',
            }}
            style={styles.cardImage}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#6CACE4',
    marginHorizontal: 20,
    marginVertical: 20,
  },
  container: {
    padding: 8,
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: 100,
    borderRadius: 4,
    margin: 8,
  },
  cardOne: {
    // backgroundColor: '#CAD5E2',
  },

  cardImage: {
    height: 100,
    width: 100,
    borderRadius: 4,
  },
});
