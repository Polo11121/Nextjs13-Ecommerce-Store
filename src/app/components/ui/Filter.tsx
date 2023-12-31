"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import qs from "query-string";

interface FilterProps {
  data: (Size | Color)[];
  name: string;
  valueKey: string;
}

export const Filter = ({ data, name, valueKey }: FilterProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const selectedValue = searchParams.get(valueKey);

  const clickHandler = (id: string) => {
    const current = qs.parse(searchParams.toString());

    const query = {
      ...current,
      [valueKey]: id,
    };

    if (current[valueKey] === id) {
      query[valueKey] = null;
    }

    const url = qs.stringifyUrl(
      {
        url: window.location.pathname,
        query,
      },
      { skipNull: true }
    );

    router.push(url);
  };

  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold">{name}</h3>
      <hr className="my-4" />
      <div className="flex flex-wrap gap-2">
        {data.map(({ id, name }) => (
          <div key={id} className="flex items-center">
            <Button
              className={cn(
                "rounded-mb text-sm text-gray-800 p-2 bg-white border border-gray-300",
                selectedValue === id && "bg-black text-white"
              )}
              onClick={() => clickHandler(id)}
            >
              {name}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};
