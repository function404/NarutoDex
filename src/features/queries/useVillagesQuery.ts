import { useQuery } from '@tanstack/react-query'

import { api } from '@/api/api'

import { Village } from '@/types/village'

export function useVillagesQuery() {
   return useQuery<Village[]>({
      queryKey: ['villages'],
      queryFn: async () => {
         const { data } = await api.get('/villages')
         return data
      },
   })
}
