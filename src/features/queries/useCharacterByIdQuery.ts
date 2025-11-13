import { useQuery } from '@tanstack/react-query'

import { api } from '@/api/api'

import { ICharacter } from '@/types/character'

export function useCharacterByIdQuery(id: number) {
   return useQuery<ICharacter>({
      queryKey: ['character', id],
      queryFn: async () => {
         const { data } = await api.get(`/characters/${id}`)
         return data
      },
      enabled: !!id,
   })
}
