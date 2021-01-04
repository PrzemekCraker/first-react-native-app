import React from "react";
import { View, Text, StyleSheet } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textOneStyle}></Text>
      <Text style={styles.textTwoStyle}></Text>
      <Text style={styles.textThreeStyle}></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    height: 200,
  },
  textOneStyle: {
    borderWidth: 5,
    height: 75,
    width: 75,
    borderColor: "red",
    backgroundColor: "red",
    opacity: 0.3,
  },
  textTwoStyle: {
    borderWidth: 5,
    height: 75,
    width: 75,
    borderColor: "green",
    alignSelf: "center",
    backgroundColor: "green",
    opacity: 0.3,
  },
  textThreeStyle: {
    borderWidth: 5,
    height: 75,
    width: 75,
    borderColor: "purple",
    position: "absolute",
    alignSelf: "flex-end",
    backgroundColor: "purple",
    opacity: 0.3,
  },
});

export default BoxScreen;
