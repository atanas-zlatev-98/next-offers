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
    <div className="p-4 justify-between border-b w-full flex items-center">
      <div className="flex flex-row items-center gap-3">
        <Button className="ps-4 pe-4 bg-red-800 hover:bg-red-600 cursor-pointer" onClick={removeHandler}>X</Button>
      <h2 className="text-xl font-semibold flex-wrap">{product.label}</h2>
      </div>

      <div>
        <input
        type="number"
        min={0}
          className="field-sizing-content text-black font-bold text-xl [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          value={product.value === 0 ? '' : product.value}
          onChange={(e) => {
    const parsed = Number(e.target.value);
    if (!isNaN(parsed)) handleChange('value', parsed);
  }}
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
