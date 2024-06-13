import { Pressable, SafeAreaView, Text, TextInput, View } from "react-native";
import React from "react";

const Home = () => {
  return (
    <SafeAreaView className="flex-1">
      <View className="m-auto flex flex-col bg-red-400 p-4 rounded-lg my-5 w-[80%] justify-center items-center">
        <TextInput
          placeholder="Search News"
          className="w-[95%] py-3 outline-none bg-white px-2 rounded-lg"
        />
        <Pressable className="py-3 bg-red-600 shadow-lg px-3 rounded-lg mt-4">
          <Text> Search</Text>
        </Pressable>
      </View>

      <View className="m-auto flex flex-col p-4 rounded-lg my-1 w-[90%]">
        <Text className="text-xl font-bold">Categories</Text>
        <View></View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
