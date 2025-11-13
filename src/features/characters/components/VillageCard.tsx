import React from 'react'
import {
   View,
   Text,
   Image,
   TouchableOpacity,
   StyleSheet
} from 'react-native'

import { Village } from '@/types/village'

interface Props {
   village: Village
   onPress: () => void
}

export function VillageCard({ village, onPress }: Props) {
   return (
      <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.8}>
         <View
            style={styles.imageContainer}
         >
            <Image 
               source={{ uri: village.symbol }} 
               style={styles.image} 
               resizeMode='contain'
            />
         </View>
         <View style={styles.info}>
            <Text style={styles.name}>{village.name}</Text>
            <Text style={styles.count}>{village.characters.length} ninjas</Text>
         </View>
      </TouchableOpacity>
   )
}

const styles = StyleSheet.create({
   card: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#333',
      marginVertical: 6,
      marginHorizontal: 4,
      borderRadius: 12,
      overflow: 'hidden',
      elevation: 3,
      shadowColor: '#f59e0b',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
   },
   imageContainer: {
      backgroundColor: '#444',
   },
   image: { 
      width: 60, 
      height: 60,
      margin: 10,
   },
   info: {
      padding: 10,
      flex: 1,
   },
   name: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#f4f4f5',
   },
   count: {
      color: '#999',
   },
})
