interface IProductBase {
  id: number
  name: string
  slug: string
  description: string
  price: number
  category: string
}

interface IImage {
  url: string
  width: number
  height: number
}

export interface IProductStrapi extends IProductBase {
  images: IImage[]
}

export interface IProduct extends IProductBase {
  images: string[]
}

interface IPagination {
  page: number
  pageCount: number
  pageSize: number
  total: number
}

export interface IProducts {
  products: IProduct[]
  pagination: IPagination
}
