import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import ExpenseTracker from "./Components/ExpenseTracker";


export default function App() {
  return (
    <View style={styles.container}>
      <ExpenseTracker />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});