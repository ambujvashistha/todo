import { react, useState } from "react";
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  Image,
  FlatList,
  Button,
  Touchable,
  TouchableOpacity,
} from "react-native";

const styles = {
  input: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 20,
    width: 250,
    height: 60,
    margin: 5,
    paddingLeft: 30,
    paddingRight: 30,
    backgroundColor: "#F2F0EF",
    fontSize: 20,
  },
  profilePic: {
    height: 55,
    width: 55,
    borderRadius: 100,
    margin: 10,
  },
  todoText: {
    fontSize: 25,
    fontWeight: 20,
    color: "red",
    margin: 10,
  },
  add: {
    height: 60,
    width: 60,
    borderColor: "black",
    borderWidth: 1,
    backgroundColor: "white",
    borderRadius: 10,

    margin: 5,
  },
};

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");
  const [profilePic, setproilePic] = useState(
    "https://upload.wikimedia.org/wikipedia/en/2/21/Web_of_Spider-Man_Vol_1_129-1.png"
  );

  const addTask = (task) => {
    if (task) {
      setTodos([...todos, task]);
    }
  };
  return (
    <SafeAreaView>
      <View style={{ flexDirection: "row" }}>
        <Image style={styles.profilePic} source={{ uri: profilePic }} />
        <TextInput
          style={styles.input}
          onChangeText={(ele) => setTask(ele)}
          value={task}
          placeholder="Add a new task"
        />
        <TouchableOpacity onPress={() => addTask(task)} style={styles.add}>
          <Text>Add</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text>{task}</Text>

        <FlatList
          data={todos}
          renderItem={({ item }) => (
            <View style={{ flexDirection: "row" }}>
              <View>
                <Text style={styles.todoText}>{item}</Text>
              </View>
              <TouchableOpacity>
                <Text>Remove</Text>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
}
