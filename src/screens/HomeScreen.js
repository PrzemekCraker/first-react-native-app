import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Home screen look</Text>
      <Button
        onPress={() => navigation.navigate("Components")}
        title="Go to Components Demo"
      />
      <Button
        title="Go to List Demo"
        onPress={() => navigation.navigate("List")}
      />
      <Button
        title="Go to Image Demo"
        onPress={() => navigation.navigate("Image")}
      />
      <Button
        title="Go to Counter Demo"
        onPress={() => navigation.navigate("Counter")}
      />
      <Button
        title="Go to Color Demo"
        onPress={() => navigation.navigate("Color")}
      />
      <Button
        title="Go to Square without Reducer Demo"
        onPress={() => navigation.navigate("SquareCopy")}
      />
      <Button
        title="Go to Square with Reducer Demo"
        onPress={() => navigation.navigate("Square")}
      />
      <Button
        title="Go to Counter with Reducer Demo"
        onPress={() => navigation.navigate("CounterReducer")}
      />
      <Button
        title="Go to Counter with Text Demo"
        onPress={() => navigation.navigate("Text")}
      />
      <Button
        title="Go to Counter with Box Demo"
        onPress={() => navigation.navigate("Box")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
