export interface ICategoryStrapi {
  id: number
  name: string
  slug: string
  description: string
  image: {
    url: string
  }
}

export interface ICategory {
  id: number
  name: string
  slug: string
  description: string
  image: string
}
