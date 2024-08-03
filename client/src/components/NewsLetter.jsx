import React from 'react'

const NewsLetter = () => {
  return (
    <div class="mx-auto  max-w-7xl bg-gradient-to-t from-slate-50 via-pink-50 to-fuchsia-200 ">
    <div
        class="relative isolate overflow-hidden px-6   xl:py-32">
       
        <h2 class="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight  sm:text-4xl">Get Exclusive Offers On Your Email
        </h2>

        <p class="mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-gray-700">
            Subscribe to our newsletter and stay updated
        </p>

        <form class="mx-auto mt-10 flex max-w-md gap-x-4">

            <label for="email-address" class="sr-only">Email address</label>
            <input id="email-address" name="email" type="email" autocomplete="email" required="" class="min-w-0 flex-auto rounded-md border-0 px-3.5 py-2  shadow-sm  sm:text-sm sm:leading-6 focus:outline-none" placeholder="Enter your email"/>

            <button type="submit" class="flex-none rounded-md  px-3.5 py-2.5 text-sm  text-white bg-black shadow-sm ">Subcribe</button>
        </form>

    </div>
</div>
  )
}

export default NewsLetter
