import { View, Text, Image } from "react-native";
import React from "react";

const HomeTab = ({ icon, color, focused }) => {
	return (
		<View className="flex-row items-center bg-primary px-2 py-1 rounded-2xl">
			<Image
				source={icon}
				resizeMode="contain"
				style={{ tintColor: "white" }}
				className="w-6 h-6"
			/>
			<Text className={`ml-1 ${focused ? "text-white" : "text-gray-300"}`}>
				Explore
			</Text>
		</View>
	);
};

const Home = () => {
	return (
		<View>
			<Text>home</Text>
		</View>
	);
};

export default Home;
export { HomeTab };
