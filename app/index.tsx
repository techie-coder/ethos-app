import { ScrollView, Text, View, Image, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import images from "../constants/images"
import CustomButton from '../components/CustomButton'

const App = () => {
  return (
    <SafeAreaView className="bg-black h-full">
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className="relative w-full h-full justify-center items-center px-4">
          <Image
            source={images.cat}
            className="w-[260px] h-[128px]"
            resizeMode="contain"
          />
          <View className="relative items-end justify-end">
            <Text className="mt-5 font-iextrabold text-[#9b9b9b] text-4xl">
              Millions of songs
            </Text>
            <Text className="mt-1 font-iextrabold text-white text-4xl">
              Truly Free.
            </Text>
          </View>
          <CustomButton
            handlePress={() => { }}
            containerStyles="w-[80%] h-[52px]"
            textStyles="text-3xl font-iextrabold"
            title="Continue" />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App
