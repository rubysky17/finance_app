import { StatusBar } from 'expo-status-bar';
import Route from '../src/routers/route';
import AppProvider from "../AppProvider";
import { View, StyleSheet, Text } from 'react-native';


import { useMigrationHelper } from '@/db/drizzle';
import { DatabaseProvider } from '@/db/provider';

require("../src/presets");


export default function MigrateDataScreen() {
  const { success, error } = useMigrationHelper();

  if (error) {
    return (
      <View >
        <Text>Migration error: {error.message}</Text>
      </View>
    );
  }
  if (!success) {
    return (
      <View >
        <Text>Migration is in progress...</Text>
      </View>
    );
  }

  return <App />
}

function App() {
  return (
    <DatabaseProvider>
      <View style={styles.safeContainer}>
        <AppProvider>
          <StatusBar style='auto' />

          <Route />
        </AppProvider>
      </View>
    </DatabaseProvider>
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

