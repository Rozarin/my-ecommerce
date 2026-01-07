"use client"

import DisplayProducts from "../components/DisplayProducts"
import MainLayout from "../layouts/MainLayout"
import CartItem from "../components/CartItem"

export default function Cart() {
    const product = {
        id: 1,
        title: "Brown Bag",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        img_url: "https://picsum.photos/id/1",
        price: 1500 
    }

    return(
        <>
            <MainLayout>

                <div className="w-full">
                    <h2 className="text-2xl font-bold my-4">Shopping Cart</h2>
                    <div className="relative flex items-baseline justify-between gap-2">

                        <div className="w-[65%]">
                            <CartItem key={product.id} product={product} />
                        </div>

                        <div id="GoToCheckout" className="md:w-[33%] absolute top-0 right-0 m-2">
                            <div className="bg-white p-4 border border-gray-200">
                                
                                <button className="flex items-center justify-center bg-blue-600 w-full text-white font-semibold p-3 rounded-full mt-4">
                                    Go to checkout
                                </button>
                                
                                <div className="flex items-center justify-between mt-4 text-sm mb-1">
                                    <p>Items (3)</p>
                                    <p>₱12.99</p>
                                </div>

                                <div className="flex items-center justify-between mb-4 text-sm">
                                    <p>Shipping:</p>
                                    <p>Free</p>
                                </div>

                                <div className="border-b border-gray-300" />

                                <div className="flex items-center justify-between mt-4 mb-1 text-lg font-semibold">
                                    <p>Subtotal</p>
                                    <p>₱12.99</p>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>

                <h2 className="text-2xl font-bold mt-4 mb-6 px-4">Other items you may like</h2>
                <DisplayProducts />

            </MainLayout>
        </>
    )
}