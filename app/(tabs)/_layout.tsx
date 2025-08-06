import { View, Text } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const TabsLayout = () => {
  return (
    <Tabs
        screenOptions={{
            tabBarActiveTintColor: "blue",
            tabBarInactiveTintColor: "green",
            tabBarStyle: {
                backgroundColor: "#1e293b",
                borderTopWidth: 1,
                borderTopColor: "white",
                height: 90,
                paddingBottom: 40,
                paddingTop: 1,
            },
            tabBarLabelStyle: {
                fontSize: 12,
                fontWeight: "600"
            },
            headerShown: false,
        }}
    >
        <Tabs.Screen
            name='index'
            options={{
                title:"ToDos",
                tabBarIcon: ({color, size}) => <Ionicons name="flash-outline" size={size} color={color} />, 
            }}
        />
        <Tabs.Screen
            name='settings'
            options={{
                title:"Settings",
                tabBarIcon: ({color, size}) => <Ionicons name="settings" size={size} color={color} />, 
            }}
        />
    </Tabs>
  )
}

export default TabsLayout