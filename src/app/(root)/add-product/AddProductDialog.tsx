import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ProductsType } from "@/src/types/products";
import React, { useState } from "react";
import AddProductSelect from "../add-product-select/AddProductSelect";

export function AddProductDialog({onSelect}: {onSelect: (product: ProductsType) => void}) {

  const [showDialog, setShowDialog] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductsType>({label: '', value: 0});

  const setProduct = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSelect(selectedProduct);
    setShowDialog(false);
  };
  return (
    <Dialog open={showDialog} onOpenChange={setShowDialog}>
      <DialogTrigger asChild>
        <Button variant="outline">Добавяне на продукт</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle>Добавяне на продукт</DialogTitle>
        </DialogHeader>
        <form onSubmit={setProduct}>
            <AddProductSelect setSelectedProduct={setSelectedProduct} />
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Отказ</Button>
            </DialogClose>
            <Button type="submit">Добавяне</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
