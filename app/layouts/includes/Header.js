"use client"

import Link from "next/link"
import { BsChevronDown } from "react-icons/bs"
import { AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai"

export default function Header() {
    return (
        <>
            <div id="Header" className="border-b text-[12px] text-[#333333] py-2 px-5">

                <div className="w-full flex items-center justify-between mx-auto">
                    <div
                        id="HeaderLeft"
                        className="flex items-center px-2 h-8"
                    ></div>

                    <div
                        id="HeaderCenter"
                        className="flex items-center px-2 h-8"
                    >
                        <div className="relative min-w-[500px] flex items-center border-2 rounded-full border-gray-900 p-1">
                            <button className="flex items-center">
                                <AiOutlineSearch size={22} />
                            </button>
                            <input 
                                className="w-full placeholder-gray-400 pl-3 focus:outline-none"
                                placeholder="Search products"
                                type="text"
                            />
                        </div>
                    </div>
                    
                    <ul 
                        id="HeaderRight"
                        className="flex items-center px-2 h-8"
                    >
                        <li className="px-3 hover:underline cursor-pointer">
                            <div className="relative">
                                <AiOutlineShoppingCart size={22} />
                                <div className="absolute text-[10px] -top-[2px] -right-[5px] bg-red-500 w-[14px] h-[14px] rounded-full text-white">
                                    <div className="flex items-center justify-center -mt-[1px]">2</div>
                                </div>
                            </div>
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