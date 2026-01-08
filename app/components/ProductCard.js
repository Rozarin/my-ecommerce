"use client"

import Link from "next/link"

export default function ProductCard({ product }) {
    return (
        <>
            <Link
                href={`/product/${product.id}`}
                className="max-w-[200px] p-1.5 border border-gray-50 hover:border-gray-200 hover:shadow-xl bg-gray-100 rounded mx-auto"
            >
                { product?.img_url ? <img className="rounded cursor-pointer" src={product.img_url+'/190'} /> : null}

                <div className="pt-2 px-1">

                    <h3 className="font-semibold text-[15px] hover:underline cursor-pointer">
                        {product.title}
                    </h3>

                    <h4 className="font-extrabold">₱{(product?.price / 1).toFixed(2)}</h4>

                    <div className="relative flex items-center text-[12px] text-gray-500">
                        <p>
                            <span className="line-through">₱{((product?.price * 1.10) / 1).toFixed(2)}</span>
                            <span className="px-2">-</span>
                            <span className="line-through">10%</span>
                        </p>
                    </div>

                </div>
            </Link>
        </>
    )
}