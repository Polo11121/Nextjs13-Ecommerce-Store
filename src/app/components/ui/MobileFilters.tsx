"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { IconButton } from "@/components/ui/IconButton";
import { Plus, X } from "lucide-react";
import { Dialog } from "@headlessui/react";
import { Filter } from "@/components/ui/Filter";

interface MobileFiltersProps {
  colors: Color[];
  sizes: Size[];
}

export const MobileFilters = ({ colors, sizes }: MobileFiltersProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const modalVisibilityHandler = () => setIsOpen((prevState) => !prevState);

  return (
    <>
      <Button
        onClick={modalVisibilityHandler}
        className="flex items-center gap-x-2 lg:hidden"
      >
        Filters
        <Plus size={20} />
      </Button>

      <Dialog
        open={isOpen}
        as="div"
        className="relative z-40 lg:hidden"
        onClose={modalVisibilityHandler}
      >
        <div className=" fixed inset-0 bg-black bg-opacity-25" />
        <div className="fixed inset-0 z-40 flex">
          <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
            <div className="flex items-center justify-center px-4">
              <IconButton
                icon={<X size={15} />}
                onClick={modalVisibilityHandler}
              />
            </div>
            <div className="p-4">
              <Filter valueKey="sizeId" name="Sizes" data={sizes} />
              <Filter valueKey="colorId" name="Colors" data={colors} />
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};
