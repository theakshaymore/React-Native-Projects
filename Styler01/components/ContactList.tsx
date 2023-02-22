import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ContactList() {
  const contacts = [
    {
      uid: 1,
      name: 'Lionel Messi',
      bio: 'goat/captain/pessi',
      imageUrl:
        'https://media.gettyimages.com/id/1442809583/photo/lionel-messi-of-argentina-poses-during-the-official-fifa-world-cup-qatar-2022-portrait.jpg?s=612x612&w=0&k=20&c=5kSUbQ4vLaJj1vt3rO6GpupQxrnwZL0t8UYUKkMlEV8=',
    },
    {
      uid: 2,
      name: 'R de Paul',
      bio: 'work house',
      imageUrl:
        'https://media.gettyimages.com/id/1442804898/photo/rodrigo-de-paul-of-argentina-poses-during-the-official-fifa-world-cup-qatar-2022-portrait.jpg?s=612x612&w=0&k=20&c=pieNfN4NviprK2tR6F_aKTo-lzEXcE2bWpPyfOyLDfM=',
    },
    {
      uid: 3,
      name: 'Enzo Fernandez',
      bio: 'rising star',
      imageUrl:
        'https://media.gettyimages.com/id/1442807648/photo/enzo-fernandez-of-argentina-poses-during-the-official-fifa-world-cup-qatar-2022-portrait.jpg?s=612x612&w=0&k=20&c=0HGBupHihLrYx0cI4N5f7o4UyDJCWk55I51GRtozJVY=',
    },
    {
      uid: 4,
      name: 'Julian Alvarez',
      bio: 'junior aguero',
      imageUrl:
        'https://media.gettyimages.com/id/1407853946/photo/julian-alvarez-of-manchester-city-acknowledges-the-fans-during-the-manchester-city-summer.jpg?s=612x612&w=0&k=20&c=Jh4aaL8RMF7Nd-gcGNHGruFNoPxUlUjsI0VBNeEAexQ=',
    },
    {
      uid: 5,
      name: 'Mac Allester',
      bio: 'unsung hero',
      imageUrl:
        'https://media.gettyimages.com/id/1450125051/photo/alexis-mac-allister-of-argentina-celebrates-with-their-fifa-world-cup-qatar-2022-winners.jpg?s=612x612&w=0&k=20&c=z-9UDxTJR9nv1WZRhTH-xhI9hsXvcz7Wol0tf3zzjws=',
    },
    {
      uid: 6,
      name: 'Paulo Dybala',
      bio: 'next messi',
      imageUrl:
        'https://media.gettyimages.com/id/1245707358/photo/topshot-argentinas-forward-paulo-dybala-reacts-after-he-scored-a-goal-in-the-penalty-shootout.jpg?s=612x612&w=0&k=20&c=DAjpwXcLmf_Ga8_Jdio6HxBOCUlYOQU7_-RTSLQH9dU=',
    },
    {
      uid: 7,
      name: 'Di Maria',
      bio: 'made for finals',
      imageUrl:
        'https://media.gettyimages.com/id/1450082551/photo/angel-di-maria-of-argentina-celebrates-after-scoring-the-teams-second-goal-past-hugo-lloris.jpg?s=612x612&w=0&k=20&c=2jqTXwn5NXwvo_ifXEkh6aCGi2bl2SN6ZpYJiHi3qaw=',
    },
    {
      uid: 8,
      name: 'Lisandro Martinez',
      bio: 'licha',
      imageUrl:
        'https://media.gettyimages.com/id/1448019749/photo/lisandro-martinez-of-argentina-celebrates-after-the-win-in-the-penalty-shootout-during-the.jpg?s=612x612&w=0&k=20&c=aB-w6abAnUHwt_bbcmUCDqBJ1viv8rZiD2nAJCU_mBM=',
    },
    {
      uid: 9,
      name: 'Emi Martinez',
      bio: 'the wall',
      imageUrl:
        'https://media.gettyimages.com/id/1450107861/photo/emiliano-martinez-of-argentina-poses-for-a-photo-with-the-adidas-golden-glove-trophy-during.jpg?s=612x612&w=0&k=20&c=a2_ZmG7OFQdYiYIn6nGezRCUFiMjrkDP9Fl_klZKrcg=',
    },
  ];

  return (
    <View>
      <Text style={styles.headingText}>Team List</Text>
      <View style={styles.container}>
        {contacts.map(({uid, name, bio, imageUrl}) => (
          <View key={uid} style={styles.userCard}>
            <Image
              source={{
                uri: imageUrl,
              }}
              style={styles.userImage}
            />
            <View>
              <Text style={styles.userName}>{name}</Text>
              <Text style={styles.userBio}>{bio}</Text>
            </View>
          </View>
        ))}
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
  container: {
    paddingHorizontal: 16,
    marginBottom: 4,
  },
  userCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 3,
    backgroundColor: '#6CACE4',
    padding: 8,
    borderRadius: 10,
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 14,
  },
  userName: {
    fontSize: 17,
    fontWeight: '600',
    color: '#FFF',
  },
  userBio: {
    fontSize: 11,
    color: '#FFF',
  },
});
