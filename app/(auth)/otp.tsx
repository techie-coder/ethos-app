import { ScrollView, View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import FormField from '../../components/FormField'
import images from '../../constants/images'
import CustomButton from '../../components/CustomButton'
import { Link, router } from 'expo-router'



const Otp = () => {

    const [otp, setOTP] = useState<string>('')

    return (
        <SafeAreaView className="bg-black h-full">
            <ScrollView>
                <View className='w-[100vw] items-center justify-normal'>
                    <Image
                        source={images.cat2}
                        className='w-[160px] h-[80px]'
                        resizeMode='contain' />
                </View>
                <View className="w-full h-[80vh] px-4 items-center justify-center">
                    <View className='mt-5 w-[80%]'>
                        <FormField
                            value={otp}
                            handleChangeText={(e) => setOTP(e)}
                            placeholder='OTP'
                            keyboardType='numeric'
                            containerStyles='w-full h-16 mt-3 rounded-md justify-center px-4 text-white border-2 border-slate focus:border-red'
                            titleStyles='font-ibold text-white text-2xl'
                            textInputStyles='text-white'
                            title="Enter OTP sent to your email"
                        />
                    </View>
                    <CustomButton
                        handlePress={() => router.push('/otp')}
                        containerStyles="w-[80%] h-[52px] bg-[#f94c57] mt-3 rounded-3xl"
                        textStyles="text-3xl font-iextrabold items-center text-center justify-center mt-3"
                        title="Sign In" />
                    <CustomButton
                        handlePress={() => router.push('/otp')}
                        containerStyles="w-[80%] h-[52px] bg-[#343433] mt-3 rounded-3xl"
                        textStyles="text-xl text-white font-iextrabold items-center text-center justify-center mt-4"
                        title="Resend OTP" />
                    <Link href="/email" className='text-lg text-bright_blue mt-2 font-ibold'>Entered Wrong Email?</Link>
                </View>
            </ScrollView>
            <StatusBar
                backgroundColor='black'
                style='light' />
        </SafeAreaView>
    )
}

export default Otp