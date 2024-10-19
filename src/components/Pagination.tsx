import type { IPagination } from '@/intefaces/products'
import { cn } from '@/utils/cn'
import Link from 'next/link'

export function Pagination({ page, pageCount, total }: IPagination) {
  const isFirstPage = page === 1
  const isLastPage = page === pageCount

  const prevPage = page - 1
  const nextPage = page + 1

  const prevPageUrl = isFirstPage ? '#' : `?page=${prevPage}`
  const nextPageUrl = isLastPage ? '#' : `?page=${nextPage}`

  return (
    <div className='flex flex-col items-center mt-10'>
      <span className='text-sm text-gray-700 dark:text-gray-400'>
        Page{' '}
        <span className='font-semibold text-gray-900 dark:text-white'>
          {page}
        </span>{' '}
        to{' '}
        <span className='font-semibold text-gray-900 dark:text-white'>
          {pageCount}
        </span>{' '}
        of{' '}
        <span className='font-semibold text-gray-900 dark:text-white'>
          {total}
        </span>{' '}
        Products
      </span>
      <div className='inline-flex mt-2 xs:mt-0'>
        <Link
          href={prevPageUrl}
          className={cn(
            'flex items-center justify-center px-3 h-8 text-sm font-medium text-white border rounded-s-lg',
            isFirstPage
              ? 'text-gray-500 border-gray-500 hover:text-gray-500 hover:bg-black'
              : 'hover:bg-white hover:text-black'
          )}
          aria-disabled={isFirstPage}
        >
          <svg
            className='w-3.5 h-3.5 me-2 rtl:rotate-180'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 14 10'
          >
            <path
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M13 5H1m0 0 4 4M1 5l4-4'
            />
          </svg>
          Prev
        </Link>
        <Link
          href={nextPageUrl}
          className={cn(
            'flex items-center justify-center px-3 h-8 text-sm font-medium text-white border rounded-e-lg',
            isLastPage
              ? 'text-gray-500 border-gray-500 hover:text-gray-500 hover:bg-black'
              : 'hover:bg-white hover:text-black'
          )}
          aria-disabled={isLastPage}
        >
          Next
          <svg
            className='w-3.5 h-3.5 ms-2 rtl:rotate-180'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 14 10'
          >
            <path
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M1 5h12m0 0L9 1m4 4L9 9'
            />
          </svg>
        </Link>
      </div>
    </div>
  )
}
