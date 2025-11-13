import React from 'react'
import { View, FlatList, ActivityIndicator } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { useCharactersQuery } from '../queries/useCharactersQuery'
import { CharacterCard } from '@/features/characters/components/CharacterCard'
import { RootStackParamList } from '@/navigation/AppNavigator'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

export function CharactersListScreen() {
   const navigation =
      useNavigation<NativeStackNavigationProp<RootStackParamList>>()
   const { data, isLoading } = useCharactersQuery()

   if (isLoading) return <ActivityIndicator size='large' style={{ flex: 1 }} />

   return (
      <View style={{ flex: 1, padding: 12 }}>
         <FlatList
            data={data}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
               <CharacterCard
                  character={item}
                  onPress={() =>
                  navigation.navigate('CharacterDetail', { id: item.id })
                  }
               />
            )}
         />
      </View>
   )
}
