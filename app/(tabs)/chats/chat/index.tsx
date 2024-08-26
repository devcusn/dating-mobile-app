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
    <SafeAreaView style={styles.chat_container}>
      <ScrollView></ScrollView>
      <View style={styles.input_container}>
        <TextInput style={styles.input} placeholder="Type a message ..." />
        <Button title="Send" />
      </View>
    </SafeAreaView>
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
    padding: 10,
  },
  input: {
    flex: 1,
    padding: 10,
    width: "90%",
    borderWidth: 1,
    borderRadius: 25,
    borderColor: "#bababa",
  },
});
