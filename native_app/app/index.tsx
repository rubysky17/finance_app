import { StatusBar } from 'expo-status-bar';
import Route from '../src/routers/route';
import AppProvider from "../AppProvider";
import { View, StyleSheet } from 'react-native';

require("../src/presets");

export default function App() {
  return (
    <View style={styles.safeContainer}>
      <AppProvider>
        <StatusBar style='auto' />

        <Route />
      </AppProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    paddingBottom: 20
  },
})

