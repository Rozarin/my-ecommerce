"use client"

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import CheckoutItem from "../components/CheckoutItem";
import DisplayProducts from "../components/DisplayProducts";
import MainLayout from "../layouts/MainLayout";

export default function Checkout() {

    const router = useRouter();

    const [cartItems, setCartItems] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem("cart_items")) || [];
        setCartItems(items);
    }, []);

    const itemsCount = cartItems.reduce(
        (total, item) => total + item.quantity,
        0
    );

    const subtotal = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    const handleConfirmPayment = () => {
        setLoading(true);

        setTimeout(() => {
            localStorage.removeItem("cart_items"); // clear cart
            setCartItems([]);
            router.push("/success"); // redirect
        }, 1500); // fake processing delay
    };

    return(
        <>
            <MainLayout>

                <div id="CheckoutPage" className="mt-20">
                    <h2 className="text-2xl font-bold my-4">Checkout</h2>
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
                                {cartItems.length === 0 ? (
                                        <p className="p-4 text-gray-500">No items in checkout.</p>
                                ) : (
                                        cartItems.map(item => (
                                        <CheckoutItem key={item.id} product={item} />
                                    ))
                                )}
                            </div>
                        </div>

                        <div id="PlaceOrder" className="relative -top-[6px] w-[35%] border border-gray-200 rounded-lg">
                            <div className="p-4">

                                <div className="flex items-baseline justify-between text-sm mb-1">
                                    <p>Items ({itemsCount})</p>
                                    <p>₱{subtotal.toFixed(2)}</p>
                                </div>

                                <div className="flex items-baseline justify-between text-sm mb-4">
                                    <p>Shipping:</p>
                                    <p>Free</p>
                                </div>

                                <div className="border-b border-gray-300" />

                                <div className="flex items-center justify-between mt-4 mb-1 text-lg font-semibold">
                                    <p>Order Total</p>
                                    <p className="text-2xl">₱{subtotal.toFixed(2)}</p>
                                </div>

                                <button
                                    onClick={() => setShowModal(true)}
                                    disabled={cartItems.length === 0}
                                    className={`mt-4 w-full text-white font-semibold p-3 rounded-full
                                    ${cartItems.length === 0
                                        ? "bg-gray-300 cursor-not-allowed"
                                        : "bg-blue-600 hover:bg-blue-700 cursor-pointer"}
                                    `}
                                >
                                    Confirm and Pay
                                </button>

                            </div>
                            
                            <div className="flex items-center justify-center p-4 gap-2 border-t border-gray-200 ">
                                <img src="/logo.png" className="w-10 h-10" />
                                <p className="font-light my-2">MONEY BACK GUARANTEE</p>
                            </div>

                        </div>

                    </div>
                </div>

                {showModal && (
                    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                        <div className="bg-white rounded-lg p-6 w-[350px]">

                            <h3 className="text-lg font-semibold mb-2">
                                Confirm Order
                            </h3>

                            <p className="text-sm text-gray-600 mb-4">
                                Are you sure you want to place this order?
                            </p>

                            <div className="flex justify-end gap-3">
                                <button
                                    onClick={() => setShowModal(false)}
                                    disabled={loading}
                                    className="px-4 py-2 border rounded-md cursor-pointer"
                                >
                                    Cancel
                                </button>

                                <button
                                    onClick={handleConfirmPayment}
                                    disabled={loading}
                                    className="px-4 py-2 bg-blue-600 text-white rounded-md cursor-pointer"
                                >
                                    {loading ? "Processing..." : "Confirm"}
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                <h2 className="text-2xl font-bold mt-4 mb-6 px-4">Other items you may like</h2>
                <DisplayProducts />

            </MainLayout>
        </>
    )
}