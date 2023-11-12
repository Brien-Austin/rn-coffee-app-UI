import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import { categories } from "../constants";

import { themeColors } from "../theme";
const HomeScreen = () => {
  const [activeCategory, setActiveCategory] = useState(1);
  return (
    <View>
      <StatusBar />
      <Image
        source={require("../assets/images/beansBackground1.png")}
        className="w-full absolute -top-5 opacity-10"
        style={{ height: 220 }}
      />
      <SafeAreaView>
        <View className="mt-14 px-4 flex-row justify-between items-center">
          <Image
            source={require("../assets/images/avatar.png")}
            className=" h-9 w-9 rounded-full"
          />
          <View className="flex-row space-x-2 items-center">
            <Ionicons
              size={24}
              name="location-outline"
              color={themeColors.bgLight}
            />
            <Text className="text-base font-semibold">New York,NYC</Text>
          </View>

          <Ionicons name="notifications-outline" size={30} color={"black"} />
        </View>

        {
          // Search Bar
        }

        <View className="mx-5  mt-14">
          <View className="flex-row justify-center items-center rounded-full p-1 bg-[#e6e6e6]">
            <TextInput
              className="p-3 flex-1 font-semibold text-gray-700"
              placeholder="Search"
            />
            <TouchableOpacity
              style={{ backgroundColor: themeColors.bgLight }}
              className="rounded-full p-2"
            >
              <Ionicons size={27} name="search" color={"white"} />
            </TouchableOpacity>
          </View>
        </View>

        {
          // Categories
        }

        <View className="px-5 mt-6">
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={categories}
            keyExtractor={(item) => item.id}
            className="overflow-visible"
            renderItem={({ item }) => {
              isActive = item.id == activeCategory;
              let activeTextClass = isActive ? "text-white" : "text-gray-700";
              return (
                <TouchableOpacity
                  onPress={() => setActiveCategory(item.id)}
                  style={{
                    backgroundColor: isActive
                      ? themeColors.bgLight
                      : "rgba(0,0,0,0.07)",
                  }}
                  className="p-4 px-5 mr-2 rounded-full shadow"
                >
                  <Text className={"font-semibold " + activeTextClass}>
                    {item.title}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;
