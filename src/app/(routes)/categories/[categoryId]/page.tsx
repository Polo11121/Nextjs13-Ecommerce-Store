import { getCategory } from "@/actions/getCategory";
import { getColors } from "@/actions/getColors";
import { getProducts } from "@/actions/getProducts";
import { getSizes } from "@/actions/getSizes";
import { Billboard } from "@/app/components/Billboard";
import { Container } from "@/app/components/ui/Container";
import { Filter } from "@/app/components/ui/Filter";
import { MobileFilters } from "@/app/components/ui/MobileFilters";
import { NoResults } from "@/app/components/ui/NoResults";
import { ProductCard } from "@/app/components/ui/ProductCard";

interface CategoryPageProps {
  params: {
    categoryId: string;
  };
  searchParams: {
    colorId: string;
    sizeId: string;
  };
}

export const revalidate = 0;

const CategoryPage = async ({
  params: { categoryId },
  searchParams: { colorId, sizeId },
}: CategoryPageProps) => {
  const products = await getProducts({ categoryId, colorId, sizeId });
  const sizes = await getSizes();
  const colors = await getColors();
  const category = await getCategory(categoryId);

  return (
    <div className="bg-white">
      <Container>
        <Billboard data={category?.billboard} />
        <div className="px-4 sm:px-6 lg:px-8 pb-24">
          <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
            <MobileFilters sizes={sizes} colors={colors} />
            <div className="hidden lg:block">
              <Filter valueKey="sizeId" name="Sizes" data={sizes} />
              <Filter valueKey="colorId" name="Colors" data={colors} />
            </div>
            <div className="mt-6 lg:col-span-4 lg:mt-0">
              {products.length ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {products.map((product) => (
                    <ProductCard data={product} key={product.id} />
                  ))}
                </div>
              ) : (
                <NoResults />
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CategoryPage;
