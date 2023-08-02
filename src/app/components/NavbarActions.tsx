"use client";

import { Button } from "@/components/ui/Button";
import { useCartStore } from "@/hooks/useCartStore";
import { MountingProvider } from "@/providers/MountingProvider";
import { ShoppingBag } from "lucide-react";
import { useRouter } from "next/navigation";

export const NavbarActions = () => {
  const cart = useCartStore((store) => store.items);
  const router = useRouter();

  const clickHandler = () => router.push("/cart");

  return (
    <MountingProvider>
      <div className="ml-auto flex items-center gap-x-4">
        <Button
          onClick={clickHandler}
          className="flex items-center rounded-full bg-black px-4 py-2"
        >
          <ShoppingBag size={20} color="white" />
          <span className="ml-2 text-sm font-medium text-white">
            {cart.length}
          </span>
        </Button>
      </div>
    </MountingProvider>
  );
};
