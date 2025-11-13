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
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import Pinchable from 'react-native-pinchable'

import { useVillageByIdQuery } from '@/features/queries/useVillageByIdQuery'

import { RootStackParamList } from '@/navigation/AppNavigator'
import { MaterialCommunityIcons } from '@expo/vector-icons'

export function VillageDetailScreen() {
  const route = useRoute<RouteProp<RootStackParamList, 'VillageDetail'>>()
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>()
  const { id } = route.params
  const { data, isLoading } = useVillageByIdQuery(id)

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

  if (!data) return <Text>Vila não encontrada.</Text>

   return (
      <FlatList
         style={styles.container}
         contentContainerStyle={{ paddingBottom: 40 }}
         showsVerticalScrollIndicator={false}
         ListHeaderComponent={() => (
            <View style={styles.header}>
               <View style={styles.symbolContainer}>
                  <Pinchable>
                  <Image
                     source={{ uri: data.symbol }}
                     style={styles.symbol}
                     resizeMode='contain'
                  />
                  </Pinchable>
               </View>

               <Text style={styles.name}>{data.name}</Text>

               <Text style={styles.sectionTitle}>Ninjas da Vila:</Text>

               {data.characters.length === 0 && (
                  <Text style={styles.emptyNinja}>Nenhum ninja encontrado.</Text>
               )}
            </View>
         )}
         data={data.characters}
         keyExtractor={(item) => item.id.toString()}
         renderItem={({ item }) => (
            <TouchableOpacity
               style={styles.charCard}
               onPress={() =>
                  navigation.navigate('CharacterDetail', { id: item.id })
               }
               activeOpacity={0.8}
            >
               <View style={styles.charInfo}>
                  <Text style={styles.charName}>{item.name}</Text>

                  <MaterialCommunityIcons name='arrow-right' color='#f59e0b' size={20} />
               </View>
            </TouchableOpacity>
         )}
      />
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#222',
   },
   header: {
      alignItems: 'center',
      marginBottom: 10,
      paddingTop: 20,
   },
   symbolContainer: {
      backgroundColor: '#393939',
      padding: 16,
      borderRadius: 100,
      elevation: 3,
      shadowColor: '#000',
      shadowOpacity: 0.2,
      shadowRadius: 2,
      shadowOffset: { width: 0, height: 2 },
      marginBottom: 16,
   },
   symbol: {
      width: 120,
      height: 120,
   },
   name: {
      color: '#f4f4f5',
      fontSize: 28,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 12,
      marginHorizontal: 12,
   },
   emptyNinja: {
      width: '90%',
      textAlign: 'center',
      padding: 12,
      marginTop: 10,
      color: '#ffcccc',
      backgroundColor: '#ff323233',
      borderRadius: 8,
      borderColor: '#ff3232',
      borderWidth: 1,
   },
   sectionTitle: {
      color: '#f4f4f5',
      fontSize: 22,
      fontWeight: 'bold',
      marginBottom: 10,
      alignSelf: 'flex-start',
      marginLeft: 20,
      marginTop: 10,
   },
   charCard: {
      backgroundColor: '#333',
      marginHorizontal: 16,
      marginVertical: 6,
      borderRadius: 10,
      paddingVertical: 14,
      paddingHorizontal: 16,
      elevation: 2,
      shadowColor: '#000',
      shadowOpacity: 0.08,
      shadowRadius: 2,
      shadowOffset: { width: 0, height: 1 },
      flexDirection: 'row',
      alignItems: 'center',
   },
   charInfo: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
   },
   charName: {
      fontSize: 17,
      color: '#f4f4f5',
      fontWeight: '600',
   },
})
