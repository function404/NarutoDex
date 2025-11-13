import React from 'react'
import {
  View,
  Text,
  Image,
  ScrollView,
  ActivityIndicator,
  FlatList,
  StyleSheet,
} from 'react-native'
import { RouteProp, useRoute } from '@react-navigation/native'
import Pinchable from 'react-native-pinchable'

import { RootStackParamList } from '@/navigation/AppNavigator'
import { useCharacterByIdQuery } from '@/features/queries/useCharacterByIdQuery'

export function CharacterDetailScreen() {
  const route = useRoute<RouteProp<RootStackParamList, 'CharacterDetail'>>()
  const { id } = route.params
  const { data, isLoading } = useCharacterByIdQuery(id)

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

  if (!data) return <Text>Personagem não encontrado.</Text>

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 40 }}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: data.profile_image }}
          style={styles.profileImage}
          resizeMode='cover'
        />
      </View>

      <Text style={styles.name}>{data.name}</Text>
      <Text style={styles.summary}>{data.summary}</Text>

      <View style={styles.infoBox}>
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
      </View>

      <Text style={styles.sectionTitle}>Jutsus:</Text>
      {data.jutsus.length > 0 ? (
        data.jutsus.map((jutsu) => (
          <View style={styles.jutsuBox}>
            <Text key={jutsu.id} style={styles.listItem}>
              • {jutsu.name}
            </Text>
          </View>
        ))
      ) : (
        <View style={styles.emptyJutsuBox}>
          <Text style={styles.emptyJutsu}>Nenhum jutsu cadastrado.</Text>
        </View>
      )}

      <Text style={styles.sectionTitle}>Galeria:</Text>
      <View style={styles.galleryContainer}>
        {data.images.length > 0 ? (
          <FlatList
            horizontal
            data={data.images}
            keyExtractor={(item: any) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.galleryItem}>
                <Pinchable>
                  <Image
                    source={{ uri: item.image_url }}
                    style={styles.galleryImage}
                    resizeMode='cover'
                  />
                </Pinchable>
              </View>
            )}
            showsHorizontalScrollIndicator={false}
          />
        ) : (
          <Text style={styles.info}>Nenhuma imagem cadastrada.</Text>
        )}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
  },
  imageContainer: {
    backgroundColor: '#222',
    elevation: 3,
    shadowColor: '#f59e0b',
    shadowOpacity: 0.2,
    shadowRadius: 2,
    shadowOffset: { width: 0, height: 2 },
    marginBottom: 10,
  },
  profileImage: {
    width: '100%',
    height: 350,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    marginVertical: 12,
    textAlign: 'center',
    paddingHorizontal: 16,
    color: '#f4f4f5',
  },
  summary: {
    fontSize: 16,
    lineHeight: 24,
    paddingHorizontal: 16,
    color: '#f4f4f5',
    marginBottom: 16,
    textAlign: 'justify',
  },
  infoBox: {
    backgroundColor: '#333',
    marginHorizontal: 16,
    borderRadius: 12,
    padding: 16,
    elevation: 2,
    shadowColor: '#f59e0b',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  infoSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 6,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#f4f4f5',
  },
  info: {
    fontSize: 16,
    color: '#f4f4f5',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 28,
    marginBottom: 10,
    paddingHorizontal: 16,
    color: '#f4f4f5',
  },
  jutsuBox: {
    backgroundColor: '#333',
    marginHorizontal: 16,
    borderRadius: 10,
    paddingVertical: 8,
    marginBottom: 16,
    elevation: 1,
  },
  listItem: {
    fontSize: 16,
    marginLeft: 20,
    marginVertical: 4,
    color: '#444',
  },
  emptyJutsuBox: {
    paddingHorizontal: 16,
  },
  emptyJutsu: {
    textAlign: 'center',
    padding: 12,
    marginTop: 10,
    color: '#ffcccc',
    backgroundColor: '#ff323233',
    borderRadius: 8,
    borderColor: '#ff3232',
    borderWidth: 1,
  },
  galleryContainer: {
    marginBottom: 30,
    paddingHorizontal: 16,
  },
  galleryItem: {
    marginRight: 12,
  },
  galleryImage: {
    width: 170,
    height: 300,
    borderRadius: 10,
    backgroundColor: '#333',
  },
})
