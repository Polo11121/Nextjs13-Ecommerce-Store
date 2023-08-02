import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import toast from "react-hot-toast";

interface CartStoreStore {
  items: Product[];
  addItem: (item: Product) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
}

export const useCartStore = create(
  persist<CartStoreStore>(
    (set, get) => ({
      items: [],
      addItem: (item) => {
        const currentItems = get().items;
        const itemExists = currentItems.find(
          (currentItem) => currentItem.id === item.id
        );

        if (itemExists) {
          return toast("Item already in cart.");
        }

        set((prevState) => ({ items: [...prevState.items, item] }));
        return toast.success("Item added to cart.");
      },
      removeItem: (id) => {
        set((prevState) => ({
          items: prevState.items.filter((item) => item.id !== id),
        }));

        toast.success("Item removed from cart.");
      },
      clearCart: () => set({ items: [] }),
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
