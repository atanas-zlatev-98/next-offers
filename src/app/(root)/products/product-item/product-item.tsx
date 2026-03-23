import { Button } from "@/src/components/ui/button";
import { ProductsType } from "@/src/types/products";

export default function ProductItem({product,setProducts,onRemove}: {product: ProductsType; setProducts: React.Dispatch<React.SetStateAction<ProductsType[]>>; onRemove: (id: number) => void}) {
  
  const handleChange = (field: keyof ProductsType, value: string | number) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === product.id ? { ...p, [field]: value } : p)),
    );
  };

  const removeHandler = () => {
    onRemove(product.id);
  }

 return (
  <div className="p-3 md:p-4 justify-between border-b w-full flex items-center gap-3">
    
    <div className="flex flex-row items-center gap-3 min-w-0">
      <Button className="ps-4 pe-4 bg-red-800 hover:bg-red-600 cursor-pointer shrink-0" onClick={removeHandler}>X</Button>
      <h2 className="text-base md:text-xl font-semibold truncate">{product.label}</h2>
    </div>

    <div className="flex items-center gap-2 shrink-0">
      <input
        type="number"
        min={0}
        className="field-sizing-content text-black font-bold text-base md:text-xl [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
        value={product.value === 0 ? '' : product.value}
        onChange={(e) => {
          const parsed = Number(e.target.value);
          if (!isNaN(parsed)) handleChange('value', parsed);
        }}
      />
      <select
        className="font-bold text-base md:text-xl"
        value={product.unit}
        onChange={(e) => handleChange("unit", e.target.value)}
      >
        <option value="euro-br">€ / бр</option>
        <option value="euro-kg">€ / кг</option>
      </select>
    </div>

  </div>
);
}
