import React from 'react'
import exclusive_image from "./Assets/Frontend_Assets/exclusive_image.png"
const Offers = () => {
  return (
<div className='flex items-center justify-center'>
<div className='w-[80vw] h-[70vh] bg-gradient-to-t from-slate-50 via-pink-50 to-fuchsia-200 p-8'>
<div class="container mx-auto flex md:px-24 md:py-10 md:flex-row flex-col items-center">
        <div
            class="lg:flex-grow mt-5 md:mt-0   md:w-1.5/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1
                class="text-2xl font-extrabold leading-9 tracking-tight mb-3 text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-normal">
                Exclusive
            </h1>
            <h1
                class="text-2xl font-extrabold leading-9 tracking-tight mb-3 text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-normal">
                Offers For You
            </h1>
            
            <p class="mb-4 md:pl-0  pl-2 pr-2 leading-relaxed dark:text-gray-300">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque quia quas hic, nulla quasi labore error odio? Explicabo officia qui cumque laboriosam
            </p>
          
                
                <a href="#" class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-full bg-red-500 hover:bg-red-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                Check Now
                <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
          
        </div>
        <div class="   md:mb-0 md:w-1/2 w-3/6">
            <img alt="hero" src={exclusive_image}/>
        </div>
    </div>
     </div>
</div>
  )
}

export default Offers
