"use client"

import { useMemo } from "react";
import products from "@/db/products-db"
import ProductCard from "./ProductCard"

function shuffleArray(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

export default function DisplayProducts() {

    const randomizedProducts = useMemo(() => shuffleArray(products), []);

    return(
        <>
            <div className="grid grid-cols-5 gap-4">
                {randomizedProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </>
    )
}