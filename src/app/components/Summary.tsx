"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useCartStore } from "@/hooks/useCartStore";
import { Currency } from "@/components/ui/Currency";
import { Button } from "@/components/ui/Button";
import { toast } from "react-hot-toast";
import axios from "axios";

export const Summary = () => {
  const searchParams = useSearchParams();
  const cart = useCartStore((store) => store.items);
  const clearCart = useCartStore((store) => store.clearCart);

  const cartTotal = cart.reduce((acc, item) => acc + Number(item.price), 0);

  const checkoutHandler = async () => {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
      {
        productIds: cart.map((item) => item.id),
      }
    );

    window.location = response.data.url;
  };

  useEffect(() => {
    if (searchParams.has("success")) {
      toast.success("Payment completed.");
      clearCart();
    }
    if (searchParams.has("canceled")) {
      toast.error("Payment canceled.");
    }
  }, [searchParams, clearCart]);

  return (
    <div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
      <h2 className="text-lg font-medium text-gray-900">Order Summary</h2>
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="text-base font-medium text-gray-900">Order total</div>
          <Currency value={cartTotal} />
        </div>
      </div>
      <Button
        disabled={!cart.length}
        onClick={checkoutHandler}
        className="w-full mt-6"
      >
        Checkout
      </Button>
    </div>
  );
};
