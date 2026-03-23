import { AddProductDialog } from "./add-product/AddProductDialog";

export default function Home(){

    return (
        <div className="flex h-full items-start p-10 justify-center bg-white">
            <h1 className="text-4xl font-bold text-black">Next Offers</h1>
            <AddProductDialog/>
        </div>
    )
}