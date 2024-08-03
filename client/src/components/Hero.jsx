import React from 'react'
import hero_image from "./Assets/Frontend_Assets/hero_image.png"
import hand_icon from "./Assets/Frontend_Assets/hand_icon.png"
const Hero = () => {
  return (
    <section class=" bg-pink-100 h-[60vh] md:h-screen">
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-12 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7   mt-16 md:mt-28 lg:mt-0">
            <p className='text-xl font-semibold mb-2'>New Arrivals</p>
            <div className='flex items-center gap-x-2'>
            <h1 class="max-w-2xl mb-4 text-6xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">New </h1>
            <img className='relative md:w-20 w-14 bottom-3' src={hand_icon} alt="" />
            </div>
            <h1 class="max-w-2xl mb-4 text-6xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Collections</h1>
            <h1 class="max-w-2xl mb-4 text-6xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">For Everyone</h1>

            <a href="#" class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-full bg-red-500 hover:bg-red-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                Latest Collection
                <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
        </div>
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src={hero_image} alt="mockup"/>
        </div>                
    </div>
</section>
  )
}

export default Hero
