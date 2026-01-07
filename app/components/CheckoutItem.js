"use client"

import { usePathname } from "next/navigation"

export default function CheckoutItem({ product }) {

    const pathname = usePathname()

    return(
        <>
            <div className="flex justify-start rounded-lg mb-2 border border-gray-200 p-4">
                <img src={product.img_url+'/150'} className="rounded-md w-[150px] h-[150px]" />

                <div className="overflow-hidden pl-2">

                    <h3 className="font-semibold">{product.title}</h3>
                    <h4 className="text-lg font-semibold">₱{(product?.price /100).toFixed(2)}</h4>

                    <div className="relative flex items-center text-[14px] text-gray-500">
                        <p className="line-through">₱{((product?.price * 1.1) /100).toFixed(2)}</p>
                        <p className="px-2">-</p>
                        <p className="line-through">10%</p>
                    </div>

                    <p className="text-sm mt-2">
                        {product.description.substring(0, 130)}...
                    </p>

                    {pathname == '/cart' ?
                        <button className="text-sm mt-2 w-full flex justify-end underline text-blue-500 cursor-pointer">
                            Remove
                        </button>
                    :
                        null
                    }

                </div>

            </div>
        </>
    )
}