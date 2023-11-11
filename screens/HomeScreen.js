import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";

const HomeScreen = () => {
  return (
    <SafeAreaView className="flex-1 justify-center items-center bg-blue-100">
      <View className="bg-black w-4/5 rounded-lg flex flex-column justify-center items-center">
        <Text className="text-white p-5">
          Hey !!! A React Native Expo Tailwind Template with React Navigation as
          well
        </Text>
        <TouchableOpacity className="w-3/5 rounded-lg h-8 bg-white flex justify-center items-center mb-2 ">
          <Text className="text-black text-[16px]">Try Tailwind !!</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
