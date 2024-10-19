import { IProduct } from '@/interfaces/products'
import Link from 'next/link'

export default function Category({ name, slug, images, category }: IProduct) {
  return (
    <Link href={`/categories/${category}/${slug}`} className='overflow-hidden'>
      <img
        src={images[0]}
        alt={name}
        className='w-full rounded-lg aspect-square object-cover'
      />
      <h2 className='text-lg p-4 capitalize text-balance'>{name}</h2>
    </Link>
  )
}
