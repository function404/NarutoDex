import React from 'react'
import { View, Text, Image, FlatList, ActivityIndicator } from 'react-native'
import { RouteProp, useRoute, useNavigation } from '@react-navigation/native'
import { RootStackParamList } from '@/navigation/AppNavigator'
import { useVillageByIdQuery } from '../queries/useVillageByIdQuery'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

export function VillageDetailScreen() {
   const route = useRoute<RouteProp<RootStackParamList, 'VillageDetail'>>()
   const navigation =
      useNavigation<NativeStackNavigationProp<RootStackParamList>>()
   const { id } = route.params
   const { data, isLoading } = useVillageByIdQuery(id)

   if (isLoading) return <ActivityIndicator size='large' style={{ flex: 1 }} />

   if (!data) return <Text>Vila não encontrada.</Text>

   return (
      <View style={{ flex: 1, padding: 16 }}>
         <Image
            source={{ uri: data.symbol }}
            style={{ width: 120, height: 120, alignSelf: 'center' }}
         />
         <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center' }}>
            {data.name}
         </Text>

         <Text style={{ marginVertical: 12, fontWeight: 'bold' }}>Ninjas:</Text>
         
         <FlatList
            data={data.characters}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
               <Text
                  onPress={() =>
                     navigation.navigate('CharacterDetail', { id: item.id })
                  }
                  style={{ paddingVertical: 4, color: '#2563eb' }}
               >
                  • {item.name}
               </Text>
            )}
         />
      </View>
   )
}
