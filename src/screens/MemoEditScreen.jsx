import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import AppBar from "../components/AppBar";
import CirculeButton from "../components/CircleButton";

export default function MemoEditScreen() {
  return (
    <View style={styles.container}>
      <AppBar />
      <View style={styles.inputContainer}>
        <TextInput value="買い物リスト" multiline style={styles.input} />
      </View>
      <CirculeButton name="check" color="#fff" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    paddingHorizontal: 27,
    paddingVertical: 32,
    fontSize: 16,
    lineHeight: 24,
    flex: 1,
  },

  input: {
    flex: 1,
    textAlignVertical: "top",
  },
});
