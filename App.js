import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  ScrollView,
} from "react-native";
import {componentsList} from "./components/componentConfig";
import MainCardComponent from "./components/MainCardComponent.js";

export default function App() {
  const [selectedComponent, setSelectedComponent] = useState(null);

  if (selectedComponent) {
    const ComponentToRender = selectedComponent.component;
    return (
      <View style={styles.container}>
        <ComponentToRender {...selectedComponent.props} />
        <StatusBar style="auto" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {componentsList.map((item, index) => (
        <MainCardComponent
          key={index}
          title={item.title}
          onPress={() => setSelectedComponent({
            ...item,
            props: { goBack: () => setSelectedComponent(null) }
          })}
        />
      ))}
      <Text>Salam Aien</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
