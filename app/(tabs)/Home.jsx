import {
  FlatList,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import { router } from "expo-router";

const Home = () => {
  const categories = [
    { name: "Business", color: "bg-blue-500 text-white" },
    { name: "Entertainment", color: "bg-yellow-500 text-black" },
    { name: "Health", color: "bg-green-500 text-white" },
    { name: "Science", color: "bg-indigo-500 text-white" },
    { name: "Crypto", color: "bg-purple-500 text-white" },
    { name: "Technology", color: "bg-gray-500 text-white" },
  ];
  const [searchVal, setSearchVal] = useState("");
  console.log(searchVal)
  return (
    <ScrollView className="flex-1 bg-gray-100">
      <View className="m-auto flex flex-col bg-gray-200 p-6 rounded-lg my-5 w-4/5 justify-center items-center shadow-md">
        <TextInput
          placeholder="Search News"
          className="w-full py-3 bg-white px-4 rounded-lg mb-4 shadow-sm"
          onChange={(e) => setSearchVal(e.target.value)}
          value={searchVal}
        />
        <Pressable
          className="py-3 bg-gray-700 px-6 rounded-lg shadow-md"
          onPress={() => {
            router.push(`/Feed/${searchVal}`); setSearchVal("")
          }}
        >
          <Text className="text-white font-semibold">Search</Text>
        </Pressable>
      </View>

      <View className="m-auto flex flex-col  rounded-lg my-1 w-11/12">
        <Text className="text-2xl font-bold mb-4 text-center">Categories</Text>

        <FlatList
          scrollEnabled={false}
          numColumns={2}
          data={categories}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <Pressable
              onPress={() => {
                router.push(`/Feed/${item.name}`);
              }}
              className={
                "bg-blue-300 rounded-lg flex justify-center items-center m-2 w-36 h-24 shadow-md " +
                item.color
              }
            >
              <Text className="text-center text-lg font-medium">
                {item.name}
              </Text>
            </Pressable>
          )}
        />
      </View>
    </ScrollView>
  );
};

export default Home;
