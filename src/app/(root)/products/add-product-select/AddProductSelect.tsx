import { ProductsType } from '@/src/types/products';
import { products } from '@/src/util/products';
import { useState } from 'react';

import Select from 'react-select';

export default function AddProductSelect({setSelectedProduct}: {setSelectedProduct: (product: ProductsType) => void}) {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onMenuOpen = () => setIsMenuOpen(true);
  const onMenuClose = () => setIsMenuOpen(false);

  return (
    <div className='flex gap-2 flex-col'>
      
      <label className='text-sm font-bold' id="aria-label" htmlFor="aria-example-input">
        Изберете продукт
      </label>

      <Select
        aria-labelledby="aria-label"
        inputId="aria-example-input"
        name="aria-live-color"
        onChange={(value) => setSelectedProduct(value as ProductsType)}
        onMenuOpen={onMenuOpen}
        onMenuClose={onMenuClose}
        options={products}
      />
 </div>
   );
}