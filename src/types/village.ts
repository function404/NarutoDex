import { Character } from '@/types/character'

export interface Village {
   id: number
   name: string
   symbol: string
   characters: Pick<Character, 'id' | 'name'>[]
}
