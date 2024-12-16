import React from "react";
import { View, Alert, StyleSheet } from 'react-native';
import MyButton from './components/MyButton';

export default function App() {
  return (
    <View style={styles.container}>
      <MyButton
        title="Début du Test2"
        color="#388E3C"
        onPress={() => Alert.alert('Alert', 'ceci est le début du test2')}
      />
      <MyButton
        title="Fin du Test2"
        color="#0288D1"
        onPress={() => Alert.alert('Alert', 'ceci est la fin du test2')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
