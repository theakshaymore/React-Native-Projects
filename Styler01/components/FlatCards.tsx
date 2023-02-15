import React from 'react';
import {StyleSheet, Text, View, useColorScheme, Image} from 'react-native';

function FlatCards(): JSX.Element {
  const isDarkMode = useColorScheme() == 'dark';
  return (
    <View>
      <Text style={styles.headingText}>Top Performer</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Image
            source={{
              uri: 'https://media.gettyimages.com/id/1442809583/photo/lionel-messi-of-argentina-poses-during-the-official-fifa-world-cup-qatar-2022-portrait.jpg?s=612x612&w=0&k=20&c=5kSUbQ4vLaJj1vt3rO6GpupQxrnwZL0t8UYUKkMlEV8=',
            }}
            style={styles.cardImage}
          />
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Image
            source={{
              uri: 'https://media.gettyimages.com/id/1442804898/photo/rodrigo-de-paul-of-argentina-poses-during-the-official-fifa-world-cup-qatar-2022-portrait.jpg?s=612x612&w=0&k=20&c=pieNfN4NviprK2tR6F_aKTo-lzEXcE2bWpPyfOyLDfM=',
            }}
            style={styles.cardImage}
          />
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Image
            source={{
              uri: 'https://media.gettyimages.com/id/1442807648/photo/enzo-fernandez-of-argentina-poses-during-the-official-fifa-world-cup-qatar-2022-portrait.jpg?s=612x612&w=0&k=20&c=0HGBupHihLrYx0cI4N5f7o4UyDJCWk55I51GRtozJVY=',
            }}
            style={styles.cardImage}
          />
        </View>
      </View>
    </View>
  );
}

export default FlatCards;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#6CACE4',
    marginHorizontal: 20,
    marginVertical: 20,
  },
  whiteText: {
    color: '#ffffff',
  },
  darkText: {
    color: '#000000',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
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
    // backgroundColor: '#EF5354',
  },
  cardTwo: {
    // backgroundColor: '#50DBB4',
  },
  cardThree: {
    backgroundColor: '#5DA3FA',
  },
  cardImage: {
    height: 100,
    width: 110,
    borderRadius: 4,
  },
});
