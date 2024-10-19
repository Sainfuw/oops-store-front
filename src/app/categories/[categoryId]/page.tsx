import { Pagination } from '@/components/Pagination'
import Product from '@/components/Product'
import { getProducts } from '@/lib/get-products'
import Link from 'next/link'

export default async function Page({
  params,
  searchParams,
}: {
  params: { categoryId: string }
  searchParams: { [key: string]: string | undefined }
}) {
  const { products, pagination } = await getProducts({
    category: params.categoryId,
    sort: searchParams.sortBy,
    pageSize: 4,
    page: searchParams.page ? Number(searchParams.page) : 1,
  })

  return (
    <section className='flex gap-16'>
      <div className='min-w-48 flex flex-col gap-4'>
        <h2 className='text-3xl sm:text-4xl font-bold mt-28 mb-8'>Filters</h2>
        <h3>+ Sizes</h3>
        <h3>+ Color</h3>
        <h3>+ Materials</h3>
        <div>
          <h3>+ Sort</h3>
          <ul className='flex flex-col gap-2 ml-4 mt-2'>
            <li>
              <Link href={`/categories/${params.categoryId}`}>- Default</Link>
            </li>
            <li>
              <Link href={`/categories/${params.categoryId}?sortBy=price`}>
                - Price
              </Link>
            </li>
          </ul>
        </div>
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
        <Pagination {...pagination} />
      </div>
    </section>
  )
}
