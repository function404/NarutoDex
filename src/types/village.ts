import { ICharacter } from '@/types/character'

export interface Village {
   id: number
   name: string
   symbol: string
   characters: Pick<ICharacter, 'id' | 'name'>[]
}
