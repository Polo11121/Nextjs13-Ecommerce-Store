import { getProduct } from "@/actions/getProduct";
import { getProducts } from "@/actions/getProducts";
import { ProductsList } from "@/app/components/ProductsList";
import { Gallery } from "@/app/components/ui/Gallery";
import { Info } from "@/app/components/ui/Info";
import { Container } from "@/app/components/ui/Container";

interface ProductPageProps {
  params: {
    productId: string;
  };
}

export const revalidate = 0;

const ProductPage = async ({ params: { productId } }: ProductPageProps) => {
  const product = await getProduct(productId);
  const suggestedProducts = await getProducts({
    categoryId: product?.category?.id,
  });

  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-6">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            <Gallery images={product.images} />
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <Info data={product} />
            </div>
          </div>
          <hr className="my-10" />
          <ProductsList title="Related Items" items={suggestedProducts} />
        </div>
      </Container>
    </div>
  );
};

export default ProductPage;
