import React from 'react'
import {
   View,
   Text,
   Image,
   TouchableOpacity,
   StyleSheet
} from 'react-native'

import { Character } from '@/types/character'

interface Props {
   character: Character
   onPress: () => void
}

export function CharacterCard({ character, onPress }: Props) {
   return (
      <TouchableOpacity style={styles.card} onPress={onPress}>
         <Image
            source={{ uri: character.profile_image }}
            style={styles.image}
            resizeMode='cover'
         />
         <View style={styles.info}>
            <Text style={styles.name}>{character.name}</Text>
            <Text style={styles.village}>{character.village.name}</Text>
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
   image: { width: 80, height: 80 },
   info: { padding: 10 },
   name: { fontSize: 16, fontWeight: 'bold' },
   village: { color: '#555' },
})
