'use client'
import { AddProductDialog } from "./add-product/AddProductDialog";
import { useState } from "react";
import { ProductsType } from "@/src/types/products";

export default function Home(){

    const [products, setProducts] = useState<ProductsType[]>([]);

    const selectHandler = (product: ProductsType) =>{
        setProducts((prev)=>[...prev,product]);
    }

    return (
        <div className="flex h-full items-start p-10 justify-center bg-white">
            <h1 className="text-4xl font-bold text-black">Next Offers</h1>
            <AddProductDialog onSelect={selectHandler}/>

            {products.map((product, index)=>(
                <div key={index} className="p-4 bg-gray-100 rounded-md">
                    <h2 className="text-xl font-semibold">{product.label}</h2>
                    <p className="text-gray-600">{product.value}</p>
                </div>
            ))}
        </div>
    )
}