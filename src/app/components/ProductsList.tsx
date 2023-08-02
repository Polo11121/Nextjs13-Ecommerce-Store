import { NoResults } from "@/components/ui/NoResults";
import { ProductCard } from "@/components/ui/ProductCard";

interface ProductsListProps {
  title: string;
  items: Product[];
}

export const ProductsList = ({ title, items }: ProductsListProps) => (
  <div className="space-y-4">
    <h3 className="font-bold text-3xl">{title}</h3>
    {items?.length ? (
      <div className="grid gird-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item) => (
          <ProductCard data={item} key={item.id} />
        ))}
      </div>
    ) : (
      <NoResults />
    )}
  </div>
);
