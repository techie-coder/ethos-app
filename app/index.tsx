import { ScrollView, Text, View, Image, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import images from "../constants/images"
import CustomButton from '../components/CustomButton'
import { StatusBar } from 'expo-status-bar'
import { Redirect, router } from 'expo-router'
import { useUser } from '../hooks/UserContextProvider'

const App = () => {
    const { user } = useUser();
    if (user)
        return <Redirect href="/home" />;
    return (
        <SafeAreaView className="bg-black h-full">
            <ScrollView contentContainerStyle={{ height: '100%' }}>
                <View className="relative w-full h-[85vh] justify-center items-center px-4">
                    <Image
                        source={images.cat2}
                        className="w-[272px] h-[156px]"
                        resizeMode="contain"
                    />
                    <View className="relative items-end justify-end">
                        <Text className="mt-3 font-iextrabold text-[#c2cad7] text-4xl">
                            Millions of songs
                        </Text>
                        <Text className="mt-1 font-iextrabold text-white text-4xl">
                            Truly Free.
                        </Text>
                    </View>
                    <CustomButton
                        handlePress={() => router.push('/email')}
                        containerStyles="w-[80%] h-[52px] bg-[#f94c57] mt-3 rounded-3xl"
                        textStyles="text-3xl font-iextrabold items-center text-center justify-center mt-3"
                        title="Continue" />
                </View>
            </ScrollView>
            <StatusBar
                backgroundColor='black'
                style='light' />
        </SafeAreaView>
    )
}

export default App
