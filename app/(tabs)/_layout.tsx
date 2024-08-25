import { Tabs } from "expo-router";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useColorScheme } from "@/hooks/useColorScheme";
import Header from "@/layout/Header";
import { View } from "react-native";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        tabBarActiveTintColor: "#fe3c72",
      }}
    >
      <Tabs.Screen
        name="explore/index"
        options={{
          title: "",
          header: () => <Header />,
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome6 name="fire" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="chats/index"
        options={{
          title: "",
          header: () => <Header />,
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name="chatbubbles-outline" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile/index"
        options={{
          title: "",
          header: () => <Header />,
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons name="person" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="chats/chat/index"
        options={{
          title: "",
          header: () => <Header />,
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons name="person" size={24} color={color} />
          ),
          tabBarButton: () => null,
        }}
      />
    </Tabs>
  );
}
