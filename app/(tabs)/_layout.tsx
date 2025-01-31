import { View, Text } from 'react-native'
import React from 'react'
import { Tabs, Redirect } from "expo-router"

const TabIcon = ({ name, focused }) => {
    return (
        <View className="items-center justify-normal align-middle">
            <Text className={`${focused ? 'text-white' : 'text-lightpink'} w-16 h-14 text-sm font-iextrabold pt-5 m-0`}>{name}</Text>
        </View>
    )
}
const TabsLayout = () => {
    return (
        <>
            <Tabs
                screenOptions={{
                    tabBarShowLabel: false,
                    tabBarActiveTintColor: "#FFFFFF",
                    tabBarInactiveTintColor: "#EAC5E8",
                    tabBarStyle: {
                        backgroundColor: "#000000",
                        borderTopWidth: 1,
                        borderTopColor: "#9B9B9B"
                    }
                }}>
                <Tabs.Screen
                    name="home"
                    options={{
                        title: "Home",
                        headerShown: false,
                        tabBarIcon: ({ focused }) => (
                            <TabIcon
                                name="Home"
                                focused={focused}
                            />
                        )
                    }}
                />
                <Tabs.Screen
                    name="library"
                    options={{
                        title: "Library",
                        headerShown: false,
                        tabBarIcon: ({ focused }) => (
                            <TabIcon
                                name="Library"
                                focused={focused}
                            />
                        )
                    }}
                />
                <Tabs.Screen
                    name="settings"
                    options={{
                        title: "Settings",
                        headerShown: false,
                        tabBarIcon: ({ focused }) => (
                            <TabIcon
                                name="Settings"
                                focused={focused}
                            />
                        )
                    }}
                />
            </Tabs>
        </>
    )
}

export default TabsLayout