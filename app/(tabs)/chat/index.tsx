import ChatListItem from "@/components/chat/ChatListItem";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { chatItems } from "./constant";

const ChatScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#ffffff", padding: 4 }}>
      <Text style={styles.chatTitle}>Chat</Text>
      <ScrollView>
        {chatItems.map((c) => (
          <ChatListItem key={c.name} data={c} />
        ))}
      </ScrollView>
    </View>
  );
};
export default ChatScreen;

const styles = StyleSheet.create({
  chatTitle: {
    fontSize: 18,
    padding: 10,
    color: "#8E8E8E",
  },
});
