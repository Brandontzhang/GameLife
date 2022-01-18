import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import QuestScreen from './app/screens/QuestScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';

export default function App() {
  return (
    <QuestScreen/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
