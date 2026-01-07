"use client"

export default function CartItem({ product }) {
    return(
        <>
            <div className="relative flex justify-start my-2 border border-gray-200 w-full p-6">
                <img src={product?.img_url+'/150'} className="rounded-md w-[150px] h-[150px]"/>

                <div className="overflow-hidden pl-2 w-full">
                    <div className="flex items-center justify-between w-full">
                        <h4 className="flex items-center font-semibold justify-between w-[400px] text-[16px] underline">
                            {product?.title}
                        </h4>
                        <h4 className="font-bold text-lg">
                            ₱{(product?.price /100).toFixed(2)}
                        </h4>
                    </div>

                    <h4 className="font-semibold mt-2">NEW</h4>

                    <p className="text-sm mt-2">
                        {product?.description.substring(0, 150)}...
                    </p>

                    <div className="absolute right-0 bottom-0 p-4 text-sm">
                        <button className="underline text-blue-500 cursor-pointer">
                            Remove
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}