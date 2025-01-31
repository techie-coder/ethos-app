import { TouchableOpacity, Text } from 'react-native'
import React from 'react'

interface CustomButtonProps {
    title: string,
    handlePress?: () => void,
    containerStyles?: string,
    textStyles?: string,
    isLoading?: boolean,
}

const CustomButton: React.FC<CustomButtonProps> = ({ title, handlePress, containerStyles, textStyles, isLoading }) => {
    return (
        <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => { }}
            className={`bg-lightpink mt-2 rounded-3xl ${containerStyles}`}>
            <Text className={`justify-center items-center align-middle text-center mt-2 ${textStyles}`}>Continue</Text>
        </TouchableOpacity>
    )
}

export default CustomButton