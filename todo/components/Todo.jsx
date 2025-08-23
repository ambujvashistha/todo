import { react } from "react";
import { View, Text, TextInput } from "react-native";

const styles = {
  input: {
    borderWidth: 1,
    borderColor: "black",
  },
};

export default function Todo() {
  return <TextInput style={styles.input} />;
}
