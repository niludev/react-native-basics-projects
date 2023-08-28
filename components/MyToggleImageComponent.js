import React, { useState } from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";

const MyToggleImageComponent = ({ goBack }) => {
  const [isImageVisible, setIsImageVisible] = useState(true);

  const toggleImageVisibility = () => {
    setIsImageVisible(!isImageVisible);
  };

  return (
    <View>
      {isImageVisible && (
        <Image
          source={require("../assets/manja-vitolic-gKXKBY-C-Dk-unsplash.jpg")}
          style={{ flex: 1, width: 200, height: 200 }}
          resizeMode="contain"
        />
      )}
      <Button title="Toggle the Picture" onPress={toggleImageVisibility} />
      <Button title="Home Page" onPress={goBack} />
    </View>
  );
};

export default MyToggleImageComponent;
