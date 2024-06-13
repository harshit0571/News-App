import { View, Text, FlatList, Dimensions, Image } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "expo-router";
const { height } = Dimensions.get("window");

const Feed = () => {
  const [news, setNews] = useState([]);
  const getNews = async () => {
    try {
      const res = await axios.get(
        "https://newsapi.org/v2/top-headlines?country=in&apiKey=227b1c6051024a72b7ed6cb55dbf6c84"
      );
      setNews(res.data.articles);
      console.log(res.data.articles);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  useEffect(() => {
    getNews();
  }, []);
  return (
    <View className="flex-1">
      <FlatList
        data={news}
        keyExtractor={(item) => item.url}
        renderItem={({ item }) => (
          <View className={"p-4 border-2 border-gray-200 flex flex-col "}>
            <Image
              source={{
                uri: item.urlToImage,
              }}
              style={{ width: 200, height: 200 }}
              className="m-4 bg-gray-200 rounded-lg"
            />
            <Text className="text-lg font-bold">{item.title}</Text>
            <Text className="text-sm text-gray-600 my-2">
              {item.description}
            </Text>
            <Text className="text-sm text-gray-600 my-2 text-left">
              Source: {item.source.name}
            </Text>
            <Text className="text-sm text-gray-600 my-2 text-left">
              Published At: {item.publishedAt}
            </Text>
            <Link href={item.url}>
              <Text> View Full News</Text>
            </Link>
          </View>
        )}
      />
    </View>
  );
};

export default Feed;
