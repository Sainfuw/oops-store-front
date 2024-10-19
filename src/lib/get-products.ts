import { IProducts, IProductStrapi } from '@/intefaces/products'
import { query } from './strapi'
const { STRAPI_HOST } = process.env

interface Props {
  category: string
  sort: string | undefined
  pageSize?: number
  page?: number
}

export async function getProducts({
  category,
  sort,
  pageSize = 12,
  page = 1,
}: Props): Promise<IProducts> {
  let url = `products?populate=*&filters[product_category][slug]=${category}`

  if (sort) url += `&sort=${sort}`
  if (page) url += `&pagination[page]=${page}`
  if (pageSize) url += `&pagination[pageSize]=${pageSize}`

  return query(url).then((res) => {
    const products = res.data.map((product: IProductStrapi) => {
      const { images: imageRaw, ...productWithoutImages } = product
      const images = imageRaw.map((image) => {
        const img = `${STRAPI_HOST}${image.url}`
        return img
      })

      return {
        ...productWithoutImages,
        images,
      }
    })

    return { products, pagination: res.meta.pagination }
  })
}
