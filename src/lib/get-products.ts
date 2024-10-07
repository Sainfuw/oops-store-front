import { IProducts, IProductStrapi } from '@/intefaces/products'
import { query } from './strapi'
const { STRAPI_HOST } = process.env

export function getProducts(category: string): Promise<IProducts> {
  return query(
    `products?populate=*&filters[product_category][slug]=${category}`
  ).then((res) => {
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
