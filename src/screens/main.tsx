import React from "react";
import { Text, View } from "react-native";

export default function MainScreen() {
  return (
    <View style={{
      flex: 1,
      backgroundColor: 'black',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Text>Hello World!</Text>
    </View>
  )
}