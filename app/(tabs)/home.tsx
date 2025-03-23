import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Home = () => {
    return (
        <SafeAreaView className='bg-black h-full w-full'>
            <Text className='text-light_pink font-iextrabold text-5xl ml-4 mt-2'>ethos</Text>
        </SafeAreaView>
    )
}

export default Home