import { react } from "react";
import { View, Text, TextInput } from "react-native";

const styles = {
  input: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 20,
    width: 250,
    height: 40,
    padding: 30,
  },
};

export default function Todo() {
  return <TextInput style={styles.input} />;
}
