"use client";
import { AddProductDialog } from "./products/add-product/AddProductDialog";
import { useState } from "react";
import { ProductsType } from "@/src/types/products";
import ProductItem from "./products/product-item/product-item";
import {ErrorDialog} from "./products/error-dialog/ErrorDialog";
import dynamic from 'next/dynamic';
import { OfferDocument } from "./offerDocument/OfferDocument";
import { Button } from "@/src/components/ui/button";

export default function Home() {

  const [products, setProducts] = useState<ProductsType[]>([]);
  const [errorOpen, setErrorOpen] = useState(false);

  const selectHandler = (product: ProductsType) => {

    if(products.some((p) => p.id === product.id)) {
      setErrorOpen(true);
      return;
    }

    setProducts((prev) => [...prev, product]);
  };

  const PDFDownloadLink = dynamic(() => import('@react-pdf/renderer').then((mod) => mod.PDFDownloadLink),{ ssr: false });

  return (
   <div className="flex items-center max-w-7xl w-full p-10 justify-center bg-white flex-col gap-5">

        <ErrorDialog open={errorOpen} onClose={() => setErrorOpen(false)} />

    <h1 className="text-4xl font-bold text-black">
        Създаване на оферти
    </h1>

  <div className="flex flex-col justify-center items-center gap-5">
    {products.length <= 0 && (
      <p className="text-gray-500">
        Няма добавени продукти. Моля, добавете продукт.
      </p>
    )}

    <AddProductDialog onSelect={selectHandler} />
  </div>

  <div className="flex flex-col w-full">
    {products.length > 0 && <div className="flex bg-gray-50 p-2 ps-4 pe-4 rounded justify-between w-full items-center">
        <h1 className="font-bold text-2xl text-black p-2 rounded">Продукт</h1>
        <h1 className="font-bold text-2xl text-black p-2 rounded">Цена на продукта</h1>
    </div> }
   
    {products.map((product) => (
      <ProductItem key={product.id} product={product} setProducts={setProducts} />
    ))}
  </div>

  {products.length > 0 && (
  <PDFDownloadLink
    document={<OfferDocument products={products} />}
    fileName="Оферта.pdf"
  >
    {({ loading }) => (
      <Button
        className="mt-4 px-6 py-2 text-white rounded disabled:opacity-50"
        disabled={loading}
      >
        {loading ? 'Генериране...' : 'Изтегли оферта (PDF)'}
      </Button>
    )}
  </PDFDownloadLink>
)}
</div>
  );
}
