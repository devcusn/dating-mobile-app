import React from "react";
import { StyleSheet, Image, View, Text, TouchableOpacity } from "react-native";
import { ChatListItemProps } from "./type";
import { router } from "expo-router";

const ChatListItem: React.FunctionComponent<ChatListItemProps> = ({ data }) => {
  return (
    <TouchableOpacity onPress={() => router.push("/chats/chat")}>
      <View style={styles.listItem}>
        <Image
          width={45}
          height={45}
          source={{
            uri: data.profileUrl,
          }}
          resizeMode="cover"
        />
        <View style={styles.content}>
          <Text style={styles.name}>{data.name}</Text>
          <Text style={styles.lastMessage}>{data.lastMessage}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  listItem: {
    flexDirection: "row",
    paddingVertical: 4,
    borderBottomColor: "#ebebeb",
    borderBottomWidth: 1,
  },
  name: { color: "#000000" },
  lastMessage: {
    color: "#7c7c7c",
  },
  content: {
    justifyContent: "center",
  },
});

export default ChatListItem;
