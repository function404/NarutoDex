import React, { useState, useMemo } from 'react'
import {
   View,
   FlatList,
   ActivityIndicator,
   TextInput,
   StyleSheet,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { useCharactersQuery } from '../queries/useCharactersQuery'
import { CharacterCard } from '@/features/characters/components/CharacterCard'
import { RootStackParamList } from '@/navigation/AppNavigator'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

export function CharactersListScreen() {
   const navigation =
      useNavigation<NativeStackNavigationProp<RootStackParamList>>()
   const { data, isLoading } = useCharactersQuery()
   
   const [searchQuery, setSearchQuery] = useState('')

   const filteredData = useMemo(() => {
      if (!data) return []
      if (!searchQuery) return data

      return data.filter((character) =>
         character.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
   }, [data, searchQuery])

   if (isLoading) return <ActivityIndicator size='large' style={styles.loader} />

   return (
      <View style={styles.container}>
         <TextInput
            style={styles.searchBar}
            placeholder='Buscar personagem...'
            value={searchQuery}
            onChangeText={setSearchQuery}
         />

         <FlatList
            data={filteredData}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
               <CharacterCard
                  character={item}
                  onPress={() =>
                     navigation.navigate('CharacterDetail', { id: item.id })
                  }
               />
            )}
            contentContainerStyle={{ paddingBottom: 20 }}
         />
      </View>
   )
}

const styles = StyleSheet.create({
   loader: {
      flex: 1,
   },
   container: {
      flex: 1,
      paddingHorizontal: 12,
      paddingTop: 12,
      backgroundColor: '#f4f4f5',
   },
   searchBar: {
      height: 40,
      borderColor: '#ccc',
      borderWidth: 1,
      borderRadius: 8,
      paddingHorizontal: 10,
      marginBottom: 10,
      backgroundColor: '#fff',
   },
})