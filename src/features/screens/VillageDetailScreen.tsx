import React from 'react'
import {
   View,
   Text,
   Image,
   FlatList,
   ActivityIndicator,
   StyleSheet,
   TouchableOpacity,
} from 'react-native'
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

   if (isLoading) return <ActivityIndicator size='large' style={styles.loader} />

   if (!data) return <Text>Vila não encontrada.</Text>

   return (
      <FlatList
         style={styles.container}
         ListHeaderComponent={() => (
            <>
               <Image
                  source={{ uri: data.symbol }}
                  style={styles.symbol}
                  resizeMode='contain'
               />
               <Text style={styles.name}>{data.name}</Text>
               <Text style={styles.sectionTitle}>Ninjas:</Text>
            </>
         )}
         data={data.characters}
         keyExtractor={(item) => item.id.toString()}
         renderItem={({ item }) => (
            <TouchableOpacity
               style={styles.charCard}
               onPress={() =>
                  navigation.navigate('CharacterDetail', { id: item.id })
               }
            >
               <Text style={styles.charName}>• {item.name}</Text>
            </TouchableOpacity>
         )}
      />
   )
}

const styles = StyleSheet.create({
   loader: {
      flex: 1,
   },
   container: {
      flex: 1,
      padding: 16,
      backgroundColor: '#f9f9f9',
   },
   symbol: {
      width: 120,
      height: 120,
      alignSelf: 'center',
      marginBottom: 10,
   },
   name: {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 20,
   },
   sectionTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10,
   },
   charCard: {
      backgroundColor: '#fff',
      padding: 12,
      marginVertical: 4,
      borderRadius: 8,
      elevation: 1,
      borderColor: '#eee',
      borderWidth: 1,
   },
   charName: {
      fontSize: 16,
      color: '#2563eb',
      fontWeight: '500',
   },
})