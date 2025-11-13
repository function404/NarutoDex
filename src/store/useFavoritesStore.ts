import { create } from "zustand"
import { persist } from "zustand/middleware"
import { Character } from "@/types/character"

interface FavoritesStore {
   favorites: Character[]
   toggleFavorite: (character: Character) => void
   isFavorite: (id: number) => boolean
}

export const useFavoritesStore = create<FavoritesStore>()(
   persist(
      (set, get) => ({
         favorites: [],
         toggleFavorite: (character) => {
         const { favorites } = get()
         const exists = favorites.find((f) => f.id === character.id)
         if (exists) {
            set({ favorites: favorites.filter((f) => f.id !== character.id) })
         } else {
            set({ favorites: [...favorites, character] })
         }
         },
         isFavorite: (id) => get().favorites.some((f) => f.id === id),
      }),
      { name: "favorites-narutodex" }
   )
)
