import { create } from "zustand";

interface PreviewModalStore {
  isOpen: boolean;
  data?: Product;
  toggleModalVisibility: (data?: Product) => void;
}

export const usePreviewModalStore = create<PreviewModalStore>((set) => ({
  isOpen: false,
  data: undefined,
  toggleModalVisibility: (data?: Product) =>
    set((prevState) => ({ isOpen: !prevState.isOpen, data })),
}));
