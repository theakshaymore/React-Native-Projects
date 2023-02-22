import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Top Moments</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: 'https://media.gettyimages.com/id/1448862993/photo/dominik-livakovic-of-croatia-fouls-julian-alvarez-of-argentina-in-the-box-which-leads-to-a.jpg?s=612x612&w=0&k=20&c=8-P9tiridTnwPetfTCnzYa4wn0zmYtQCgbvv0isU2n8=',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Alvarez's Solo Run</Text>
          <Text style={styles.cardLabel}>Semifinal: Arg vs Cro</Text>
          <Text style={styles.cardDescription}>
            Wondergoal from Alvarez! Man City star gives Argentina two-goal lead
            against Croatia following stunning solo run in World Cup semi-final
          </Text>
          <Text style={styles.cardFooter}>Like</Text>
        </View>
      </View>
      {/* 2nd */}
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: 'https://ss-i.thgim.com/public/incoming/1gglae/article66189355.ece/alternates/FREE_730/1444800716.jpg',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>The MagicMan</Text>
          <Text style={styles.cardLabel}>Arg vs Mex</Text>
          <Text style={styles.cardDescription}>
            Peter Drury: "The Magicmannnnnnnnnn" , Messi delivered a crucial
            goal for Argentina in a 2-0 win over Mexico that ignited the team's
            World Cup chances
          </Text>
          <Text style={styles.cardFooter}>Like</Text>
        </View>
      </View>
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
  card: {
    width: 350,
    height: 360,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  cardElevated: {
    backgroundColor: '#FFFFFF',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },

  cardImage: {
    height: 180,
    marginBottom: 8,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
  },
  cardTitle: {
    color: '#6CACE4',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  cardLabel: {
    color: '#000000',
    fontSize: 14,
    marginBottom: 6,
  },
  cardDescription: {
    color: '#242B2E',
    fontSize: 12,
    marginBottom: 12,
    marginTop: 6,
    flexShrink: 1,
  },
  cardFooter: {
    color: '#6CACE4',
    marginBottom: 4,
  },
});
