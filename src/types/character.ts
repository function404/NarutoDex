interface IJutsu {
   id: number
   name: string
   type: string
   power: number
   description: string
   character_id: number
}

interface IImageGalleryItem {
   id: number
   url: string
}

export interface Character {
   id: number
   name: string
   father: string
   mother: string
   village: {
      id: number
      name: string
   }
   rank: string
   power: number
   profile_image: string
   summary: string
   jutsus: IJutsu[]
   images: IImageGalleryItem[]
}
