import { Button } from "@/src/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogFooter,DialogHeader, DialogTitle, DialogTrigger} from "@/src/components/ui/dialog";
import { ProductsType } from "@/src/types/products";
import React, { useState } from "react";
import AddProductSelect from "../add-product-select/AddProductSelect";

export function AddProductDialog({onSelect}: {onSelect: (product: ProductsType) => void}) {

  const [showDialog, setShowDialog] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductsType | null>(null);

  const setProduct = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (selectedProduct) {
      onSelect(selectedProduct);
    }
    
    setShowDialog(false);
  };

  return (
    <Dialog open={showDialog} onOpenChange={setShowDialog}>

      <DialogTrigger asChild>
        <Button className="cursor-pointer" variant="outline">Добавяне на продукт</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-sm">

        <DialogHeader>
          <DialogTitle>Добавяне на продукт</DialogTitle>
        </DialogHeader>

        <form onSubmit={setProduct}>

            <AddProductSelect setSelectedProduct={setSelectedProduct} />

          <DialogFooter className="mt-5">
            <DialogClose asChild>
              <Button className="cursor-pointer" variant="outline">Отказ</Button>
            </DialogClose>

            <Button className="cursor-pointer" type="submit">Добавяне</Button>
          </DialogFooter>

        </form>

      </DialogContent>

    </Dialog>
  );
}
