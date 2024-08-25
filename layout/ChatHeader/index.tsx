import React from "react";
import { View, Text, SafeAreaView, StyleSheet, Image } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
const ChatHeader = () => {
  return (
    <View style={styles.header_container}>
      <SafeAreaView style={styles.header}>
        <Ionicons name="chevron-back" size={24} color="black" />
        <View style={styles.container}>
          <Image
            width={45}
            height={45}
            source={{
              uri: "https://avatars.githubusercontent.com/u/72394986?v=4",
            }}
            resizeMode="cover"
          />
          <Text style={styles.name}>Tunc</Text>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default ChatHeader;

const styles = StyleSheet.create({
  header_container: {
    backgroundColor: "#ffffff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  name: {
    fontSize: 12,
    fontWeight: "600",
    color: "#000000",
  },
});
