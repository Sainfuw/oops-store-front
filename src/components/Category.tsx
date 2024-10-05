import { ICategory } from '@/intefaces/categories'
import Link from 'next/link'

export default function Category({ name, image }: ICategory) {
  return (
    <Link href={`/categories/${name}`} className='overflow-hidden'>
      <img
        src={image}
        alt={name}
        className='w-full rounded-lg aspect-[16/9] md:aspect-[4/3] object-cover'
      />
      <h2 className='text-xl p-4 capitalize'>{name}</h2>
    </Link>
  )
}
