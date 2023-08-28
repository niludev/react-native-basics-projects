import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const MainCardComponent = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          padding: 20,
          margin: 10,
          borderColor: "black",
          borderWidth: 1,
        }}
      >
        <Text>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MainCardComponent;
