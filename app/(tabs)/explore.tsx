import { View, Text, TextInput, ActivityIndicator, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormField from '../../components/FormField'
import { getTracks } from '../../lib/api'

const Explore = () => {

    const [search, setSearch] = useState('');
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                const data = await getTracks(search);
                setData(data);
            } catch (err) {
                console.log(err);
                setData([]);
            } finally {
                setIsLoading(false);
            }
        }
        fetchData();
    }, [search, setSearch])

    if (isLoading) return
    return (
        <SafeAreaView className='bg-black h-full w-full'>
            <View className='h-full w-full jusitfy-center items-center'>
                <SearchBar
                    searchTerm={search} onChangeText={(e) => setSearch(e)} />
            </View>
            {isLoading ? <ActivityIndicator size="large" color="#ffffff" /> : <></>}
            <View className='flex text-white'>
                <FlatList data={data}
                    keyExtractor={(_, index) => index.toString()}
                    renderItem={({ item }) => (
                        <View className='p-10'>
                            <Text className='text-xl'>{item.name}</Text>
                            <Text className='text-sm'>{item.artist} - {item.album}</Text>
                        </View>
                    )} />
            </View>
        </SafeAreaView>
    )
}

const SearchBar = (searchTerm: string, onChangeText: (e: string) => void) => {
    return (
        <View className='w-[90%] h-16 border-2 border-white mt-4 rounded-[28px]'>
            <TextInput className='text-white text-xl py-3 px-6' placeholder='search' onChangeText={onChangeText} value={searchTerm} placeholderTextColor="#ffffff"></TextInput>
        </View>
    )
}

export default Explore