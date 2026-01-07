"use client"

import DisplayProducts from "@/app/components/DisplayProducts";
import MainLayout from "../../layouts/MainLayout"

export default function Product({ params }) {

    const product = {
        id: 1,
        title: "Brown Bag",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        img_url: "https://picsum.photos/id/1",
        price: 1500 
    }

    return (
        <MainLayout>
            <div className="flex px-4 py-10">

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
                            <h4 className="flex items-center">
                                Price:  {product?.price ? 
                                            <p className="font-bold text-[20px] ml-2">₱{(product?.price /100).toFixed(2)}</p>
                                        :
                                            null
                                        }
                            </h4>

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
