import { ICategory, ICategoryStrapi } from '@/intefaces/categories'
import { query } from './strapi'
const { STRAPI_HOST } = process.env

export function getCategories(): Promise<ICategory[]> {
  return query(
    'product-categories?fields[0]=id&fields[1]=name&fields[2]=slug&fields[3]=description&populate[image][fields][0]=url'
  ).then((res) => {
    return res.data.map((category: ICategoryStrapi) => {
      const { id, name, slug, description, image: imageObj } = category
      const image = `${STRAPI_HOST}${imageObj.url}`

      return { id, name, slug, description, image }
    })
  })
}
