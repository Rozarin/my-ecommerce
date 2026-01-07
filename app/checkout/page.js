"use client"

import CheckoutItem from "../components/CheckoutItem"
import DisplayProducts from "../components/DisplayProducts"
import MainLayout from "../layouts/MainLayout"

export default function Checkout() {

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

                <div id="CheckoutPage">
                    <h2 className="text-2xl font-bold my-4">Shopping Cart</h2>
                    <div className="relative flex items-baseline gap-4 justify-between mx-auto w-full">

                        <div className="w-[65%]">
                            <div className="bg-white rounded-lg p-4 border border-gray-200">

                                <h3 className="text-xl font-semibold mb-2">Shipping Address</h3>

                                <div>
                                    <ul className="text-sm mt-2">
                                        <li>Name: </li>
                                        <li>Address: </li>
                                        <li>Zipcode: </li>
                                        <li>City: </li>
                                        <li>Country: </li>
                                    </ul>
                                </div>

                            </div>

                            <div id="Items" className="bg-white rounded-lg mt-4">
                                <CheckoutItem key={product.id} product={product} />
                            </div>
                        </div>

                        <div id="PlaceOrder" className="relative -top-[6px] w-[35%] border border-gray-200 rounded-lg">
                            <div className="p-4">

                                <div className="flex items-baseline justify-between text-sm mb-1">
                                    <p>Items (3)</p>
                                    <p>₱12.99</p>
                                </div>

                                <div className="flex items-baseline justify-between text-sm mb-4">
                                    <p>Shipping:</p>
                                    <p>Free</p>
                                </div>

                                <div className="border-b border-gray-300" />

                                <div className="flex items-center justify-between mt-4 mb-1 text-lg font-semibold">
                                    <p>Order Total</p>
                                    <p className="text-2xl">₱12.99</p>
                                </div>

                                <form>
                                    <div 
                                        id="card-element" 
                                        className="border border-gray-500 p-2 rounded-sm"
                                    />

                                    <p 
                                        id="card-error"
                                        role="alert"
                                        className="text-red-700 text-center font-semibold relative top-2"
                                    />

                                    <button
                                        type="submit" 
                                        className="mt-4 bg-blue-600 text-lg w-full text-white font-semibold p-3 rounded-full"
                                    >
                                        Confirm and pay
                                    </button>
                                </form>

                            </div>
                            
                            <div className="flex items-center justify-center p-4 gap-2 border-t border-gray-200 ">
                                <img width={50} src="" />
                                <p className="font-light my-2">MONEY BACK GUARANTEE</p>
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