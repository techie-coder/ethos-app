import { View, Text, TextInput, KeyboardTypeOptions } from 'react-native'
import React, { useState } from 'react'

interface FormFieldProps {
    value?: string,
    title: string,
    placeholder?: string,
    containerStyles?: string,
    textInputStyles?: string,
    titleStyles?: string,
    handleChangeText?: (e: string) => void,
    keyboardType?: KeyboardTypeOptions,
    type?: string,
}


const FormField: React.FC<FormFieldProps> = ({ title, value, placeholder, containerStyles, titleStyles, textInputStyles, handleChangeText, keyboardType, type, ...props }) => {
    const [showPassword, setShowPassword] = useState(false)

    return (
        <View>
            <Text className={titleStyles}>{title}</Text>
            <View className={containerStyles}>
                <TextInput
                    className={textInputStyles}
                    onChangeText={handleChangeText}
                    value={value}
                    placeholder={placeholder}
                    placeholderTextColor='#9b9b9b'
                    keyboardType={keyboardType}
                    secureTextEntry={type === 'password' && !showPassword}
                />
            </View>
        </View>
    )
}

export default FormField