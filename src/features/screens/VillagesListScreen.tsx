import React, { useState, useMemo } from 'react'
import {
   View,
   FlatList,
   ActivityIndicator,
   TextInput,
   StyleSheet,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useVillagesQuery } from '../queries/useVillagesQuery'
import { VillageCard } from '@/features/characters/components/VillageCard'
import { RootStackParamList } from '@/navigation/AppNavigator'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

export function VillagesListScreen() {
   const navigation =
      useNavigation<NativeStackNavigationProp<RootStackParamList>>()
   const { data, isLoading } = useVillagesQuery()

   const [searchQuery, setSearchQuery] = useState('')

   const filteredData = useMemo(() => {
      if (!data) return []
      if (!searchQuery) return data

      return data.filter((village) =>
         village.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
   }, [data, searchQuery])

   if (isLoading) return (
      <ActivityIndicator
         size='large'
         color='#f59e0b'
         style={{
            flex: 1,
            backgroundColor: '#222'
         }}
      />
   )

   return (
      <View style={styles.container}>
         <TextInput
            style={styles.searchBar}
            placeholder='Buscar vila...'
            placeholderTextColor={'#f4f4f5'}
            value={searchQuery}
            onChangeText={setSearchQuery}
         />
         
         <FlatList
            data={filteredData}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
               <VillageCard
                  village={item}
                  onPress={() =>
                     navigation.navigate('VillageDetail', { id: item.id })
                  }
               />
            )}
            contentContainerStyle={{ paddingBottom: 20 }}
         />
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      padding: 12,
      paddingHorizontal: 12,
      paddingTop: 12,
      backgroundColor: '#222',
   },
   searchBar: {
      height: 40,
      borderColor: '#555',
      borderWidth: 1,
      borderRadius: 8,
      paddingHorizontal: 10,
      marginBottom: 10,
      backgroundColor: '#333',
      color: '#f4f4f5',
   },
})