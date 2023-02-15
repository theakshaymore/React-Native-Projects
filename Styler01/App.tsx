import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import ElevatedCards from './components/ElevatedCards';
import FancyCard from './components/FancyCard';
import FlatCards from './components/FlatCards';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
        <ElevatedCards />
        <FancyCard />
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
