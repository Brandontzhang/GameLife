import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import QuestScreen from './app/screens/QuestScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.header}>
      <LinearGradient 
        colors={['#9C51B6', '#5946B2']} 
        style={{
          flex: 1
        }}>
          <QuestScreen/>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header:{
    flex:1,
    backgroundColor: "#9C51B6"
}, 
});
