import { useQuery } from '@tanstack/react-query'

import { api } from '@/api/api'

import { Character } from '@/types/character'

export function useCharactersQuery() {
   return useQuery<Character[]>({
      queryKey: ['characters'],
      queryFn: async () => {
         const { data } = await api.get('/characters')
         return data
      },
   })
}
