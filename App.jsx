import { StyleSheet, Text, View } from "react-native";
import AppBar from "./src/components/AppBar";
import MemoList from "./src/components/MemoList";
import CirculeButton from "./src/components/CircleButton";

export default function App() {
  return (
    <View style={styles.container}>
      <AppBar />
      <MemoList />
      <CirculeButton>+</CirculeButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F4F8",
  },
});
