import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";

const Header = () => {
  return (
    <View style={{ backgroundColor: "#ffffff" }}>
      <SafeAreaView>
        <View style={styles.container}>
          <Text style={styles.logo}>Dately</Text>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 10,
    backgroundColor: "#ffffff",
  },
  logo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fe3c72",
  },
});
