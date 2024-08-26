import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MessageProps } from "./type";

const MessageComponent: React.FunctionComponent<MessageProps> = ({
  message,
  isCurrentUser,
}) => {
  return (
    <View
      style={[
        styles.messageContainer,
        isCurrentUser ? styles.rightAlign : styles.leftAlign,
      ]}
    >
      <View
        style={[
          styles.messageBubble,
          isCurrentUser ? styles.currentUserBubble : styles.otherUserBubble,
        ]}
      >
        <Text style={styles.messageText}>{message}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  messageContainer: {
    flexDirection: "row",
    marginVertical: 5,
    paddingHorizontal: 10,
  },
  rightAlign: {
    justifyContent: "flex-end",
  },
  leftAlign: {
    justifyContent: "flex-start",
  },
  messageBubble: {
    maxWidth: "80%",
    padding: 10,
    borderRadius: 20,
  },
  currentUserBubble: {
    backgroundColor: "#DCF8C6",
    minWidth: 50,
  },
  otherUserBubble: {
    backgroundColor: "#ECECEC",
    minWidth: 50,
  },
  messageText: {
    fontSize: 16,
  },
});

export default MessageComponent;
