import { View, Text, Image } from "react-native";
import React from "react";
import { Tabs, Redirect } from "expo-router";
import { icons } from "../../constants";
import { HomeTab } from "../(tabs)/home";

const TabIcon = ({ icon, color, name, focused }) => {
	return (
		<View className="items-center justify-evenly">
			<Image
				source={icon}
				resizeMode="contain"
				tintColor={color}
				className="w-6 h-6"
			/>
		</View>
	);
};

const TabsLayout = () => {
	return (
		<>
			<Tabs
				screenOptions={{
					tabBarShowLabel: false,
					tabBarActiveTintColor: "#1D866D",
					tabBarInactiveTintColor: "#686666",
				}}
			>
				<Tabs.Screen
					name="home"
					options={{
						title: "Home",
						headerShown: false,
						tabBarIcon: ({ color, focused }) => (
							<HomeTab
								icon={icons.explore}
								color={color}
								name="Home"
								focused={focused}
								className="w-8 h-8"
							/>
						),
					}}
				></Tabs.Screen>
				<Tabs.Screen
					name="cart"
					options={{
						title: "Cart",
						headerShown: false,
						tabBarIcon: ({ color, focused }) => (
							<TabIcon
								icon={icons.cart}
								color={color}
								name="Cart"
								focused={focused}
							/>
						),
					}}
				></Tabs.Screen>
				<Tabs.Screen
					name="bookmark"
					options={{
						title: "bookmark",
						headerShown: false,
						tabBarIcon: ({ color, focused }) => (
							<TabIcon
								icon={icons.love}
								color={color}
								name="Bookmark"
								focused={focused}
							/>
						),
					}}
				></Tabs.Screen>
				<Tabs.Screen
					name="profile"
					options={{
						title: "profile",
						headerShown: false,
						tabBarIcon: ({ color, focused }) => (
							<TabIcon
								icon={icons.profile}
								color={color}
								name="Profile"
								focused={focused}
							/>
						),
					}}
				></Tabs.Screen>
			</Tabs>
		</>
	);
};

export default TabsLayout;
