import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { CharacterDetailScreen } from '@/features/screens/CharacterDetailScreen'
import { VillageDetailScreen } from '@/features/screens/VillageDetailScreen'

import { MainTabNavigator } from '@/navigation/MainTabNavigator'

export type RootStackParamList = {
   MainTabs: undefined
   CharacterDetail: { id: number }
   VillageDetail: { id: number }
}

const Stack = createNativeStackNavigator<RootStackParamList>()

export function AppNavigator() {
   return (
      <Stack.Navigator
         initialRouteName='MainTabs'
         screenOptions={{
            headerStyle: { backgroundColor: '#f59e0b' },
            headerTintColor: '#333',
            headerTitleStyle: { fontWeight: 'bold' },
            contentStyle: { backgroundColor: '#333' },
         }}
      >
         <Stack.Screen
            name='MainTabs'
            component={MainTabNavigator}
            options={{ title: 'NarutoDex' }}
         />
         <Stack.Screen
            name='CharacterDetail'
            component={CharacterDetailScreen}
            options={{ title: 'Detalhes do Personagem' }}
         />
         <Stack.Screen
            name='VillageDetail'
            component={VillageDetailScreen}
            options={{ title: 'Detalhes da Vila' }}
         />
      </Stack.Navigator>
   )
}