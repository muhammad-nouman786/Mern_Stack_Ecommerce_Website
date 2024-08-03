import React from 'react'
import collections from "./Assets/Frontend_Assets/new_collections"
import Item from './Item'
const New_Collections = () => {
  return (
    <section class=" py-8   md:py-12">
    <div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
<div className='flex flex-col justify-center items-center'>
<h1 className='md:text-4xl text-2xl font-bold text-center'>NEW COLLECTIONS</h1>
<hr className='h-1 w-[15vw] bg-black mb-10'/>
</div>

        <div class="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
            {
                collections.map((item)=>{
                return<Item key={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}  />
                })
            }

        </div>

    </div>

</section>
  )
}

export default New_Collections
