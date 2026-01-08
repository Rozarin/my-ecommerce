"use client"

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";
import { AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai";
import products from "@/db/products-db";

export default function Header() {

    const [cartItems, setCartItems] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [showResults, setShowResults] = useState(false);

    const searchRef = useRef(null);

    const syncCart = () => {
        const items = JSON.parse(localStorage.getItem("cart_items")) || [];
        setCartItems(items);
    };

    useEffect(() => {
        syncCart();
        window.addEventListener("cartUpdated", syncCart);
        return () => window.removeEventListener("cartUpdated", syncCart);
    }, []);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (e) => {
        if (searchRef.current && !searchRef.current.contains(e.target)) {
            setShowResults(false);
        }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const itemsCount = cartItems.reduce(
        (total, item) => total + item.quantity,
        0
    );

    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    ).slice(0, 6); // limit results

    return (
        <>
            <div id="Header" className="fixed w-full top-0 border-b bg-white text-base font-semibold text-[#333333] py-4 px-5 z-40">

                <div className="max-w-[1200px] mx-auto w-full flex items-center justify-between mx-auto">
                    <div
                        id="HeaderLeft"
                        className="flex items-center px-2 h-8"
                    >
                        <Link href={"/"}>
                            <div className="h-10 bg-cover flex items-center gap-3">
                                <img src="/logo.png" className="w-10 h-10" />
                                <h1 className="font-bold text-2xl">Hardware Fanatics</h1>
                            </div>
                        </Link>
                    </div>

                <div ref={searchRef} className="relative min-w-[500px]">
                    <div className="flex items-center border-2 rounded-full border-gray-900 p-2">
                        <AiOutlineSearch size={22} />
                        <input
                        value={searchTerm}
                        onChange={(e) => {
                            setSearchTerm(e.target.value);
                            setShowResults(true);
                        }}
                        className="w-full pl-3 focus:outline-none"
                        placeholder="Search products"
                        type="text"
                        />
                    </div>

                    {showResults && searchTerm && (
                        <div id="HeaderCenter" className="absolute top-12 left-0 w-full bg-white border rounded-lg shadow-lg z-50 max-h-[350px] overflow-y-auto">
                            {filteredProducts.length === 0 ? (
                                <p className="p-4 text-sm text-gray-500">
                                    No products found
                                </p>
                                ) : (
                                    filteredProducts.map(product => (
                                    <Link
                                        key={product.id}
                                        href={`/product/${product.id}`}
                                        onClick={() => {
                                        setShowResults(false);
                                        setSearchTerm("");
                                        }}
                                        className="flex items-center gap-3 p-3 hover:bg-gray-100"
                                    >
                                        <img
                                            src={product.img_url + "/80"}
                                            className="w-12 h-12 rounded-md object-cover"
                                        />
                                        <div className="flex-1">
                                            <p className="text-sm font-medium">
                                                {product.title}
                                            </p>
                                            <p className="text-xs text-gray-500">
                                                ₱{product.price.toFixed(2)}
                                            </p>
                                        </div>
                                    </Link>
                                ))
                            )}
                        </div>
                    )}
                </div>
                    
                    <ul 
                        id="HeaderRight"
                        className="flex items-center px-2 h-8"
                    >
                        <li className="px-3 hover:underline cursor-pointer">
                            <Link href={"/cart"} className="relative">
                                <AiOutlineShoppingCart size={22} />
                                {itemsCount !== 0 &&
                                    <div className="absolute text-[10px] -top-[2px] -right-[5px] bg-red-500 w-[14px] h-[14px] rounded-full text-white">
                                        <div className="flex items-center justify-center -mt-[1px]">{itemsCount}</div>
                                    </div>
                                }
                            </Link>
                        </li>

                        <li className="relative px-3">
                            <Link href="/auth" className="flex items-center gap-2 hover:underline cursor-pointer">
                                <div>Login</div>
                                <BsChevronDown />
                            </Link>

                            <div
                                id="AuthDropdown"
                                className="hidden w-[200px] absolute bg-white z-40 top-[20px] left-0 border shadow-lg"
                            >
                                <div className="flex items-center justify-start gap-1 p-3">
                                    <img width={50} src="https://picsum.photos/200" />
                                    <div className="font-bold text-[13px]">Elijah Banguis</div>
                                </div>

                                <div className="border-b" />

                                <ul className="bg-white">
                                    <li className="py-2 px-4 w-full hover:underline text-blue-500 hover:text-blue-600 cursor-pointer">
                                        <Link href="/orders"> My Orders </Link>
                                    </li>
                                    <li className="py-2 px-4 w-full hover:underline text-blue-500 hover:text-blue-600 cursor-pointer">
                                        Sign out
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>

            </div>
        </>
    )
}