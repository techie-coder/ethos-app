
import React from 'react'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

const AuthLayout = () => {
    return (
        <>
            <Stack>
                <Stack.Screen
                    name="email"
                    options={{
                        headerShown: false
                    }} />
                <Stack.Screen
                    name="otp"
                    options={{
                        headerShown: false
                    }} />
            </Stack>
            <StatusBar />
        </>
    )
}

export default AuthLayout