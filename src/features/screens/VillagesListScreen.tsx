import React from 'react'
import { View, FlatList, ActivityIndicator } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useVillagesQuery } from '../queries/useVillagesQuery'
import { VillageCard } from '@/features/characters/components/VillageCard'
import { RootStackParamList } from '@/navigation/AppNavigator'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

export function VillagesListScreen() {
   const navigation =
      useNavigation<NativeStackNavigationProp<RootStackParamList>>()
   const { data, isLoading } = useVillagesQuery()

   if (isLoading) return <ActivityIndicator size='large' style={{ flex: 1 }} />

   return (
      <View style={{ flex: 1, padding: 12 }}>
         <FlatList
            data={data}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
               <VillageCard
                  village={item}
                  onPress={() =>
                  navigation.navigate('VillageDetail', { id: item.id })
                  }
               />
            )}
         />
      </View>
   )
}
