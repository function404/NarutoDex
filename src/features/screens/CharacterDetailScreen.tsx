import React from 'react'
import { View, Text, Image, ScrollView, ActivityIndicator } from 'react-native'

import { RouteProp, useRoute } from '@react-navigation/native'
import { RootStackParamList } from '@/navigation/AppNavigator'

import { useCharacterByIdQuery } from '../queries/useCharacterByIdQuery'

export function CharacterDetailScreen() {
  const route = useRoute<RouteProp<RootStackParamList, 'CharacterDetail'>>()
  const { id } = route.params
  const { data, isLoading } = useCharacterByIdQuery(id)

  if (isLoading) return <ActivityIndicator size='large' style={{ flex: 1 }} />

  if (!data) return <Text>Personagem não encontrado.</Text>

   return (
      <ScrollView style={{ padding: 16 }}>
         <Image
            source={{ uri: data.profile_image }}
            style={{ width: '100%', height: 300, borderRadius: 12 }}
            resizeMode='cover'
         />
         <Text style={{ fontSize: 24, fontWeight: 'bold', marginVertical: 10 }}>
            {data.name}
         </Text>

         <Text>{data.summary}</Text>

         <Text style={{ marginTop: 10, fontWeight: 'bold' }}>Vila: {data.village}</Text>

         <Text>Rank: {data.rank}</Text>

         <Text>Poder: {data.power}</Text>

         <Text style={{ marginTop: 12, fontWeight: 'bold' }}>Jutsus:</Text>

         {data.jutsus.map((jutsu) => (
            <Text key={jutsu}>• {jutsu}</Text>
         ))}
      </ScrollView>
   )
}
