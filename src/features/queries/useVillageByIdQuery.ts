import { useQuery } from '@tanstack/react-query'

import { api } from '@/api/api'

import { Village } from '@/types/village'

export function useVillageByIdQuery(id: number) {
   return useQuery<Village>({
      queryKey: ['village', id],
      queryFn: async () => {
         const { data } = await api.get(`/villages/${id}`)
         return data
      },
      enabled: !!id,
   })
}
