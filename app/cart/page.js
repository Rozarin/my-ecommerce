"use client"

import { useEffect, useState } from "react";

import cart from "@/db/cart-db";
import DisplayProducts from "../components/DisplayProducts"
import MainLayout from "../layouts/MainLayout"
import CartItem from "../components/CartItem"
import Link from "next/link";

export default function Cart() {
    const [cartItems, setCartItems] = useState([]);

    const refreshCart = () => {
        setCartItems([...cart]);
    };

    useEffect(() => {
        refreshCart();
    }, []);

    const itemsCount = cartItems.reduce(
        (total, item) => total + item.quantity,
        0
    );

    const subtotal = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    return(
        <>
            <MainLayout>

                <div className="w-full mt-20">
                    <h2 className="text-2xl font-bold my-4">Shopping Cart</h2>
                    <div className="relative flex items-baseline justify-between gap-2">

                        <div className="w-[65%] min-h-[200px] border border-gray-200 divide-y divide-gray-200 my-1 px-6 py-4">
                            {cartItems.length === 0 ? (
                                <p className="text-gray-500">
                                    Your cart is empty.
                                </p>
                            ) : (
                                cartItems.map((product) => (
                                    <CartItem
                                        key={product.id}
                                        product={product}
                                        onRemove={refreshCart}
                                    />
                                ))
                            )}
                        </div>

                        <div id="GoToCheckout" className="md:w-[33%] absolute top-0 right-0 m-2">
                            <div className="bg-white p-4 border border-gray-200">
                                
                                <Link href={'/checkout'}>
                                    <button 
                                        disabled={cartItems.length === 0}
                                        className={`flex items-center justify-center w-full text-white font-semibold p-3 rounded-full mt-4
                                                ${cartItems.length !== 0 ? 'cursor-pointer bg-blue-600' : 'bg-gray-300'}
                                            `}
                                    >
                                        Go to checkout
                                    </button>
                                </Link>
                                
                                <div className="flex items-center justify-between mt-4 text-sm mb-1">
                                    <p>Items ({itemsCount})</p>
                                    <p>₱{subtotal.toFixed(2)}</p>
                                </div>

                                <div className="flex items-center justify-between mb-4 text-sm">
                                    <p>Shipping:</p>
                                    <p>Free</p>
                                </div>

                                <div className="border-b border-gray-300" />

                                <div className="flex items-center justify-between mt-4 mb-1 text-lg font-semibold">
                                    <p>Subtotal</p>
                                    <p>₱{subtotal.toFixed(2)}</p>
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