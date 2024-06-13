import { View, Text } from "react-native";
import React from "react";
import { Stack, Tabs } from "expo-router";

const _layout = () => {
  return (
    <Tabs>
      <Tabs.Screen name="Home"/>
      <Tabs.Screen name="Feed" />
    </Tabs>
  );
};

export default _layout;
