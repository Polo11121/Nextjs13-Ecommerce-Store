"use client";

import { usePreviewModalStore } from "@/hooks/usePreviewModalStore";
import { Modal } from "@/components/ui/Modal";
import { Gallery } from "@/app/components/ui/Gallery";
import { Info } from "@/components/ui/Info";

export const PreviewModal = () => {
  const isOpen = usePreviewModalStore((store) => store.isOpen);
  const product = usePreviewModalStore((store) => store.data);
  const toggleModalVisibility = usePreviewModalStore(
    (store) => store.toggleModalVisibility
  );

  const closeModalHandler = () => toggleModalVisibility();

  return product ? (
    <Modal onClose={closeModalHandler} isOpen={isOpen}>
      <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
        <div className="sm:col-span-4 lg:col-span-5">
          <Gallery images={product.images} />
        </div>
        <div className="sm:col-span-8 lg:col-span-7">
          <Info data={product} />
        </div>
      </div>
    </Modal>
  ) : null;
};
