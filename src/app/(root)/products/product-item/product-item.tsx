import { ProductsType } from "@/src/types/products";

export default function ProductItem({product,setProducts}: {product: ProductsType; setProducts: React.Dispatch<React.SetStateAction<ProductsType[]>>}) {
  
  const handleChange = (field: keyof ProductsType, value: string | number) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === product.id ? { ...p, [field]: value } : p)),
    );
  };

  return (
    <div className="p-4 justify-between border-b w-full flex items-center">
      <h2 className="text-xl font-semibold flex-wrap">{product.label}</h2>

      <div>
        <input
          className="w-16 text-black font-bold text-xl"
          value={product.value}
          onChange={(e) => handleChange("value", Number(e.target.value))}
        />

        <select
          className="font-bold text-xl"
          value={product.unit}
          onChange={(e) => handleChange("unit", e.target.value)}
        >
          <option value="euro-br">€ / бр</option>
          <option value="euro-kg">€ / кг</option>
        </select>
      </div>
      {/* <p className="text-gray-600">{product.value}</p> */}
    </div>
  );
}
