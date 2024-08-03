import React from 'react'

const Item = (item) => {
    return (
        <div class="rounded-lg border border-gray-200 bg-white p-6 shadow-sm ">
                        <div class="w-full">
                            <a href="#">
                                <img class="mx-auto h-full " src={item.image} alt="" />
                            </a>
                        </div>
                        <div class="pt-6">

                            <a href="#" class="text-lg font-semibold leading-tight text-gray-900">{item.name}</a>
                            <div class="mt-4 flex items-center gap-1 ">
                                <p class="text-2xl font-extrabold leading-tight text-red-500 dark:text-white">${item.new_price}</p>
                                <p class="text-md line-through  ">${item.old_price}</p>
                            </div>
                        </div>
                    </div>
    )
}

export default Item
