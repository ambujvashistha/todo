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
    borderRadius: 15,
    margin: 5,
    paddingLeft: 7,
    paddingTop: 15,
  },
  removeBtn: {
    height: 60,
    width: 80,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 15,
    margin: 5,
    justifyContent: "center", // centers child
    alignItems: "center", // centers child
  },
  removeIcon: {
    height: 25, // smaller fixed size
    width: 25,
    resizeMode: "contain", // ensures it scales nicely
  },
  task: {
    width: 200,
    borderColor: "black",
    borderWidth: 1,
    backgroundColor: "white",
    borderRadius: 15,
    marginLeft: 10,
    margin: 5,
    padding: 5,
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
          onSubmitEditing={() => addTask(task)}
        />
        <TouchableOpacity onPress={() => addTask(task)} style={styles.add}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>ADD</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1, alignItems: "center" }}>
        <FlatList
          data={todos}
          renderItem={({ item, index }) => (
            <View style={{ flexDirection: "row" }}>
              <View style={styles.task}>
                <Text style={styles.todoText}>{item}</Text>
              </View>
              <TouchableOpacity
                onPress={() => setTodos(todos.filter((_, i) => i !== index))}
              >
                <Image
                  source={require("../assets/bin.png")}
                  style={styles.removeIcon}
                />
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
