import { react, useState } from "react";
import { View, Text, TextInput, SafeAreaView, Image } from "react-native";

const styles = {
  input: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 20,
    width: 250,
    height: 40,
    margin: 5,
    padding: 30,
    backgroundColor: "#F2F0EF",
  },
  profilePic: {
    height: 55,
    width: 55,
    borderRadius: 100,
    margin: 10,
  },
};

export default function Todo() {
  const [profilePic, setproilePic] = useState(
    "https://upload.wikimedia.org/wikipedia/en/2/21/Web_of_Spider-Man_Vol_1_129-1.png"
  );
  return (
    <SafeAreaView style={{ flexDirection: "row" }}>
      <Image style={styles.profilePic} source={{ uri: profilePic }} />
      <TextInput style={styles.input}> </TextInput>
    </SafeAreaView>
  );
}
