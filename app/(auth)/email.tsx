import { ScrollView, View, Text, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import FormField from '../../components/FormField'
import images from '../../constants/images'
import CustomButton from '../../components/CustomButton'
import { router } from 'expo-router'
import { generateOtp } from '../../lib/login'
import { useUser } from '../../hooks/UserContextProvider'

const Email = () => {

    const { setUser } = useUser();
    const [email, setEmail] = useState<string>('')

    const handleEmailSubmission = async (email: string) => {
        try {
            const msg = await generateOtp(email);
            if (msg.message === "OTP sent successfully") {
                if (email) await setUser(email)
                else console.log("no user!")
                router.push('/otp');
            }
        } catch (err) {
            console.log(err)
        }
    }

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
                            value={email}
                            handleChangeText={(e) => setEmail(e)}
                            placeholder='Email Address'
                            keyboardType='email-address'
                            containerStyles='w-full h-16 mt-3 rounded-md justify-center px-4 text-white border-2 border-slate focus:border-red'
                            titleStyles='font-ibold text-white text-2xl'
                            textInputStyles='text-white'
                            title="Enter your email"
                        />
                    </View>
                    <CustomButton
                        handlePress={() => handleEmailSubmission(email)}
                        containerStyles="w-[80%] h-[52px] bg-[#f94c57] mt-3 rounded-3xl"
                        textStyles="text-3xl font-iextrabold items-center text-center justify-center mt-3"
                        title="Get OTP" />
                    <CustomButton
                        handlePress={() => router.push('/home')}
                        containerStyles="w-[80%] h-[52px] bg-[#343433] mt-3 rounded-3xl"
                        textStyles="text-xl text-white font-iextrabold items-center text-center justify-center mt-4"
                        title="Continue as Guest" />
                </View>
            </ScrollView>
            <StatusBar
                backgroundColor='black'
                style='light' />
        </SafeAreaView>
    )
}

export default Email