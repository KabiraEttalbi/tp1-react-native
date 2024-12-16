import React from "react";
import {View, Text, Button, TouchableOpacity, Alert, StyleSheet} from "react-native";

const showAlert = (message) => {
    Alert.alert("Alert", message, [{ text: "OK" }]);
  };
const Buttons = () => {
  return (
    <View style={styles.container}>
      <Button
        title="TEST1"
        color="#1E88E5"
        onPress={() => showAlert("ceci est un test1")}
      />
      <TouchableOpacity
        style={styles.touchableButton}
        onPress={() => showAlert("ceci est un test2")}
      >
        <Text style={styles.touchableText}>TEST2</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#333",
  },
  touchableButton: {
    backgroundColor: "#43A047",
    padding: 10,
    marginTop: 20,
    borderRadius: 5,
  },
  touchableText: {
    color: "#FFF",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Buttons;
