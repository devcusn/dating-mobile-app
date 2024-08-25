import React from "react";
import { SafeAreaView, StyleSheet, Image, View, Button } from "react-native";

const ProfileScreen = () => {
  const handleAccept = () => {
    alert("Accepted");
  };

  const handleDecline = () => {
    alert("Declined");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={{
          uri: "https://avatars.githubusercontent.com/u/72394986?v=4",
        }}
        style={styles.profileImage}
        resizeMode="cover"
      />
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button title="Decline" color="#ff3b30" onPress={handleDecline} />
        </View>
        <View style={styles.button}>
          <Button title="Accept" color="#4cd964" onPress={handleAccept} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, position: "relative" },
  profileImage: {
    width: "100%",
    height: "100%",
  },
  buttonContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  button: {
    width: "40%",
  },
});

export default ProfileScreen;
