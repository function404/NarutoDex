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
      <TouchableOpacity style={styles.card} onPress={onPress}>
         <Image source={{ uri: village.symbol }} style={styles.image} />
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
      backgroundColor: '#fff',
      marginVertical: 6,
      borderRadius: 12,
      overflow: 'hidden',
      elevation: 2,
   },
   image: { width: 60, height: 60 },
   info: { padding: 10 },
   name: { fontSize: 16, fontWeight: 'bold' },
   count: { color: '#777' },
})
