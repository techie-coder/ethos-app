import { View, Text } from 'react-native'
import React from 'react'
import { useUser } from '../../hooks/UserContextProvider'
import { SafeAreaView } from 'react-native-safe-area-context';

const Settings = () => {
    const { user } = useUser();
    return (
        <SafeAreaView>
            <Text>Profile</Text>
            <Text>{user}</Text>
        </SafeAreaView>
    )
}

export default Settings