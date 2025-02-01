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
            onPress={handlePress}
            className={`${containerStyles}`}
            disabled={isLoading}>
            <Text className={`${textStyles}`}>{title}</Text>
        </TouchableOpacity>
    )
}

export default CustomButton