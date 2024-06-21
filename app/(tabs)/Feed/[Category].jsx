import {
  View,
  Text,
  FlatList,
  Dimensions,
  Image,
  RefreshControl,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import axios from "axios";
import { Link, useLocalSearchParams } from "expo-router";
const { height } = Dimensions.get("window");

const Feed = () => {
  const [news, setNews] = useState([]);
  const { Category, type } = useLocalSearchParams();


  const [refreshing, setRefreshing] = useState(false);
  const handleRefresh = async () => {
    setRefreshing(true);
    if (Category === undefined) {
      console.log("dw");

      getNews(
        "top-headlines?country=in&apiKey=227b1c6051024a72b7ed6cb55dbf6c84"
      );
    } else {
      console.log("d");
      getNews(
        `everything?q=${Category}&apiKey=227b1c6051024a72b7ed6cb55dbf6c84`
      );
    }
    setRefreshing(false);
  };
  console.log(Category, type);
  const getNews = async (api) => {
    try {
      const res = await axios.get(`https://newsapi.org/v2/${api}`);
      setNews(res.data.articles);
      console.log(res.data.articles);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  useEffect(() => {
    setNews([]);
    if (Category === undefined) {
      console.log("dw");

      getNews(
        "top-headlines?country=in&apiKey=227b1c6051024a72b7ed6cb55dbf6c84"
      );
    } else {
      console.log("d");
      getNews(
        `everything?q=${Category}&apiKey=227b1c6051024a72b7ed6cb55dbf6c84`
      );
    }
  }, [Category]);
  return (
    <View className="flex-1">
      {news.length === 0 ? (
        <Text>Loading....</Text>
      ) : (
        <FlatList
          data={news}
          keyExtractor={(item, index) => index.toString()}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
          }
          renderItem={({ item }) =>
            item.urlToImage && (
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
            )
          }
        />
      )}
    </View>
  );
};

export default Feed;
