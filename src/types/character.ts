interface IJutsu {
   id: number
   name: string
   type: string
   power: number
   description: string
   character_id: number
}

interface IParent {
   id: number
   name: string
}

interface IImageGalleryItem {
   id: number
   image_url: string
}

export interface ICharacter {
   id: number
   name: string
   father: IParent | null
   mother: IParent | null
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
