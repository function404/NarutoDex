import { useQuery } from '@tanstack/react-query'

import { api } from '@/api/api'

import { ICharacter } from '@/types/character'

export function useCharactersQuery() {
   return useQuery<ICharacter[]>({
      queryKey: ['characters'],
      queryFn: async () => {
         const { data } = await api.get('/characters')
         return data
      },
   })
}
