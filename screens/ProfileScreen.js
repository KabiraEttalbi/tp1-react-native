import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

function ProfileScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Profile Screen</Text>
      <Button title="vers Home" onPress={() => navigation.navigate("Home")} />
      <View style={{ height: 16 }} />
      <Button title="Retour" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ProfileScreen;
