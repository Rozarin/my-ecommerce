"use client"

import DisplayProducts from "./components/DisplayProducts";
import MainLayout from "./layouts/MainLayout"

export default function Home() {
  return (
    <MainLayout>

      <h2 className="text-2xl font-bold mt-4 mb-6 px-4">Products</h2>
      <DisplayProducts />

    </MainLayout>
  );
}
