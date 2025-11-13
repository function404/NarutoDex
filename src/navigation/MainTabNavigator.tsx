import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { CharactersListScreen } from '@/features/screens/CharactersListScreen'
import { VillagesListScreen } from '@/features/screens/VillagesListScreen'

export type RootTabParamList = {
   CharactersList: undefined
   VillagesList: undefined
}

const Tab = createBottomTabNavigator<RootTabParamList>()

export function MainTabNavigator() {
   return (
      <Tab.Navigator
         initialRouteName='CharactersList'
         screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: '#f59e0b',
            tabBarInactiveTintColor: '#f4f4f5',
            tabBarStyle: {
               backgroundColor: '#333',
            },
            tabBarLabelStyle: {
               fontWeight: 'bold',
            },
         }}
      >
         <Tab.Screen
            name='CharactersList'
            component={CharactersListScreen}
            options={{
               title: 'Personagens',
               tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name='sword' color={color} size={size} />
               ),
            }}
         />
         <Tab.Screen
            name='VillagesList'
            component={VillagesListScreen}
            options={{
               title: 'Vilas',
               tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons
                     name='shield-home'
                     color={color}
                     size={size}
                  />
               ),
            }}
         />
      </Tab.Navigator>
   )
}