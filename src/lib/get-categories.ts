import { ICategory, ICategoryStrapi } from '@/interfaces/categories'
import { query } from './strapi'
const { STRAPI_HOST } = process.env

export async function getCategories(
  locale: string = 'en'
): Promise<ICategory[]> {
  return query(
    `product-categories?locale=${locale}&fields[0]=id&fields[1]=name&fields[2]=slug&fields[3]=description&populate[image][fields][0]=url`
  ).then((res) => {
    return res.data.map((category: ICategoryStrapi) => {
      const { id, name, slug, description, image: imageObj } = category
      const image = `${STRAPI_HOST}${imageObj.url}`

      return { id, name, slug, description, image }
    })
  })
}
