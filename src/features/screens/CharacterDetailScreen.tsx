import React from 'react'
import {
   View,
   Text,
   Image,
   ScrollView,
   ActivityIndicator,
   FlatList,
   StyleSheet
} from 'react-native'

import { RouteProp, useRoute } from '@react-navigation/native'
import { RootStackParamList } from '@/navigation/AppNavigator'

import { useCharacterByIdQuery } from '@/features/queries/useCharacterByIdQuery'

export function CharacterDetailScreen() {
   const route = useRoute<RouteProp<RootStackParamList, 'CharacterDetail'>>()
   const { id } = route.params
   const { data, isLoading } = useCharacterByIdQuery(id)

   if (data) {
      console.log('--- DADOS DO PERSONAGEM (CharacterDetailScreen) ---')
      console.log(JSON.stringify(data, null, 2))
   }

   if (isLoading) return <ActivityIndicator size='large' style={{ flex: 1 }} />

   if (!data) return <Text>Personagem não encontrado.</Text>

   return (
      <ScrollView style={styles.container}>
         <Image
            source={{ uri: data.profile_image }}
            style={styles.profileImage}
            resizeMode='cover'
         />
         <Text style={styles.name}>{data.name}</Text>

         <Text style={styles.summary}>{data.summary}</Text>

         {/* 3. Informações Adicionais */}
         <View style={styles.infoSection}>
            <Text style={styles.label}>Vila:</Text>
            <Text style={styles.info}>{data.village.name}</Text>
         </View>
         <View style={styles.infoSection}>
            <Text style={styles.label}>Rank:</Text>
            <Text style={styles.info}>{data.rank}</Text>
         </View>
         <View style={styles.infoSection}>
            <Text style={styles.label}>Poder:</Text>
            <Text style={styles.info}>{data.power}</Text>
         </View>
         <View style={styles.infoSection}>
            <Text style={styles.label}>Pai:</Text>
            <Text style={styles.info}>{data.father?.name || 'Desconhecido'}</Text>
         </View>
         <View style={styles.infoSection}>
            <Text style={styles.label}>Mãe:</Text>
            <Text style={styles.info}>{data.mother?.name || 'Desconhecida'}</Text>
         </View>

         {/* 4. Jutsus */}
         <Text style={styles.sectionTitle}>Jutsus:</Text>
         {data.jutsus.map((jutsu) => {
            console.log('ITEM JUTSU:', jutsu)
            return (
               <Text key={jutsu.id} style={styles.listItem}>• {jutsu.name}</Text>
            )
         })}

         {/* 5. Galeria de Imagens */}
         <Text style={styles.sectionTitle}>Galeria:</Text>
         <FlatList
            horizontal
            data={data.images}
            keyExtractor={(item: any) => item.id.toString()}
            renderItem={({ item }) => (
               <Image 
                  source={{ uri: item.image_url }}
                  style={styles.galleryImage}
                  // resizeMode='cover'
               />
            )}
            showsHorizontalScrollIndicator={false}
         />
      </ScrollView>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      padding: 16,
      marginBottom: 64,
   },
   profileImage: {
      width: '100%',
      height: 300,
      borderRadius: 12,
   },
   name: {
      fontSize: 24,
      fontWeight: 'bold',
      marginVertical: 10,
   },
   summary: {
      fontSize: 16,
      lineHeight: 22,
   },
   infoSection: {
      flexDirection: 'row',
      marginTop: 5,
   },
   label: {
      fontSize: 16,
      fontWeight: 'bold',
      marginRight: 5,
   },
   info: {
      fontSize: 16,
   },
   sectionTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 16,
      marginBottom: 8,
   },
   listItem: {
      fontSize: 16,
      marginLeft: 8,
      marginVertical: 2,
   },
   galleryImage: {
      width: 200,
      height: 300,
      marginRight: 10,
   },
})