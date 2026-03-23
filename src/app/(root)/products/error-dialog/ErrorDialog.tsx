import { Button } from "@/src/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/src/components/ui/dialog";

export function ErrorDialog({ open, onClose }: { open: boolean; onClose: () => void }) {


  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle>Възникна грешка</DialogTitle>
        </DialogHeader>
        <h1>Този продукт вече е добавен.</h1>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Затвори</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
