import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import { CharactersListScreen } from "@/features/screens/CharactersListScreen"
import { CharacterDetailScreen } from "@/features/screens/CharacterDetailScreen"
import { VillagesListScreen } from "@/features/screens/VillagesListScreen"
import { VillageDetailScreen } from "@/features/screens/VillageDetailScreen"

export type RootStackParamList = {
   CharactersList: undefined
   CharacterDetail: { id: number }
   VillagesList: undefined
   VillageDetail: { id: number }
}

const Stack = createNativeStackNavigator<RootStackParamList>()

export function AppNavigator() {
   return (
      <Stack.Navigator
         initialRouteName="CharactersList"
         screenOptions={{
            headerStyle: { backgroundColor: "#f59e0b" },
            headerTintColor: "#fff",
            headerTitleStyle: { fontWeight: "bold" },
         }}
      >
         <Stack.Screen
            name="CharactersList"
            component={CharactersListScreen}
            options={{ title: "Personagens" }}
         />
         <Stack.Screen
            name="CharacterDetail"
            component={CharacterDetailScreen}
            options={{ title: "Detalhes do Personagem" }}
         />
         <Stack.Screen
            name="VillagesList"
            component={VillagesListScreen}
            options={{ title: "Vilas" }}
         />
         <Stack.Screen
            name="VillageDetail"
            component={VillageDetailScreen}
            options={{ title: "Detalhes da Vila" }}
         />
      </Stack.Navigator>
   )
}
