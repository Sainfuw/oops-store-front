interface ICategoryBase {
  id: number
  name: string
  slug: string
  description: string
}

export interface ICategoryStrapi extends ICategoryBase {
  image: {
    url: string
  }
}

export interface ICategory extends ICategoryBase {
  image: string
}
