"use client";
import { AddProductDialog } from "../../components/products/add-product/AddProductDialog";
import { useState } from "react";
import { ProductsType } from "@/src/types/products";
import ProductItem from "../../components/products/product-item/product-item";
import {ErrorDialog} from "../../components/products/error-dialog/ErrorDialog";
import dynamic from 'next/dynamic';
import { OfferDocument } from "../../components/shared/offerDocument/OfferDocument";
import { Button } from "@/src/components/ui/button";

export default function Home() {

  const [products, setProducts] = useState<ProductsType[]>([]);
  const [errorOpen, setErrorOpen] = useState(false);

  const removeProductHandler = (id: number) => {
    setProducts((prev)=> prev.filter((p) => p.id !== id));
  }

  const selectHandler = (product: ProductsType) => {

    if(products.some((p) => p.id === product.id)) {
      setErrorOpen(true);
      return;
    }

    setProducts((prev) => [...prev, product]);
  };

  const PDFDownloadLink = dynamic(() => import('@react-pdf/renderer').then((mod) => mod.PDFDownloadLink),{ ssr: false });

 return (
  <div className="flex items-center max-w-7xl w-full p-4 md:p-10 justify-center bg-white flex-col gap-5">

    <ErrorDialog open={errorOpen} onClose={() => setErrorOpen(false)} />

    <h1 className="text-2xl md:text-4xl font-bold text-black text-center">
      Създаване на оферти
    </h1>

    <div className="flex flex-col justify-center items-center gap-5 w-full">
      {products.length <= 0 && (
        <p className="text-gray-500 text-center text-sm md:text-base">
          Няма добавени продукти. Моля, добавете продукт.
        </p>
      )}
      <AddProductDialog onSelect={selectHandler} />
    </div>

    <div className="flex flex-col w-full">
      {products.length > 0 && (
        <div className="flex bg-gray-50 p-2 px-3 md:px-4 rounded justify-between w-full items-center">
          <h1 className="font-bold text-base md:text-2xl text-black p-1 md:p-2 rounded">Продукт</h1>
          <h1 className="font-bold text-base md:text-2xl text-black p-1 md:p-2 rounded">Цена на продукта</h1>
        </div>
      )}

      {products.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          setProducts={setProducts}
          onRemove={removeProductHandler}
        />
      ))}
    </div>

    {products.length > 0 && (
      <PDFDownloadLink document={<OfferDocument products={products} />} fileName="Оферта.pdf">
        {({ loading }) => (
          <Button
            className="w-full md:w-auto mt-4 px-6 py-2 text-white rounded disabled:opacity-50 cursor-pointer"
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
