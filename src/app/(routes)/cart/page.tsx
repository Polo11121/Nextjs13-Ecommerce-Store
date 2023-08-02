"use client";

import { CartItem } from "@/app/components/CartItem";
import { Summary } from "@/app/components/Summary";
import { Container } from "@/app/components/ui/Container";
import { useCartStore } from "@/hooks/useCartStore";
import { MountingProvider } from "@/providers/MountingProvider";

const CartPage = () => {
  const cart = useCartStore((store) => store.items);

  return (
    <MountingProvider>
      <div className="bg-white">
        <Container>
          <div className="px-4 py-16 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-black">Shopping Card</h1>
            <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
              <div className="lg:col-span-7">
                {cart.length ? (
                  <ul>
                    {cart.map((item) => (
                      <CartItem key={item.id} data={item} />
                    ))}
                  </ul>
                ) : (
                  <p className="text-neutral-500">No items added to cart</p>
                )}
              </div>
              <Summary />
            </div>
          </div>
        </Container>
      </div>
    </MountingProvider>
  );
};

export default CartPage;
