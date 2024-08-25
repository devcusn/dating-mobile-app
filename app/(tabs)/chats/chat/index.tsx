import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  SafeAreaView,
  TextInput,
  Button,
} from "react-native";

const ChatScreen = () => {
  return (
    <View style={styles.chat_container}>
      <ScrollView></ScrollView>
      <View style={styles.input_container}>
        <TextInput style={styles.input} placeholder="Type a message ..." />
        <Button title="Send" />
      </View>
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  chat_container: {
    backgroundColor: "#ffffff",
    flex: 1,
  },
  input_container: {
    flexDirection: "row",
    borderWidth: 1,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderColor: "#bababa",
  },
  input: {
    flex: 1,
    padding: 10,
  },
});
