"use client";

import { MouseEventHandler } from "react";
import { IconButton } from "@/components/ui/IconButton";
import { Expand, ShoppingCart } from "lucide-react";
import { Currency } from "@/components/ui/Currency";
import { useRouter } from "next/navigation";
import { usePreviewModalStore } from "@/hooks/usePreviewModalStore";
import { useCartStore } from "@/hooks/useCartStore";
import Image from "next/image";

interface ProductCardProps {
  data: Product;
}

export const ProductCard = ({ data }: ProductCardProps) => {
  const toggleModalVisibility = usePreviewModalStore(
    (store) => store.toggleModalVisibility
  );
  const addItem = useCartStore((store) => store.addItem);
  const router = useRouter();

  const clickHandler = () => router.push(`/product/${data.id}`);

  const showPreviewHandler: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    toggleModalVisibility(data);
  };

  const addToCartHandler: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    addItem(data);
  };

  return (
    <div
      onClick={clickHandler}
      className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4"
    >
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image
          alt="image"
          src={data?.images?.[0].url}
          fill
          className="aspect-square object-cover rounded-md"
        />
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
          <div className="flex gap-x-6 justify-center">
            <IconButton
              onClick={showPreviewHandler}
              icon={<Expand size={20} className="text-gray-600" />}
            />
            <IconButton
              onClick={addToCartHandler}
              icon={<ShoppingCart size={20} className="text-gray-600" />}
            />
          </div>
        </div>
      </div>
      <div>
        <p className="font-semibold text-lg">{data.name}</p>
        <p className="text-sm text-gray-500">{data.category?.name}</p>
      </div>
      <div className="flex items-center justify-between">
        <Currency value={data?.price} />
      </div>
    </div>
  );
};
