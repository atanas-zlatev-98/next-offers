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

export function AddProductDialog({onSelect}: {onSelect: (product: ProductsType) => void}) {

    const [showDialog, setShowDialog] = useState(false);

  const setProduct = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSelect({
      name: "Sample Product",
      price: 19.99,
    });
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
