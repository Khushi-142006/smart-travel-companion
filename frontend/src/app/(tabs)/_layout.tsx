import "@/global.css";
import { Tabs } from "expo-router";
import { Text } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#234B36",
        tabBarInactiveTintColor: "#98A39A",
        tabBarStyle: {
          height: 68,
          paddingTop: 8,
          paddingBottom: 8,
          backgroundColor: "#FFFFFF",
          borderTopColor: "#E8EDE7",
          elevation: 8,
        },
        tabBarLabelStyle: {
          fontSize: 10,
          fontWeight: "600",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Text style={{ color, fontSize: 21 }}>⌂</Text>
          ),
        }}
      />

      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: ({ color }) => (
            <Text style={{ color, fontSize: 20 }}>⌕</Text>
          ),
        }}
      />

      <Tabs.Screen
        name="discover"
        options={{
          title: "Discover",
          tabBarIcon: ({ color }) => (
            <Text style={{ color, fontSize: 19 }}>✧</Text>
          ),
        }}
      />

      <Tabs.Screen
        name="trips"
        options={{
          title: "My Trips",
          tabBarIcon: ({ color }) => (
            <Text style={{ color, fontSize: 19 }}>▤</Text>
          ),
        }}
      />

      <Tabs.Screen
        name="safety"
        options={{
          title: "Safety",
          tabBarIcon: ({ color }) => (
            <Text style={{ color, fontSize: 19 }}>♡</Text>
          ),
        }}
      />
    </Tabs>
  );
}