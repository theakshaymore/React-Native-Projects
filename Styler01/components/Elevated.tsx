import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Elevated() {
  return (
    <View>
      <Text style={styles.headingText}>Elevated Cards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardOne]}>
          <Text>me</Text>
        </View>
        <View style={[styles.card, styles.cardOne]}>
          <Text>to</Text>
        </View>
        <View style={[styles.card, styles.cardOne]}>
          <Text>scroll</Text>
        </View>
        <View style={[styles.card, styles.cardOne]}>
          <Text>more...</Text>
        </View>
        <View style={[styles.card, styles.cardOne]}>
          <Text>🤣</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 20,
    fontWeight: 'bold',
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
    backgroundColor: '#CAD5E2',
  },
  cardTwo: {
    backgroundColor: '#50DBB4',
  },
  cardThree: {
    backgroundColor: '#5DA3FA',
  },
});
