import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { string } from "prop-types";

export default function CirculeButton(props) {
  const { children } = props;

  CirculeButton.propTypes = {
    children: string.isRequired,
  };

  return (
    <View style={styles.circleButton}>
      <Text style={styles.circleButtonLavel}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  circleButton: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "#467FD3",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 40,
    bottom: 40,
    // shadow系はiOS対応
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    // elevationはAndroid対応 ※重なり順、高さ
    elevation: 8,
  },
  circleButtonLavel: {
    color: "#fff",
    fontSize: 40,
    lineHeight: 40,
  },
});
