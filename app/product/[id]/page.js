"use client"

import { useParams } from "next/navigation";
import products from "@/db/products-db";
import DisplayProducts from "@/app/components/DisplayProducts";
import MainLayout from "../../layouts/MainLayout"

export default function Product() {

    const { id } = useParams();

    const product = products.find(
        (item) => item.id === Number(id)
    );

    if (!product) {
        return (
            <MainLayout>
                <p className="p-4">Product not found.</p>
            </MainLayout>
        );
    }

    return (
        <MainLayout>
            <div className="flex px-4 py-10 mt-10">

                {product?.img_url ?
                    <img className="w-[40%] rounded-lg" src={product.img_url+'/280'} /> 
                    :
                    <div className="w-40%"></div> 
                }

                <div className="px-4 w-full">
                    <h3 className="font-bold text-xl">{product?.title}</h3>
                    <p className="text-sm text-gray-700">Brand New - Full Warranty</p>

                    <div className="border-b border-gray-200 py-1" />

                    <div className="pt-3 pb-2">
                        <h4 className="flex items-center">
                            Condition: <span className="font-bold text-[17px] ml-2">NEW</span>
                        </h4>
                    </div>

                    <div className="border-b border-gray-200 py-1" />

                    <div className="pt-3">
                        <div className="w-full flex items-center justify-between">
                            <div>
                                <h4 className="flex items-center">
                                    Price:  {product?.price ? 
                                                <p className="font-bold text-[20px] ml-2">₱{(product?.price /1).toFixed(2)}</p>
                                            :
                                                null
                                            }
                                </h4>
                                <p className="text-gray-500">
                                    <span className="line-through">₱{((product?.price * 1.10) / 1).toFixed(2)}</span>
                                    <span className="px-2">-</span>
                                    <span className="line-through">10%</span>
                                </p>
                            </div>

                            <button className="bg-[#3498c9] text-white py-2 px-20 rounded-full cursor-pointer">
                                Add To Cart
                            </button>
                        </div>
                    </div>

                    <div className="border-b border-gray-200 py-1" />

                    <div className="pt-3">
                        <h5 className="font-semibold pb-1">Description:</h5>
                        <p className="text-sm">{product?.description}</p>
                    </div>

                </div>

            </div>

            <h2 className="text-2xl font-bold mt-4 mb-6 px-4">Other items you may like</h2>
            <DisplayProducts />
        </MainLayout>
    );
    }
