import { View, Text } from 'react-native'
import React from 'react'
import { Slot } from 'expo-router'
import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({
  default: "native",
});
const _layout = () => {
  return (
  <Slot/>
  )
}

export default _layout