import { View, Text } from 'react-native'
import React from 'react'
import { Tabs, Redirect } from "expo-router"
import { TabBar } from '../../components/TabBar'

const TabsLayout = () => {
    return (
        <Tabs tabBar={props => <TabBar {...props} />}>
            <Tabs.Screen name="home" options={{ title: "Home", headerShown: false }} />
            <Tabs.Screen name="explore" options={{ title: "Explore", headerShown: false }} />
            <Tabs.Screen name="profile" options={{ title: "Profile", headerShown: false }} />
        </Tabs>
    )
}

export default TabsLayout