import { router } from "expo-router";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const MainScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dately</Text>

      <Text style={styles.infoText}>
        Let’s login. If you don’t have an account, you can create one.
      </Text>
      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => router.push("/sign-in")}
      >
        <Text style={styles.buttonText}>Go to Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.signupButton]}
        onPress={() => router.push("/sign-up")}
      >
        <Text style={styles.buttonText}>Create an Account</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.troubleButton]}
        onPress={() => router.push("/sign-up")}
      >
        <Text style={styles.troubleButtonText}>Trouble Signing In?</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#ffffff",
  },
  title: {
    color: "#fe3c72",
    fontSize: 48,
    fontWeight: "bold",
    marginBottom: 80,
  },
  welcomeText: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  infoText: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 30,
    color: "#555",
  },
  loginButton: {
    backgroundColor: "#fe3c72",
    paddingVertical: 18,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginBottom: 15,
    width: "100%",
  },
  signupButton: {
    backgroundColor: "#fe3c72",
    paddingVertical: 18,
    paddingHorizontal: 30,
    borderRadius: 25,
    width: "100%",
  },
  troubleButton: {
    borderColor: "#fe3c72",
    color: "#000000",
    paddingVertical: 18,
    paddingHorizontal: 30,
    borderRadius: 8,
    width: "100%",
  },
  troubleButtonText: {
    color: "#000000",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
});

export default MainScreen;
