import Product from '@/components/Product'
import { getProducts } from '@/lib/get-products'

export default async function Page({
  params,
}: {
  params: { categoryId: string }
}) {
  const { products, pagination } = await getProducts(params.categoryId)
  console.log(products, pagination)

  return (
    <section className='flex gap-16'>
      <div className='min-w-48 flex flex-col gap-4'>
        <h2 className='text-3xl sm:text-4xl font-bold mt-28 mb-8'>Filters</h2>
        <h3>+ Sizes</h3>
        <h3>+ Color</h3>
        <h3>+ Materials</h3>
      </div>
      <div>
        <h1 className='text-4xl sm:text-6xl font-bold mb-16 capitalize'>
          {params.categoryId} Products
        </h1>
        {products.length ? (
          <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
            {products.map((product) => (
              <Product
                key={product.id}
                {...product}
                category={params.categoryId}
              />
            ))}
          </div>
        ) : (
          <div className='w-full text-balance'>
            <p>You havent created any product yet.</p>
          </div>
        )}
      </div>
    </section>
  )
}
