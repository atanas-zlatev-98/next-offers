import { useState } from "react";
import { ProductsType } from "@/src/types/products";

export default function ProductItem({ product }: { product: ProductsType }) {
    
  const [productValue, setProductValue] = useState(product.value);

  return (
    <div className="p-4 justify-between border-b w-full flex items-center">
      
      <h2 className="text-xl font-semibold">{product.label}</h2>
      
      <div>

        <input className="w-16 text-black font-bold text-xl" value={productValue} onChange={(e) => setProductValue(Number(e.target.value))}/>

        <select className="font-bold text-xl">
          <option value="lev-br">€ / бр</option>
          <option value="lev-kg">€ / кг</option>
        </select>

      </div>
      {/* <p className="text-gray-600">{product.value}</p> */}
    </div>
  );
}
