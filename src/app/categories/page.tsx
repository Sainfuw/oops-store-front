import Category from '@/components/Category'
import { getCategories } from '@/lib/get-categories'

export default async function Categories() {
  const categories = await getCategories()

  return (
    <section>
      <h1 className='text-4xl sm:text-6xl font-bold mb-16'>Categories</h1>
      {categories.length ? (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          {categories.map((category) => (
            <Category key={category.id} {...category} />
          ))}
        </div>
      ) : (
        <div className='w-full text-balance'>
          <p>You havent created any categories yet.</p>
        </div>
      )}
    </section>
  )
}
