"use client"

import { useParams } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

import products from "@/db/products-db";
import { addToCart } from "@/db/cart-db";
import DisplayProducts from "@/app/components/DisplayProducts";
import MainLayout from "../../layouts/MainLayout"

export default function Product() {

    const { id } = useParams();
    const [loading, setLoading] = useState(false);

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

    const handleAddToCart = () => {
        try {
        setLoading(true);

        // simulate API delay
        setTimeout(() => {
            addToCart(product);
            toast.success("Added to cart successfully 🛒");
            setLoading(false);
        }, 800);
        } catch (error) {
            toast.error("Failed to add to cart ❌");
            setLoading(false);
        }
    };

    return (
        <MainLayout>
            <div className="flex px-4 py-5 mt-20">

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
                                                <p className="font-bold text-[20px] ml-2">₱{product?.price.toFixed(2)}</p>
                                            :
                                                null
                                            }
                                </h4>
                                <p className="text-gray-500">
                                    <span className="line-through">₱{(product?.price * 1.10).toFixed(2)}</span>
                                    <span className="px-2">-</span>
                                    <span className="line-through">10%</span>
                                </p>
                            </div>

                            <button
                                onClick={handleAddToCart}
                                disabled={loading}
                                className={`py-2 px-20 rounded-full text-white transition
                                    ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 cursor-pointer hover:bg-blue-600"}`
                                }
                            >
                                {loading ? "Adding..." : "Add To Cart"}
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

            <div className="border-b border-gray-200 py-1" />

            <h2 className="text-2xl font-bold mt-4 mb-6 px-4">Other items you may like</h2>
            <DisplayProducts />
        </MainLayout>
    );
    }
