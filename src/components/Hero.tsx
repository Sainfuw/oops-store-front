import { getHomeInfo } from '@/lib/get-home-info'
import { BlocksRenderer } from '@strapi/blocks-react-renderer'

export async function Hero() {
  const { title, description, image } = await getHomeInfo()

  return (
    <section className='flex gap-16 items-center'>
      <div className='w-1/2 flex flex-col gap-8'>
        <h1 className='text-4xl sm:text-6xl font-bold'>{title}</h1>
        <div className='w-full text-balance'>
          <BlocksRenderer content={description} />
        </div>
        <button className='rounded-lg bg-white text-black px-6 py-2 self-start text-sm font-semibold hover:bg-black hover:text-white hover:underline transition-all duration-300'>
          Show categories️
        </button>
      </div>
      <img src={image} alt={title} className='w-1/2 rounded-lg' />
    </section>
  )
}
