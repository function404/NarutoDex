import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { MainTabNavigator } from './MainTabNavigator'
import { CharacterDetailScreen } from '@/features/screens/CharacterDetailScreen'
import { VillageDetailScreen } from '@/features/screens/VillageDetailScreen'

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
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' },
            contentStyle: { backgroundColor: '#f4f4f5' },
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